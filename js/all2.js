var app = new Vue({
    el: '#vue',
    data: {
        basicRotate: false,
        reportRotate: false,
        setRotate: false,
        toggleMove: false,
    },
    methods: {
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
        title: '',
        content: '<a class="btn btn-primary" href="#">Logout</a>',
        html: true,
        placement: "auto"
    });
});