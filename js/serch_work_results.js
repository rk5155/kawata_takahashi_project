$(function() {
  

  $(prefectures).each((i, ele) => {
    let list = `<li class="serch__num_${ele.code}">${ele.name}</li>`
      
      $("#search .serch_work ul").append(list);
  })

  $('#search .serch_work ul li').click(function() {
      let name = $(this).text();
      let serchNum = $(this).attr('class').split("_");
      $(".serch_work").toggleClass("area_none")
      $(".serch_area").toggleClass("area_none");
      

      

      if (serchNum[3] < 10) {
        serchNum[3] = 0 + serchNum[3]
      }

      let prefectureNum = serchNum[3];

      console.log(prefectureNum);
      
      // 都道府県api https://www.land.mlit.go.jp/webland/api.html#todofukenlist
      $.ajax({
        type: 'GET',
        url: `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${prefectureNum}`,
      }).done(function (data) {
        let municipalities = data.data;
        let municipalitiesNum = municipalities.length;
        console.log(municipalities);
        
        for (let index = 0; index < municipalitiesNum; index++) {
          let municipalitiesName = municipalities[index].name;
          let municipalitiesID = municipalities[index].id;

          let serchAreaCheck = `<div class="serch_area__box"><input name="check" type="checkbox" name="riyu" value="${municipalitiesID}">${municipalitiesName}</div>`

          $(".serch_area form").prepend(serchAreaCheck)
          
        }

        $('.serch_area form p').click(function() {
          let municipalitiesId = [];
          let urlParamStr = "";

          $("#search .serch_area form .serch_area__box input:checkbox:checked").each((i, ele) => {
            municipalitiesId.push($(ele).val());
          })

          $(municipalitiesId).each((i, ele) => {
              urlParamStr += "&" + ele
          })
          location.href = `/search_work.html?${name}${urlParamStr}`;
        });
      });

    
    
  })

  $('#search .serch_area .serch_area__return').click(function() {
    $(".serch_work").toggleClass("area_none");
    $(".serch_area").toggleClass("area_none");

    $(".serch_area form .serch_area__box").each((i, ele) => {
      $(ele).remove();
    })
    
  })

  
  
  
  
  // スクレイピング
  $.ajax({
    type: 'GET',
    url: 'https://tenshoku.mynavi.jp/hokkaido/list/h01/',
  }).done(function (data) {

    // 取得した一覧から個別のページへの情報を処理.
    $(data).find('.recruit .recruit_title').each(function(index, val) {

      let title = $(val).text();
      

      $("#main .aaa ul").append(`<p>${title}</p><br>`)
      
    });
  });
    
  
});