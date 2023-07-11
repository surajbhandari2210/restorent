$(function () {
    $('.contect-form').on('submit', function (e) {
        let name = $('input[name="name"]');
        let phone = $('input[name="phone"]');
        if (name.val().length > 3) {
            $('input[name="name"]').next('p').remove();
            FormData = true;
        }
        else {
            $('input[name="name"]').next('p').remove();
            $('input[name="name"]').after('<p>please enter valid name</p>')
            FormData = false;
            return false;
        }
        // number

        if (phone.val().lenght < 11) {
            FormData = true;
            $('input[name="phone"]').next('p').remove();
        }
        else {
            $('input[name="phone"]').next('p').remove();
            $('input[name="phone"]').after('<p>please enter 10 digit</p>')
            FormData = false;
            return false;
        }
        if (FormData == false) {
            e.preventDefault();
        };
    })


    $('input[name="name"]').keyup(function () {
        let name = $('input[name="name"]');
        if (name.val().length > 3) {
            $('input[name="name"]').next('p').remove();
        }
        else {
        }
    });

    $('input[name="phone"]').keyup(function () {
        let phone = $('input[name="phone"]');
        if (phone.val().length < 11) {
            $('input[name="phone"]').next('p').remove();
        }
        else {
        }
    });

});

$(function () {
    $('.nav-click').on('click', function () {
        $('.navbar-items').slideToggle();
    });

});

$(function () {
    $('.popup-visiting').on("click", function () {
        $('.popup-wrapper').hide();
    })
    $('.popup-ui').on("click", function (e) {
        $('.popup-ui').css({ 'display': 'block' })
    });

    $('.cross-mark').on("click", function () {
        $('.popup-wrapper').hide();
    });

    $('window').keyup(function (e) {
        console.log(e);

    })

});


$(window).on('load', function () {
    setTimeout(function () {
        $('.popup-wrapper').css({ 'display': 'block' });
    }, 5000)
})
// scroll function
// window.addEventListener('scroll', function (e) {
//     // console.log(window.scrollY)
//     let header = document.getElementById('top-fixed');
//     if (window.scrollY > 100) {
//         header.classList.add('pfixed');
//     }
//     else {
//         header.classList.remove('pfixed');
//     }
// })
// scroll function end

// password show function
document.addEventListener("DOMContentLoaded", () => {
    // alert("1")
    let password = document.getElementById('password');
    let eyeclose = document.getElementById('eyeclose');
    let eyeopen = document.getElementById('eyeopen');
    let loader = document.querySelector('.loader-wrapper');
   if(loader.style.display == 'none'){
    loader.style.display = 'block';
   }
   else{
    loader.style.display = 'none';
   }
    eyeclose.onclick = function () {
        if (password.type == 'password') {
            password.type = 'text'
            eyeclose.style.display = 'none'
            eyeopen.style.display = 'block'
        }
        else {
            password.type = 'password'
        }
    }
    eyeopen.onclick = function () {
        if (password.type == 'text') {
            password.type = 'password'
            eyeclose.style.display = 'block'
            eyeopen.style.display = 'none'
        }
        else {
            password.type = 'text'
        }
    }


 document.getElementById('close-btn').addEventListener('click', function () {
        // console.log(password)
        if (password.length > 6) {
            loader.style.display = 'none';
        }
        else {
            loader.style.display = 'block';
        }
    })

});
// tab js
$(function(){
    $('.special-navlist li a').on('click',function(event){
        event.preventDefault();
        // console.log(this)
        $('.special-navlist li a').removeClass('active');
        $(this).addClass('active')
        $(this).removeClass('active')
        // var dataAttr = $(this).attr('data');
        $('.tab').addClass('display-none')
    $('.tab').removeClass('display-none')
    })
})
// tab js
// js
let spenav = document.querySelectorAll('.special-navlist li a');
let tabs = document.querySelector('.tab1')
let tabdata = document.querySelectorAll('.tab');
for(let i = 0; i <tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        // spenav.classList.add("active")
        // this.addClass('active')
    })
}