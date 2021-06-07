$(function() {
    $('.search_form__btn').click(function() {
        let freeWord = $(".search_form__freeword input").val();
        let place = $(".search_form__place input").val();
        let employment = $(".search_form__employment select option:selected").val();
        console.log(employment);

        if (!freeWord) {
            location.href = `/search_results.html?${place}`;
        } else if (!place) {
            location.href = `/search_results.html?${freeWord}`;
        } else {
            location.href = `/search_results.html?${freeWord}&${place}&${employment}`;
        }


        
    })
});