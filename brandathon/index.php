<!doctype>
<html>

<head>
<meta charset="utf-8">

<meta http-equiv="cache-control" content="no-cache" /> 
<meta http-equiv="Content-Type" content="application/vnd.wap.xhtml+xml" /> 
<meta name="HandheldFriendly" content="True" /> 
<meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta name="description" content="Startup incubator space in Boston" />

<link rel="shortcut icon" href="http://where-spotlight.s3.amazonaws.com/start-tank/favicon.png" />
<link rel="apple-touch-icon" href="https://www.paypalobjects.com/en_US/i/pui/apple-touch-icon.png" />
<link href="/brandathon/assets/c/master.css" rel="stylesheet" type="text/css" />
<!--[if IE]>
<link href="/brandathon/assets/c/desktop.css" rel="stylesheet" type="text/css" />
<link href="/brandathon/assets/c/ie9.css" rel="stylesheet" type="text/css" />
<style>.startups img, .mentors img {opacity:1;}</style>
<![endif]-->
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="/brandathon/assets/j/ppmn.js"></script>
<script type="text/javascript" src="/brandathon/assets/j/nbw-parallax.js"></script>
<script type="text/javascript" src="/brandathon/assets/j/jquery.inview.js"></script>
<script type="text/javascript" src="/brandathon/assets/j/brandathon.js"></script>


<title><?php 
	$uri = "{$_SERVER['REQUEST_URI']}";
	$uri_clean = ucwords(basename($uri));
	if ($uri_clean == NULL){ echo "Start Tank";}
	else { echo $uri_clean . " | Start Tank"; }

?></title>

</head>

<body class="brandathon">

<a id="brandathonlogo" href="/"><img src="/brandathon/assets/i/Brandathon.png"/></a>


<div class="section_container">
<div class="brandathon_fullspread">	
	
	
	<video class="bg1" loop="loop" autoplay="autoplay">
	  <source src="/brandathon/assets/v/water.mp4" type="video/mp4">
	  <img src="/i/brandathon_water.png" width="100%" height="auto">
	</video>
	

	
</div>

<section class="intro white">
	<div class="container_800">
		<img src="/i/brandathon_sectionbreak_moleskine.jpg" class="top moleskine">
		<h2>What it is</h2>
		<p>
When the March 2014 Start Tank was announced, Kathy Kiely, President of The Ad Club, had an inspired thought. Rather than another hack-a-thon, why not create the first ever "Brand-a-thon" to provide startups with the kind of marketing and branding genius typically reserved for the biggest, global brands.
<br /><br />
Within days, Kathy recruited some of the top creative teams of leading agencies, and we'll kick off the Brand-a-thon on June 20 where these teams select the most promising Start Tank startups. After a quick briefing, the creative teams will pull a couple all-nighters to put together their best work. On June 26th, we'll have an unique event where they present polished work to panel of renowned judges, all CMO's and CEO's.
</br /><br />
It's a truly unique event - "Mad Men" meets the startups world. Don't miss it.
			</p>
			

<?php /*
		<h2>RSVP</h2>
		<a href="#">
		<img src="/i/brandathon_sectionbreak_rsvp.jpg" class="bottom">
		</a>
		
		Remove that next div when you re-enable the RSVP. That's the spacing.
*/ ?>
	<div style="width:100%; height: 100px; display:block; ">
		
		
		
	</div><!-- /container_800 -->
</section>


<section class="white">
	<div class="container_full">
	<img src="/i/brandathon_sectionbreak_iphone.jpg" class="top">
	<h2 class="community_nav"><span id="startups" class="selected">Startups</span><br class="mobileonly"/>&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;<span id="agencies">Agencies</span>
		
		<!-- &nbsp;&nbsp;<br class="mobileonly"/>and&nbsp;&nbsp;<span id="judges">Judges</span> -->
		</h2>
	
<div class="community">
	<div class="startups">
		<?php require_once('assets/includes/startups.php'); ?>
	</div>
	<div class="agencies">
		<?php require_once('assets/includes/agencies.php'); ?>
	</div>
	<div class="judges">
		<?php require_once('assets/includes/judges.php'); ?>
	</div>
	
	
	
	
</div><!-- /community -->
</div><!-- /container_full -->
</section>



<section class="blue partners">
	<div class="container_800">
		<img src="/i/brandathon_sectionbreak_screwdriver.jpg" class="top moleskine">
		<h2>Our Partners</h2>
		<ul>
			<li>
				<a href="http://starttank.com" target-"_blank" title="Start Tank">
					<img src="/brandathon/assets/i/logo_starttank.png" class="first"/>
				</a>
			</li>
			<li>
				<a href="http://adclub.org" target-"_blank" title="Ad Club">
					<img src="/brandathon/assets/i/logo_adclub.png" />
				</a>
			</li>
</section>



</div><!--/ section_container -->
<div class="clr"></div>



    


						<script>
						  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
						  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
						 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42859593-1', 'starttank.com');
ga('send', 'pageview');

	</script>	
</body>
</html>

