$(function() {
    const prefectures = [
        {
          "code": 1,
          "name": "北海道",
          "area": "Hokkaido"
        },
        {
          "code": 2,
          "name": "青森",
          "area": "tohoku"
        },
        {
          "code": 3,
          "name": "岩手",
          "area": "tohoku"
        },
        {
          "code": 4,
          "name": "宮城",
          "area": "tohoku"
        },
        {
          "code": 5,
          "name": "秋田",
          "area": "tohoku"
        },
        {
          "code": 6,
          "name": "山形",
          "area": "tohoku"
        },
        {
          "code": 7,
          "name": "福島",
          "area": "tohoku"
        },
        {
          "code": 8,
          "name": "茨城",
          "area": "kitakanto"
        },
        {
          "code": 9,
          "name": "栃木",
          "area": "kitakanto"
        },
        {
          "code": 10,
          "name": "群馬",
          "area": "kitakanto"
        },
        {
          "code": 11,
          "name": "埼玉",
          "area": "shutoken"
        },
        {
          "code": 12,
          "name": "千葉",
          "area": "shutoken"
        },
        {
          "code": 13,
          "name": "東京",
          "area": "shutoken"
        },
        {
          "code": 14,
          "name": "神奈川",
          "area": "shutoken"
        },
        {
          "code": 15,
          "name": "新潟",
          "area": "koshinetsu"
        },
        {
          "code": 16,
          "name": "富山",
          "area": "hokuriku"
        },
        {
          "code": 17,
          "name": "石川",
          "area": "hokuriku"
        },
        {
          "code": 18,
          "name": "福井",
          "area": "hokuriku"
        },
        {
          "code": 19,
          "name": "山梨",
          "area": "koshinetsu"
        },
        {
          "code": 20,
          "name": "長野",
          "area": "koshinetsu"
        },
        {
          "code": 21,
          "name": "岐阜",
          "area": "tokai"
        },
        {
          "code": 22,
          "name": "静岡",
          "area": "tokai"
        },
        {
          "code": 23,
          "name": "愛知",
          "area": "tokai"
        },
        {
          "code": 24,
          "name": "三重",
          "area": "tokai"
        },
        {
          "code": 25,
          "name": "滋賀",
          "area": "kansai"
        },
        {
          "code": 26,
          "name": "京都",
          "area": "kansai"
        },
        {
          "code": 27,
          "name": "大阪",
          "area": "kansai"
        },
        {
          "code": 28,
          "name": "兵庫",
          "area": "kansai"
        },
        {
          "code": 29,
          "name": "奈良",
          "area": "kansai"
        },
        {
          "code": 30,
          "name": "和歌山",
          "area": "kansai"
        },
        {
          "code": 31,
          "name": "鳥取",
          "area": "chugoku"
        },
        {
          "code": 32,
          "name": "島根",
          "area": "chugoku"
        },
        {
          "code": 33,
          "name": "岡山",
          "area": "chugoku"
        },
        {
          "code": 34,
          "name": "広島",
          "area": "chugoku"
        },
        {
          "code": 35,
          "name": "山口",
          "area": "chugoku"
        },
        {
          "code": 36,
          "name": "徳島",
          "area": "shikoku"
        },
        {
          "code": 37,
          "name": "香川",
          "area": "shikoku"
        },
        {
          "code": 38,
          "name": "愛媛",
          "area": "shikoku"
        },
        {
          "code": 39,
          "name": "高知",
          "area": "shikoku"
        },
        {
          "code": 40,
          "name": "福岡",
          "area": "kyushu"
        },
        {
          "code": 41,
          "name": "佐賀",
          "area": "kyushu"
        },
        {
          "code": 42,
          "name": "長崎",
          "area": "kyushu"
        },
        {
          "code": 43,
          "name": "熊本",
          "area": "kyushu"
        },
        {
          "code": 44,
          "name": "大分",
          "area": "kyushu"
        },
        {
          "code": 45,
          "name": "宮崎",
          "area": "kyushu"
        },
        {
          "code": 46,
          "name": "鹿児島",
          "area": "kyushu"
        },
        {
          "code": 47,
          "name": "沖縄",
          "area": "kyushu"
        }
      ]
    
    
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