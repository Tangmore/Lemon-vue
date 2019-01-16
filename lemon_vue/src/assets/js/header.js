import $ from 'jquery'
 function getHeaderEffect() {
            
            function navSpread(elem){
                $(elem).children(":first").css("animation","topChange0 0.5s linear forwards")
                        .next().css("animation","bottomChange0 0.5s linear forwards");
                    $(elem).attr("data-status", 1);
                    //下拉选项框变化
                    $("[data-target=collapse_navbar]").removeClass("collapse-navbar-0").addClass("collapse-navbar-1");
            }
            function navFold(elem){
                $(elem).children(":first").css("animation", "topChange1 0.5s linear forwards")
                        .next().css("animation","bottomChange1 0.5s linear forwards");
                    $(elem).attr("data-status", 0);
                    //下拉选项框变化
                    $("[data-target=collapse_navbar]").removeClass("collapse-navbar-1").addClass("collapse-navbar-0");
            }
            //region header-nav事件
            //导航按钮事件
            $("[data-trigger=navIcon]").click(function (){
                var $dataStatus = $(this).attr("data-status");
                if($dataStatus == 0){
                    //导航按钮变化
                    navSpread(this);

                    return;
                }
                if($dataStatus == 1){
                    navFold(this);
                    return;
                }
            });
            // 个人中心事件
            $("[data-trigger=toggle]").on("mouseover",function(){
                var $dataStatus = $("[data-trigger=navIcon]").attr("data-status");
                if($dataStatus == 1){
                    navFold("[data-trigger=navIcon]");
                }
                $("[data-target=toggleItem]").removeClass("d-none").addClass("d-flex");
            }).on("mouseout",function(){
                $("[data-target=toggleItem]").removeClass("d-flex").addClass("d-none")})
            //搜索icon事件
            $("[data-trigger=searchIcon]").click( function(){
                //弹出搜索栏
                $("#search-page").addClass("d-block");
            })
            //endregion header-nav事件

             //region search-page搜索栏--start
            // 关闭icon事件
            $("#close-icon").click( function () {
                $("#search-page").removeClass("d-block");
            })
            //search-address事件
            var $searchAddress = $("#search-address");
            $searchAddress.click(function () {
                $("#search-page [data-target=content]").removeClass("d-none");
                $(this).css("border","1px solid rgba(40, 167, 69, 0.7)")
                    .children(":nth-child(2)").focus();
                $(this).parent().next().children(":first").prop("style","");
            })
            $("#search-address").children(":nth-child(2)").on("focus", function () {
                $searchAddress.next().removeClass("d-none");
            }).on("blur", function () {
                $searchAddress.next().addClass("d-none");
            })

            //search-all事件
            $("#search-all").click(function () {
                $(this).css("border","1px solid rgba(40, 167, 69, 0.7)")
                .children(":nth-child(2)").focus();
                $(this).parent().prev().children(":first").prop("style","");
            })
            //endregion search-page搜索栏--end

            $("#nav-items").on("click","li [data-target='item']",function(){
                $("[data-trigger=navIcon][data-status=1]").trigger("click");
            })
        }
export {getHeaderEffect} 
