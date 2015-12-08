/**
 * Created by fw on 12/8 0008.
 */
requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

requirejs(['jquery'],function($){
    $('#backTop').on('click',move);
    $(window).on('scroll',function(){
        checkPosition($(window).height());
    });
    checkPosition($(window).height());
    //返回顶部效果，缓慢
    function move(){
        $('html,body').animate({
            scrollTop:0
        },300);
    }
    //立刻返回顶部
    function go(){
        $('html,body').scrollTop(0);
    }
    //判断滚动条的位置，处理按钮的显示状况
    function checkPosition(pos){
        if($(window).scrollTop() > pos){
            $('#backTop').fadeIn();
        }else{
            $('#backTop').fadeOut();
        }
    }
});