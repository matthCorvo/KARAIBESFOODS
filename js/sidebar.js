(function ($) {

    "use strict";
    
//Filters collapse
var $headingFilters = $('.filter_type h4 a');
$headingFilters.on('click', function () {
    $(this).toggleClass('opened');
})
$headingFilters.on('click', function () {
    $(this).toggleClass('closed');
});
//Filters on mobile
    $('a.open_filters').on("click", function () {
        $('.filter_col').toggleClass('show');
        $('main').toggleClass('freeze');
        $('.layer').toggleClass('layer-is-visible');
    });
})(window.jQuery); 