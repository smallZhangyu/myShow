/**
 * Created by fw on 12/8 0008.
 */
requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

requirejs(['jquery'],function($){
    $('.subMenu-dd-inner li').each(function(index,event){
        var $this=$(this);
        var $layer=$('.subMenu-layer li').eq(index);
        $this.on('mouseenter',function(event){
            $this.siblings('li').removeClass('hover').end().addClass('hover');
            $layer.parent().show();
            $layer.siblings('li').hide().end().show();
            $this.parent().css('height','auto');
        })
    });

    $('.subMenu-dd').on('mouseleave',function(){
        $('.subMenu-dd-inner li').removeClass('hover');
        $('.subMenu-layer').hide();
        if($('.subMenu').hasClass('subMenu-index')){
        $('.subMenu-dd-inner').css('height','310px');
        }
    });

    $('.subMenu').hover(function(){
        $(this).addClass('hover');
        if(!$(this).hasClass('subMenu-index')){
            $('.subMenu-dd').show();
        }
    },function(){
        $(this).removeClass('hover');
        if(!$(this).hasClass('subMenu-index')){
            $('.subMenu-dd').hide();
        }
    });
})


