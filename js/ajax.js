$(function() {

  
  Object.keys(prefectures).forEach((key) => {
    let list = `<li>${prefectures[key]}</li>`
    
    $("#search ul").append(list);
  });
  
  // $.ajax({
  //     type: "GET",
  //     url: `https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20151&to=20152&area=${}`,
  //     dataType : "json"
  //   })
  //   // Ajaxリクエストが成功した場合
  //   .done(function(data){
  //     console.log(data.results[0]);
  //   })
  //   // Ajaxリクエストが失敗した場合
  //   .fail(function(XMLHttpRequest, textStatus, errorThrown){
  //     alert(errorThrown);
  //   });

  
    
    $.ajax({
        type: "GET",
        url: "https://job.yahooapis.jp/v1/furusato/jobinfo/?appid=dj00aiZpPXgyd3ZOOG5JRk9FUiZzPWNvbnN1bWVyc2VjcmV0Jng9ZDE-&localGovernmentCode=352039",
        dataType : "json"
      })
      // Ajaxリクエストが成功した場合
      .done(function(data){
        console.log(data.results[0]);
      })
      // Ajaxリクエストが失敗した場合
      .fail(function(XMLHttpRequest, textStatus, errorThrown){
        alert(errorThrown);
      });
});



  