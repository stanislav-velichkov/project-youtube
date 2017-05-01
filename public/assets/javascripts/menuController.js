if(window.matchMedia( "(max-width: 768px)" ).matches) {
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

function activate (button) {
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
    var logoutBtn = $('#logoutBtn');
    var profileBtn = $('#profileBtn');
}
