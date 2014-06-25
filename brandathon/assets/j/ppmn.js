$(document).ready(function(){
// :::::::::::::::::::::::::::::::::::::
// :: GENERAL ::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::
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

//----------- if Press pg ----------//
if(window.location.pathname == '/press/'){
$.ajax({
  
    url: 'https://api.angel.co/1/press?startup_id=186124',
    dataType : "jsonp",
    cache : false
    
  }).success(function(data, textStatus, jqXHR) {
    
    $.each(data.press, function(i,item){

    	var titleOutput = item.title;
      var dateOutput = item.posted_at;
	var dateOutputMod = $(dateOutput).text().replace('-','.');

      var snippetOutput = item.snippet;
      var link = item.url;

       var dateNode = $('<div class="date"></div').append(dateOutputMod);
       var linkNode = $('<a href="'+link+'" target="_blank"></a>');
       var titleNode = $('<div class="title"></div>').append(titleOutput).appendTo(linkNode);
       var snippetNode = $('<div class="snippet"></div').append(snippetOutput);
		// note: I've left date out for now
       $('<div class="row"></div').append(linkNode, dateNode, snippetNode).appendTo('#container');
    
    });
        
  }).error(function(jqXHR, textStatus) {

 	 $('<div></div>').append('Sorry. Your request is '+ textStatus).appendTo('#container');

  });
}
//----------- if Community pg ----------//
if(window.location.pathname == '/community/'){

// Wait until images are loaded before displaying them
	var StartupImgTotal = $(".startups img").size(); 	// get the number of images
	var MentorImgTotal = $(".mentors img").size();
	var imgCount = 0;
	$(".startups img").load(function(){
		if(++imgCount == StartupImgTotal){
			$(".startups img, .mentors img").animate({
			"opacity":1
			});	
			}
	});
setTimeout(function(){
	// Force the load if it doesn't happen after 3 seconds
	$(".startups img, .mentors img").css("opacity","1");
}, 2000);
	
$(".startup_logos a").click(function(){
	var thisclass = $(this).parent().attr("class");
	var thiscontent = $(".startup_hiddenCopy ." + thisclass).html();
	var thisSiblings = $(this).parent().siblings();
	// alert(thisSiblings);
	$(thisSiblings).children().removeClass("selected").addClass("unselected");
	$(".startup_logos ." + thisclass + " a").addClass("selected");
	$(".startup_writeup").html(thiscontent);
});
$(".mentor_logos a").click(function(){
	var thisclassMentors = $(this).parent().attr("class");
	var thiscontentMentors = $(".mentor_hiddenCopy ." + thisclassMentors).html();
	var thisSiblings = $(this).parent().siblings();
	// alert(thisSiblings);
	$(thisSiblings).children().removeClass("selected").addClass("unselected");
	$(".mentor_logos ." + thisclassMentors + " a").addClass("selected");
	$(".mentor_writeup").html(thiscontentMentors);
});
}	

//----------- Brandathon ----------//
if(window.location.pathname == '/brandathon/'){

// Wait until images are loaded before displaying them
	var StartupImgTotal = $(".startups img").size(); 	// get the number of images
	var imgCount = 0;
	$(".startups img").load(function(){
		if(++imgCount == StartupImgTotal){
			$(".startups img").animate({
			"opacity":1
			});	
			}
	});
setTimeout(function(){
	// Force the load if it doesn't happen after 3 seconds
	$(".startups img").css("opacity","1");
}, 2000);

function viewportdimensions(){
	var viewportwidth = window.innerWidth;
	var viewportheight = window.innerHeight;
	if (viewportheight > 650) {
		$("#brandathonlogo img").addClass("normal").removeClass("tiny");
	} else {
		$("#brandathonlogo img").addClass("tiny").removeClass("normal");
	}
}
viewportdimensions();
window.onresize = function() {viewportdimensions();}
	
$(".startup_logos a").click(function(){
	var thisclass = $(this).parent().attr("class");
	var thiscontent = $(".startup_hiddenCopy ." + thisclass).html();
	var thisSiblings = $(this).parent().siblings();

	// $(thisSiblings).children().removeClass("selected").addClass("unselected");
	$(".startup_logos a").removeClass("selected").addClass("unselected");
	$(".startup_logos ." + thisclass + " a").addClass("selected");
	$(".startup_writeup").html(thiscontent);
});

$(".community_nav span, .navChild ul li.participants a").click(function(){
	var thiscontent_default = $("." + $(this).attr("class") + " .startup_hiddenCopy ." + $(this).attr("class") + "_default").html();
//	var communityGrid= $(this).attr("id");
	$(".community div." + $(this).attr("class")).show();
	$(".community > div:not(." + $(this).attr("class") + ")").hide();
//	$(this).addClass("selected");
//	$(this).siblings().removeClass("selected");
	$(".startup_logos li a").removeClass("selected").addClass("unselected");
	$(".startup_writeup").html(thiscontent_default);
});

	$('.brandathon .navChild ul li a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
}

	
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

// :::::::::::::::::::::::::::::::::::::
// :: DESKTOP ::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::

function desktopJS(){

// NAV: ON CLICK...
$('.navHome li a').click(function() {
		var scrollNow = $(window).scrollTop();
		var thisID = $(this).attr("id");
		var thisVal = $(this).attr("value");
		var navHomeSelected = 	$(".navHome li a#" + thisID);
		var newHeaderContent = $(".header ul li.header_" + thisID).html();
		var newHeaderPosition = $(".header ul li.header_" + thisID).css("background-position");
		var contentNew = $("#content_" + thisID);
		var contentNewSiblings = $("#content_" + thisID).siblings();
		
		// event.preventDefault(); 	This prevents the weird stuttering that happens in Safari/Chrome if you have a hashtag in place
			$(".header_home").html(newHeaderContent).css("background-position",newHeaderPosition);
			$(contentNewSiblings).hide();
			$(contentNew).show();
			if(scrollNow===0){
				window.scrollTo(0,200);
			}
			else{}
			$(navHomeSelected).addClass("selected").removeClass("unselected")
				.parent().siblings().children().addClass("unselected").removeClass("selected");
			
    });
	// ABOUT TEAM
	$('.navAbout li').click(function(){
		var thisID = $(this).attr("id");
		var navAboutSelected = 	$(".navAbout li#" + thisID);
		var navAboutSelectedSiblings = 	$(".navAbout li#" + thisID).siblings();
		$("#about_" + thisID).fadeIn(500).siblings().hide();
		$(navAboutSelected).addClass("selected").removeClass("unselected");
		$(navAboutSelectedSiblings).addClass("unselected").removeClass("selected");
	});

// If desktop, remove anchor tag functionality
$(".startup_logos a, .mentor_logos a").attr("onclick","return false;");

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
		// ABOUT TEAM
	$('.navAbout li').click(function(){
			var thisID = $(this).attr("id");
			var navAboutSelected = 	$(".navAbout li#" + thisID);
			$("#about_" + thisID).fadeIn(500).siblings().hide();
			$(navAboutSelected).addClass("selected").removeClass("unselected")
				.siblings().addClass("unselected").removeClass("selected");
		});
	
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
	
		// ABOUT TEAM
		$('.navAbout li').click(function(){
			var thisID = $(this).attr("id");
			var navAboutSelected = 	$(".navAbout li#" + thisID);
			$("#about_" + thisID).fadeIn(500).siblings().hide();
			$(navAboutSelected).addClass("selected").removeClass("unselected")
				.siblings().addClass("unselected").removeClass("selected");
		});
}