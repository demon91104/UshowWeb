var app = new Vue({
    el: '.sidebar',
    data: {
        basicRotate: false,
        reportRotate: false,
        setRotate: false,
        toggleMove:false,
    },
    methods: {
        sidebarToggle() {
            $('.sidehead,.sidebody,.contentBlock').toggleClass('toggledHead')
        },
        userToggle() {
            $('.rightImgBlock').slideToggle()
        }
    }
})
$(document).ready(function () {
    $('.toggleMenu').hide();
})

$('.basicToggleBlock').click(function () {
    $(this).next().slideToggle();
})
$(function () {
    $("[data-toggle='popover']").popover({
        title: '<button type="button">123</button>',
         content: "Blabla <br> <h2>Cool stuff!</h2>",
          html: true, 
          placement: "auto"
    });
});