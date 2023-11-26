// loading
$(window).on('load', function () {

    $('#loader').fadeOut(1000);
});

// -----menubar-----

let count = 0;

$('header > div:last-child > div').click(function () {
    if (count === 0) {
        // alert("hi");
        $('header > nav').css('display', 'block');
        $('header > nav > menu>li').css('display', 'block');
        count++;
    } else {
        $('header > nav').css('display', 'none');
        $('header > nav > menu>li').css('display', 'none');
        count = 0;
    }
});