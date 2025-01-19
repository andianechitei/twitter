function tabSelectedOnClick() {
    $('.profile-tab').on('click', function () {
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
    });

    $('.navigate').on('click', function () {
        const tabElm = $(this);
        const tabActiveClassName = 'navigate-active';
        const hasActiveClassName = tabElm.hasClass(tabActiveClassName);

        function handleTabSelection(){
            $('.' + tabActiveClassName).removeClass(tabActiveClassName);
            tabElm.addClass(tabActiveClassName);
            $('.page-reel').hide();
            let showOnlyPageThatWillBeVisible = '.' + tabElm.attr('data-active-tab');
            $(showOnlyPageThatWillBeVisible).show();
        }

        function showHomepageReels() {
            tabElm.removeClass(tabActiveClassName);
            $('.Homepage-Reels').show();
        }

        if(!hasActiveClassName){
            handleTabSelection();
        } else {
            showHomepageReels();
        }
    });

    $('.navigate-logo').click(function () {
        const tabElm = $(this);
        let showHomepageReels = '.' + tabElm.attr('data-active-tab');
        $('.navigate-active').removeClass('navigate-active');
        $(showHomepageReels).show();
    })
}
function testToggle() {
    $('.homepage').on('click', function () {
        $('header').toggle();
    });
}

function handleClickLogin() {
    $(document).on('click', '.login-action', function (ev) {
        ev.preventDefault();
        showPopoverTab('.popover-tab--login')
    })
}

function handleClickSignUp() {
    $(document).on('click', '.signup-action', function (ev) {
        ev.preventDefault();
        showPopoverTab('.popover-tab--register')
    })
}

function handleClickForgotPassword() {
    $(document).on('click', '.forgotpass-action', function (ev) {
        ev.preventDefault();
        showPopoverTab('.popover-tab--forgotpass')
    })
}

function showPopoverTab(tabClassName) {
    $('.popover').addClass('is-visible');
    $('.popover-tab').hide();
    $(tabClassName).show();
}

function handleClosePopover() {
    $('.popover').removeClass('is-visible');
    $('.register__label').hide();
    $('.forgotpass__label').hide();
}

function createClosePopoverHandle() {
    $('.action-close-popover').click(function () {
        handleClosePopover();
    });
}

function createLogoutHandle() {
    $('.action-logout').click(function () {
        $('body').removeClass('is-logged-in');
        $('.footer-div').show();
    });
}

function handleLoginUser() {
    $('.action-login-user').click(function () {
        $('body').addClass('is-logged-in');
        $('.footer-div').hide();
        handleClosePopover();
    });
}

$(document).ready(function(){
    testToggle();
    handleClickLogin();
    handleClickSignUp();
    handleClickForgotPassword();
    handleLoginUser();
    tabSelectedOnClick();

    createClosePopoverHandle();
    createLogoutHandle();
});

