/* ==============================================
/*  PRE LOADING
  =============================================== */
'use strict';
$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});

/* ==============================================
/*  SUBMITTING
  =============================================== */
function submitFunction() {
	confirm("Thank you for submitting!");
} 

$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    $(".countdown")
        .countdown("2018/11/30", function(event) {
            $(this).html(
                event.strftime('<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
            );
});

    /* ==============================================
     SLIDER
     =============================================== */
    $(".cover_slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3

            },
            1000:{
                items:5

            }
        },
        items:5
});

function selectForm() {
    $("div.form").hide();
    $("div.form-" + $("input:checked").val()).show();
}
selectForm();
$("input").click(function(){selectForm()});

	    });

(function ($) {
    "use strict";

/*==================================================================
    [ Focus Contact ]*/
     $('.input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
	var title = $('.validate-input input[name="Title"]');
    var name = $('.validate-input input[name="FirstName"]');
	var surname = $('.validate-input input[name="LastName"]');
    var email = $('.validate-input input[name="Email"]');
	var company = $('.validate-input input[name="Company"]');


    $('.validate-form').on('submit',function(){
        var check = true;
		
		    if($(title).val().trim() == ''){
            showValidate(title);
            check=false;
        }

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }
		
		if($(surname).val().trim() == ''){
            showValidate(surname);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
		
		if($(company).val().trim() == ''){
            showValidate(company);
            check=false;
        }
		
		else alert('Thank you for submitting!');

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
		
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
		
    }
    
            

})(jQuery); 