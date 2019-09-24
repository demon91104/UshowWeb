var app = new Vue({
    el:'#sidebar',
    data:{
        basicRotate:false,
        reportRotate:false,
        setRotate:false,
    },
    methods: {
        sidebarToggle(){ 
                $('.sidebar').toggleClass('sidebarToggle')
                $('.userText,.headName,.basicText').toggleClass('displayNone')
                $('.userImg').toggleClass('marginLeft179')
                $('.content').toggleClass('marginRight70')
                $('.sidebarBtn').toggleClass('fas fa-bars fas fa-ellipsis-v')
        },
        sidebarToggle2(){
            $('.toggleBody').slideToggle()
        },
        userToggle(){
            $('.rightImgBlock').slideToggle()
        }
    }
})

$('.basicMain').click(function(){
    $(this).next().stop().slideToggle();
})
