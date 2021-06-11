$(function() {
    
    
    
    let urlParamStr = window.location.search;
    let searchWord = decodeURIComponent(urlParamStr.slice(1))
    let searchWordList = searchWord.split("&")
    console.log(searchWordList);
    let code
    let url
    let freeWord = searchWordList[0].split("　");
    console.log(freeWord);
    
    if (freeWord[0] === "") {
        freeWord = false
    }
    let prefectureName = searchWordList[1];
    let municipality = searchWordList[2];
    let employment = searchWordList[3];

    for (let index = 0; index < prefectures.length; index++) {
        if (prefectureName === prefectures[index].name) {
            prefectureName = prefectures[index].area.toLowerCase();
    
            if (prefectures[index].code < 10) {
                code = "0" + prefectures[index].code;
              } else {
                code = prefectures[index].code;
              }
            
        }
    }
    // https://tenshoku.mynavi.jp/list/kwあああ_kwあああ


    function freeWords(category, employment) {
        // フリーワードが一つ以上のとき
        if (freeWord.length >= 1) {
            let keyWord = ""
            
            for (let index = 0; index < freeWord.length; index++) {
                if (index === 0) {
                    keyWord += `kw${freeWord[index]}`
                } else {
                    keyWord += `_kw${freeWord[index]}`
                }
            }

            // 雇用形態があったら
            if (employment) {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/${category}${code}/${keyWord}_kw${employment}`
            } else {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/${category}${code}/${keyWord}`
            }
        }
        else {
            // 雇用形態があったら
            if (employment) {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/${category}${code}/${keyWord}_kw${employment}`
            } else {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/${category}${code}/${keyWord}`
            }
        }
    }

    // 全ての検索キーワードがあるとき
    let keyword1 = freeWord && prefectureName && municipality && employment
    // フリーワードと市町村区が空欄のとき
    let keyword2 = !freeWord && prefectureName && !municipality && employment
    // 市町村区のみ空欄のとき
    let keyword3 = freeWord && prefectureName && !municipality && employment
    // フリーワードのみ空欄のとき
    let keyword4 = !freeWord && prefectureName && municipality && employment


    $.ajax({
        type: 'GET',
        url: `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${code}`,
      }).done(function (data) {
        
        $(data.data).each((i, ele) => {
            if (ele.name === municipality) {
                code = ele.id
            }
        })

        if (employment === "すべて") {
            if (keyword1) {
                freeWords("c");
            }
            else if (keyword2) {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/p${code}/`
            }
            else if (keyword3) {
                freeWords("p");
            }
            else if(keyword4) {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/c${code}`
            }
            else {
                url = `https://tenshoku.mynavi.jp/list/kw${freeWord}`
            }
        }
        // すべて以外を選択したとき
        else {
            if (keyword1) {
                freeWords("c", employment)
            }
            else if (keyword2) {
                // フリーワードが2つ以上のとき
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/p${code}/kw${employment}`
            }
            else if (keyword3) {
                // フリーワードが2つ以上のとき
                freeWords("p");
            }
            else if(keyword4) {
                url = `https://tenshoku.mynavi.jp/${prefectureName}/list/c${code}/kw${employment}`
            }
            else {
                url = `https://tenshoku.mynavi.jp/list/kw${freeWord}_kw${employment}`
            }
        }

        

        console.log(url);
        // マイナビをスクレイピング
        $.ajax({
            type: 'GET',
            url: `${url}`,
          }).done(function (data) {
            let searchWord = $(data).find('h1').text();
            $("h1").append(searchWord);

            let result = $(data).find('.js_total_num').text();
            $("h2").append(result);

            // 取得した一覧から個別のページへの情報を処理.
            $(data).find('h3').each(function(index, val) {
              let title = $(val).text();
              $(".search_results").append(`<p>${title}</p><br>`)
            });
          });


    });
});