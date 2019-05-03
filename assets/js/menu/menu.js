var scrolled = false;

$(function() {
	// $('#collapseThree').collapse({
	//   toggle: false
	// })


	// $('#collapseThree').on('show.bs.collapse', function () {
	//   // do something…
	//   alert('showing');
	// })

	//$('#top-nav')

	var scroll_pos = 0;

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 45 && !scrolled) {

            var bottomNav = $( "#bottom-nav" );

            bottomNav.animate({
          		backgroundColor: "rgba(255,255,255,0.9)"
        	}, 1000 );

            bottomNav.css('border-bottom', '1px solid #eeeeee');

            scrolled = true;
        } else if (scroll_pos <= 45 && scrolled){
            var bottomNav = $( "#bottom-nav" );

            bottomNav.animate({
                backgroundColor: "rgba(255,255,255,1)"
            }, 50 );

            bottomNav.css('border-bottom', 'none');

            scrolled = false;
        }
    });



    $('.dropdown').on('show.bs.dropdown', function(e){
    });

    $('.dropdown').on('hide.bs.dropdown', function(e){
    });

      
    $('#bottom-nav .navbar-nav > li.dropdown').hover(function() {

        if(!isMobileView()) {
            $('div.dropdown-menu', this).stop(true, true).slideDown('fast');
            $(this).addClass('open'); 
        }

        
    }, function() {
        if(!isMobileView()) {
            $('div.dropdown-menu', this).stop(true, true).slideUp('fast');
            $(this).removeClass('open');
        }
    });

    function isMobileView() {
        var hamburger = $('#bottom-nav .navbar-toggler');

        if (hamburger.css('display') == 'none') {
            return false;
        } else {
            return true;
        }
    }
});


	