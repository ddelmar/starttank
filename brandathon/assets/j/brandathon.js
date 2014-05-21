/*
JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
Demo: Recreating the Nikebetterworld.com Parallax Demo
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...

if (($(document).width()) < 768){
} else {
	//save selectors as variables to increase performance
	var $window = $(window);
	var windowHeight = $window.height(); //get the height of the window
	//apply the class "inview" to a section that is in the viewport
	$(".moleskine").bind("inview", function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});


function Move(){ 
	var pos = $window.scrollTop();
	if (pos > 1200) {
	} else {
	}
}	
$window.resize(function(){ //if the user resizes the window...
	Move(); //move the background images in relation to the movement of the scrollbar
});		

$window.bind('scroll', function(){ //when the user is scrolling...
	Move(); //move the background images in relation to the movement of the scrollbar
});	
});