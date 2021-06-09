$(function() {
    $('.search_form__btn').click(function() {
        console.log(33);
        let freeWord = $(".search_form__freeword input").val();
        let prefectureName = $(".search_form__place input").val();
        let employment = $(".search_form__employment select option:selected").val();
        let municipality = $(".search_form__municipality input").val();

        console.log(prefectureName === "");
        

        prefectureName = prefectureName.replace("県", "").replace("府", "").replace("都", "")

        

        if (prefectureName === "") {
            alert("都道府県を入力してください")
        }
        else {
            location.href = `/search_results.html?${freeWord}&${prefectureName}&${municipality}&${employment}`;
        }

        


        
    })
});