$(function() {
  

  $(prefectures).each((i, ele) => {
    let list = `<li class="serch__num_${ele.code}">${ele.name}</li>`
      
      $("#search .serch_work ul").append(list);
  })

  $('#search .serch_work ul li').click(function() {
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
        
        for (let index = 0; index < municipalitiesNum; index++) {
          let municipalitiesName = municipalities[index].name;

          // let serchAreaLi = `<li><a href="#">${municipalitiesName}</a></li>`
          let serchAreaLi = `<div class="serch_area__box"><input type="checkbox" name="riyu" value="1">${municipalitiesName}</div>`

          $(".serch_area form").append(serchAreaLi)
          
        }
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