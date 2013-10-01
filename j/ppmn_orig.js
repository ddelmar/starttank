$(document).ready(function(){
// :::::::::::::::::::::::::::::::::::::
// :: GENERAL ::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::

$("li.contact a").click(function(){$("#contactform").fadeIn("fast");});
$(".x").click(function(){$("#contactform").fadeOut("fast");});

// Replace SVG's with PNG's if necessary
	var inlineSVG = (function() {
	  var div = document.createElement('div');
	  div.innerHTML = '<svg/>';
	  return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
	})();
	if( inlineSVG ){
	}else{
		 $('img').each(function() {
	     var $this = $(this);
	     var src = $this.attr("src").replace(".svg", ".png");
	     $this.attr("src", src);
		 });
}
$("#contactform input").blur(function(){
	var thisfield = $(this).attr("value");
	var thisval = this.value;
	if(thisval == ""){
		$(this).val(thisfield);
	}
	else{
		$(this).val(thisval);
	}
});

$("#contactform input").focus(function(){
	this.value=''; this.onfocus=null;
});

deviceDetect();

}); // END DOC.READY

// DETERMINE DEVICE
function deviceDetect(){
var viewportwidth = window.innerWidth;
var viewportheight = window.innerHeight;
if ((viewportwidth) < 1020) {
	if ((viewportwidth) < 768) {mobileJS();}
	else { tabletJS();}
	}
else { desktopJS(); }
}



// READ HASHTAG
function readhashtag(){
var hash = (location.hash).replace(/\#/, "");
var navHomeSelected = 	$(".navHome li a#" + hash);
if ((location.hash.length) > 0){
	$(".header ul li.header_" + hash + ", #content_" + hash).show().siblings().hide();
	$(navHomeSelected).addClass("selected").removeClass("unselected")
		.parent().siblings().children().addClass("unselected").removeClass("selected");
} else {
	// alert("no hash");
}
} // end read hashtag


// :::::::::::::::::::::::::::::::::::::
// :: DESKTOP ::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::

function desktopJS(){
// NAV: ON CLICK...
$('.navHome li a').click(function() {
		var thisID = $(this).attr("id");
		var navHomeSelected = 	$(".navHome li a#" + thisID);
		
		// event.preventDefault(); 	This prevents the weird stuttering that happens in Safari/Chrome if you have a hashtag in place
	
			$(".header ul li.header_" + thisID + ", #content_" + thisID).fadeIn(500)
				.siblings().hide(function(){
					setTimeout(function(){
					$("html, body").animate({ 
						scrollTop: $(".navHome").offset().top - 200
						}, 200);
					},400);
				});
			
			$(navHomeSelected).addClass("selected").removeClass("unselected")
				.parent().siblings().children().addClass("unselected").removeClass("selected");
			
    });

	// NAV: ON CLICK...
$('.navAbout li').click(function() {
		var thisID = $(this).attr("id");
		var navAboutSelected = 	$(".navAbout li#" + thisID);
		$("#about_" + thisID).fadeIn(500).siblings().hide();
		event.preventDefault();
		$(navAboutSelected).addClass("selected").removeClass("unselected")
			.siblings().addClass("unselected").removeClass("selected");
	});

readhashtag();
} // END DESKTOP JS

// :::::::::::::::::::::::::::::::::::::
// :: TABLET ::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::

function tabletJS(){
	// NAV: ON CLICK...
	$('.navHome li a').click(function() {
			var thisID = $(this).attr("id");
			var navHomeSelected = 	$(".navHome li a#" + thisID);

			//	event.preventDefault(); 	This prevents the weird stuttering that happens in Safari/Chrome if you have a hashtag in place

				$(".header ul li.header_" + thisID + ", #content_" + thisID).fadeIn(500)
					.siblings().hide();

				$(navHomeSelected).addClass("selected").removeClass("unselected")
					.parent().siblings().children().addClass("unselected").removeClass("selected");

	    });
readhashtag();	
}

// :::::::::::::::::::::::::::::::::::::
// :: MOBILE ::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::

function mobileJS(){
		// NAV: ON CLICK...
		$('.navHome li a').click(function() {
				var thisID = $(this).attr("id");
				var navHomeSelected = 	$(".navHome li a#" + thisID);

				//	event.preventDefault(); 	This prevents the weird stuttering that happens in Safari/Chrome if you have a hashtag in place

					$(".header ul li.header_" + thisID + ", #content_" + thisID).fadeIn(500)
						.siblings().hide();

					$(navHomeSelected).addClass("selected").removeClass("unselected")
						.parent().siblings().children().addClass("unselected").removeClass("selected");

		    });
	readhashtag();
}