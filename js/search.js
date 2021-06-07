$(function() {
    

    $('.search_form__btn').click(function() {
        let freeWord = $(".search_form__freeword input").val();

        location.href = `/search_results.html?${freeWord}`;
    })
});