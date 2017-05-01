if (window.matchMedia("(max-width: 768px)").matches) {
    $('.closeNavbar').on('click', function () {
        $('.navbar-toggle').click();
    });
}

function menuToLoggedIn($rootScope) {
    $(document).ready(function () {
        $("#loginButton").css('display', 'none');
        $("#registerButton").css('display', 'none');

        $("#profileButton").css('display', 'block');
        $("#logoutButton").css('display', 'block');

    });
}

function menuToLoggedout() {
    $(document).ready(function () {
        $("#profileButton").css('display', 'none');
        $("#logoutButton").css('display', 'none');

        $("#loginButton").css('display', 'block');
        $("#registerButton").css('display', 'block');

    });
}


var homeBtn = $('#homeBtn');
var popularBtn = $('#popularBtn');
var historyBtn = $('#historyBtn');
var bestOfBtn = $('#bestOfBtn');
var musicBtn = $('#musicBtn');
var sportsBtn = $('#sportsBtn');
var gamingBtn = $('#gamingBtn');
var newsBtn = $('#newsBtn');
var profBtn = $('#profBtn');
var loginBtn = $('#loginBtn');
var registerBtn = $('#registerBtn');
var profileBtn = $('#profileBtn');

homeBtn.on('click', function(){
    $('#homeBtn').addClass('active');

    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#bestOfBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

popularBtn.on('click', function(){
    $('#popularBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#bestOfBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

historyBtn.on('click', function(){
    $('#historyBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#bestOfBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

musicBtn.on('click', function(){
    $('#bestOfBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

sportsBtn.on('click', function(){
    $('#bestOfBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

gamingBtn.on('click', function(){
    $('#bestOfBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

newsBtn.on('click', function(){
    $('#bestOfBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#profBtn').removeClass('active');
});

loginBtn.on('click', function(){
    $('#profBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#bestOfBtn').removeClass('active');
});

registerBtn.on('click', function(){
    $('#profBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#bestOfBtn').removeClass('active');
});


profileBtn.on('click', function(){
    $('#profBtn').addClass('active');

    $('#homeBtn').removeClass('active');
    $('#popularBtn').removeClass('active');
    $('#historyBtn').removeClass('active');
    $('#bestOfBtn').removeClass('active');
});