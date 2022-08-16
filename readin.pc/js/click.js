$(function(){
    // 懒加载
    $(".book_item img").lazyload({
        placeholder : "images/default_pic@2x.png", //用图片提前占位
        effect: "fadeIn", // 载入使用何种效果
        threshold: 200, 
    });

    // 导航显示故事类型的子分类
    $('.nav_bar .nav_type').hover(function(){
        $('.head_type').show()
    },function(){
        $('.head_type').hide()
    })

    // 全局滚动
    $('.scroll_top').click(function(){
        $('html, body').animate({scrollTop : 0},200)
    })
    
    // 登录后 点击头像 显示菜单
    $('.yes_login').mouseenter(function(){
        $('.user_menu').show()
    })
    $('.user_menu').mouseleave(function(){
        $('.user_menu').hide()
    })
    // 显示 登录 注册 弹窗
    $('.jump_login').click(function(){
        $('.mask,.mask_login').show();
    })
     // 关闭 登录 注册 弹窗
    $('.mask_login .icon_close').click(function(){
        $('.mask,.mask_login').hide();
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
            $('.tips .tips_text').text('账号不能为空')
            $('.mask_login .tips').show();
            setTimeout(function(){
                $('.tips .tips_text').text(' ')
                $('.mask_login .tips').hide();
            }, 3000);
            return false;
        }

        if(login_password_val == ""){
            $('.tips .tips_text').text('密码不能为空')
            $('.mask_login .tips').show();
            setTimeout(function(){
                $('.tips .tips_text').text(' ')
                $('.mask_login .tips').hide();
            }, 3000);
            return false;
        }
        
        $('.mask,.mask_login').hide();
        $('.not_login').hide();
        $('.yes_login').show();
    })

    // type 页面 分类按钮的切换
    $('.icon_toggleType').click(function(){
        $(this).toggleClass('open')
        $(this).parents('.type').find('.tags_list').slideToggle()
    })

    // detail 底部切换轮播
    $('.slider_hd .t').click(function(){
        var index = $(this).data('index');
        $(this).addClass('active').siblings('.t').removeClass('active');
        $('.slider_wrap').hide()
        $('.slider_wrap').eq(index).show()
        // 重新初始化
        var swiper = new Swiper(".swiper", {
            loop: true,
            observer:true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerGroup: 4,
            slidesPerView:4,
            spaceBetween:67,
            navigation: {
                nextEl: '.slider_btn_next',
                prevEl: '.slider_btn_prev',
            },
      });
    })
    $('.icon_desc').click(function(){
        $(this).toggleClass('icon_desc_active')
    })

    // 阅读页面
    $('.chapter_bar .cell').click(function(){
        $(this).siblings('.chapter_list').toggle()
    })
    $('.chapter_list').click(function(){
        $(this).hide()
    })


    // 个人设置页面 设置与密码的切换
       $('.myset .change_hd .t').click(function(){
        var index = $(this).data('index');
        $(this).addClass('active').siblings('.t').removeClass('active');
        $('.myset .entries').hide()
        $('.myset .entries').eq(index).show()
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