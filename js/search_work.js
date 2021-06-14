$(function() {
    let urlParamStr = window.location.search;
    let searchWordList = urlParamStr.split("&")
    let name = decodeURIComponent(searchWordList[0].slice(1));
    let area

    prefectures.forEach((ele, i) => {
        if (ele.name === name) {
            area = ele.area;
        }
    })

    console.log(area);
    searchWordList.shift();
    let cityCode = "";

    $(searchWordList).each((i, ele) => {
        if (i === 0) {
            cityCode += `c${ele}`
        }
        else {
            cityCode += `+c${ele}`
        }
    })
    console.log(cityCode);

    let url = `https://tenshoku.mynavi.jp/${area}/list/${cityCode}`

    console.log(url);


    $.ajax({
        type: 'GET',
        url: `${url}`,
      }).done(function (data) {
        let searchWord = $(data).find('h1');
        let recruitHead = $(data).find('.recruit_head');
        $("body").append(searchWord)
        $("body").append(recruitHead)
      });

    
});