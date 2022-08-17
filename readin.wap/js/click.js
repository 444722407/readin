$(function(){
    // 懒加载
    $(".book_item img").lazyload({
        placeholder : "images/default_pic@2x.png", //用图片提前占位
        effect: "fadeIn", // 载入使用何种效果
        threshold: 200, 
    });

    // 显示右侧菜单栏
    function hideMenu(){
        $('.menu_mask').hide();
        $('.menu_mask_body').addClass('close');
        $('body').css({
            "overflow":"visible"
        })
    }
    function showMenu(){
        $('.menu_mask').show();
        $('.menu_mask_body').removeClass('close');
        $('body').css({
            "overflow":"hidden"
        })
    }
    $('.show_menu').click(function(){
        showMenu()
    })
   

    $('.close_menu,.menu_mask').click(function(){
        hideMenu();
    })

    // 退出登录
    $('.quit_login').click(function(){
        hideMenu();
        $('.no_login_hd').show();
        $('.yes_login_hd').hide();
    })
     // 显示 登录 注册 弹窗
     $('.no_login_hd').click(function(){
        hideMenu()
        $('.mask,.mask_login').show();
    })
    
     // 关闭 登录 注册 弹窗
    $('.mask_login .icon_close').click(function(){
        $('.mask,.mask_login').hide();
        $('.quit_login').hide();
    })
    // 切换登录 注册 弹窗
    $('.login_label .hd').click(function(){
        var index = $(this).data('index');
        $(this).addClass('active').siblings('.hd').removeClass('active');
        if(index == 0){
            $('.login_input').show()
            $('.register_input').hide()
        }else{
            $('.login_input').hide()
            $('.register_input').show()
        }
    })
      // 切换密码可见
      $('.mask_login .icon_eyes').click(function(){
        $(this).toggleClass('icon_eyes_active');
        if($(this).hasClass('icon_eyes_active')){
            $(this).siblings('input').attr('type','text')
        }else{
            $(this).siblings('input').attr('type','password')
        }
    })
      // 粗略验证登录
      $('.login_submit').click(function(e){
        e.preventDefault();
        var login_email_val = $('#login_email').val();
        var login_password_val = $('#login_password').val();

        if(login_email_val == ""){
            $(this).parents('.login_input').find('.tips_text').text('账号不能为空')
            $(this).parents('.login_input').find('.tips').show();
            setTimeout(function(){
                $('.tips .tips_text').text(' ')
                $('.mask_login .tips').hide();
            }, 3000);
            return false;
        }

        if(login_password_val == ""){
            $(this).parents('.login_input').find('.tips_text').text('密码不能为空')
            $(this).parents('.login_input').find('.tips').show();
            setTimeout(function(){
                $('.tips .tips_text').text(' ')
                $('.mask_login .tips').hide();
            }, 3000);
            return false;
        }
        
        $('.mask,.mask_login').hide();
        $('.no_login_hd').hide();
        $('.yes_login_hd').show();
        $('.quit_login').show();
        showMenu()
    })

    // 粗略验证注册
    $('.register_submit').click(function(e){
        e.preventDefault();
        var login_email_val = $('#register_email').val();
        var login_password_val = $('#register_password').val();

        if(login_email_val == ""){
            $(this).parents('.register_input').find('.tips_text').text('账号不能为空')
            $(this).parents('.register_input').find('.tips').show();
            setTimeout(function(){
                $('.tips .tips_text').text(' ')
                $('.mask_login .tips').hide();
            }, 3000);
            return false;
        }

        if(login_password_val == ""){
            console.log( $(this).parents('.register_input'))
            $(this).parents('.register_input').find('.tips_text').text('密码不能为空')
            $(this).parents('.register_input').find('.tips').show();
            setTimeout(function(){
                $('.tips .tips_text').text(' ')
                $('.mask_login .tips').hide();
            }, 3000);
            return false;
        }
        
        $('.mask,.mask_login').hide();
        $('.no_login_hd').hide();
        $('.yes_login_hd').show();
        $('.quit_login').show();
        showMenu()
        
        $('.toast').text("注册成功");
        $('.toast').show();
        setTimeout(() => {
            $('.toast').hide();
            $('.toast').text("");
        }, 3000);
    })

    // 收拢分类
    $('.category .show').click(function(){
       $(this).hide();
       $('.category .hide').show();
       $('.tags').addClass('close')
    })
    // 打开分类
    $('.category .hide').click(function(){
        $(this).hide();
        $('.category .show').show();
        $('.tags').removeClass('close')
     })

    //  详情页简介更多
    $('.desc_box').click(function(){
        $(this).find('.desc').toggleClass('over_lines4')
        $(this).find('.icon_arrow').toggleClass('icon_arrow_active')
    })

    // 点击收藏
    $('.detail_footer .fav').click(function(){
        $(this).toggleClass('active')
        if($(this).hasClass('active')){
            $(this).find('.fav_text').text('已收藏');
            $('.toast').text("收藏成功");
            $('.toast').show();
            setTimeout(() => {
                $('.toast').hide();
                $('.toast').text("");
            }, 3000);
        }else{
            $(this).find('.fav_text').text('收藏');
            $('.toast').text("取消收藏");
            $('.toast').show();
            setTimeout(() => {
                $('.toast').hide();
                $('.toast').text("");
            }, 3000);
        }
    })

    // 阅读页
    $('.change_chapter .icon_menu').click(function(){
        $(this).siblings('.chapter_list').toggle()
    })
    $('.change_chapter .chapter_list').click(function(){
        $(this).hide()
    })

    //搜索出现清空按钮
    $('.entry_search').keyup(function(){
        var val = $(this).val();
        if(val!=""){
            $(this).siblings('.icon_clear').show()
        }
    })
    $('.icon_clear').click(function(){
        $(this).hide();
        $(this).siblings('.entry_search').val("");
    })
     // 个人设置页面头像切换
     $('.click_file').click(function(){
        $('.file').click()
    })
    $('.file').change(function(e){
        var file = e.target.files[0];
        var oFReader = new FileReader();
        oFReader.readAsDataURL(file);
        oFReader.onload  = function(oFRevent){
            var src = oFRevent.target.result;
           $('.user_avatar').attr('src',src)
        }
        
    })
})