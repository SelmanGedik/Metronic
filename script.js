<script type="text/javascript">
            window.onload=function () {
            var url = window.location.pathname;
            var substr = url.split('/');
            var urlaspx = substr[substr.length - 1];
            $('.page-sidebar-menu').find('.nav-item open').removeClass('open');
            $('.page-sidebar-menu a').each(function () {
                if (this.href.indexOf(urlaspx) >= 1) {
                    $(this).parent().addClass('open');
                    $(".nav-item .sub-menu a[href='" + document.location.pathname + "']").parents('ul').attr('style', 'display:block');
                    $(".page-sidebar-menu .nav-item a[href='" + document.location.pathname + "'] span").parents('li').addClass('open');
                    $('.page-sidebar-menu .open').find('.arrow').addClass('open');
                }
            });
        };
    </script>
