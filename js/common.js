$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});
    $(".popup_c").magnificPopup();

    $(".carousel").owlCarousel({

        responsive : {
            0 : {
                items : 1,
                nav : true
            }
        },
        navText: ""
    });



    $.stellar({
		responsive: true,
		horizontalOffset: 60
	});




    $(".section_5 .tc-item").each(function (index) {
        var ths = $(this);
        setTimeout(function () {
            var myAnimation = new DrawFillSVG({
                elementId: "tc-svg-" + index
            });
            ths.removeClass(".tc-content").addClass("tc-content-on");
        }, 800*index);
    });


    function wResize() {
	$("header").css("min-height", $(window).height());
    };
	wResize();
	$(window).resize(function () {
		wResize()
    });

    $(".top_phone .wrapper .tab").click(function() {
        $(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".bottom_phone .wrapper .tab").click(function() {
        $(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".tabs_header .wrapper .tab").click(function() {
        $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thank's for Order!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				$(this).trigger("reset");
			}, 1000);
		});
	});

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $(".profi_item .row").hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    });

});

$(window).load(function () {
    $(".worksect h2").animated("fadeInDownBig");
    $(".top_header h1").animated("fadeInDown", "fadeOut");
    $(".top_header h2").animated("fadeInUp", "fadeOut");
    $(".tabs_header .wrapper").animated("flipInY", "fadeOut");
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_profi form").animated("bounceInUp", "fadeOut");
    $(".s_back h3").animated("fadeInUp", "fadeOut");
    $("footer").animated("fadeInUp", "fadeOut");
});
