$(function() {
    
    
    let urlParamStr = window.location.search;
    // let productList = urlParamStr.split("&from=");

    

    let searchWord = decodeURIComponent(urlParamStr.slice(1))

    console.log(searchWord);


        // スクレイピング
    $.ajax({
        type: 'GET',
        url: `https://tenshoku.mynavi.jp/list/kw${searchWord}`,
      }).done(function (data) {

        console.log(data);
  
        // 取得した一覧から個別のページへの情報を処理.
        $(data).find('.cassetteRecruit__copy').each(function(index, val) {
  
          let title = $(val).text();
          
  
          $(".search_results").append(`<p>${title}</p><br>`)
          
        });
      });



   
});