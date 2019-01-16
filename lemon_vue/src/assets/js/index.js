import $ from 'jquery'

// $(function(){
//     // tabToggle();
//     toTop();
// })
    
function tabToggle() {
    // var oTab = document.getElementById('tab_menu');
    var aLi = document.querySelector('#tab_menu>li');
    var aBox = document.querySelectorAll('.tab_box>div');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function () {    
            for (var j = 0; j < aLi.length; j++) {
                aLi[j].className=aLi[j].className.replace('selected','');//去掉所有li的selected样式
                aBox[j].className = 'hide';//隐藏所有的tabDiv
            }
            aLi[this.index].className+=' selected';
            aBox[this.index].className = '';
        }
    }
}

function toTop(){
    $(window).scrollTop(0); //刷新后回到顶部
    var dheight = 400;
    $(document).scroll(function () {
        var s_top = $(document).scrollTop();
        if (s_top > dheight) {
            $(".footerBox .toTop").show();
        } else {
            $(".footerBox .toTop").hide();
        }
    });

    $(".footerBox .toTop").click(function () {
       var  timer = setInterval(function () {
            var top = $(document).scrollTop();//获取滚动条距离顶部距离
            var step = top / 5;//滚动条每走一步的距离
            $(document).scrollTop(top - step);//更新距离顶部的高度
            if (top == 0) {
                clearInterval(timer);
            }
        }, 30);
    });

}

// export {tabToggle,carouselTask,toTop};
export {toTop};