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


// $(window).on('load', function () {
//     // setTimeout(function () {
//     //     $('.popup-wrapper').css({ 'display': 'block' });
//     // }, 5000)
//     $('.popup-wrapper').remove();
// })

window.addEventListener('load',function(){
    let popwrap = this.document.querySelector('.popup-wrapper');
    popwrap.remove();
})
