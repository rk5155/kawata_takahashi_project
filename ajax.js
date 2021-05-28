$(function() {
    
    $.ajax({
        type: "GET",
        url: "https://job.yahooapis.jp/v1/furusato/jobinfo/?appid=dj00aiZpPXgyd3ZOOG5JRk9FUiZzPWNvbnN1bWVyc2VjcmV0Jng9ZDE-&localGovernmentCode=352039",
        dataType : "json"
      })
      // Ajaxリクエストが成功した場合
      .done(function(data){
        console.log(data.results[0].title);
      })
      // Ajaxリクエストが失敗した場合
      .fail(function(XMLHttpRequest, textStatus, errorThrown){
        alert(errorThrown);
      });
});



  