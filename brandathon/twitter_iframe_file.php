<!doctype>
<html>

<head>
<meta charset="utf-8">

<meta http-equiv="cache-control" content="no-cache" /> 
<meta http-equiv="Content-Type" content="application/vnd.wap.xhtml+xml" /> 
<meta name="HandheldFriendly" content="True" /> 
<meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta name="description" content="Shared innovation space for startups in Boston" />

<link rel="shortcut icon" href="http://where-spotlight.s3.amazonaws.com/start-tank/favicon.png" />
<link rel="apple-touch-icon" href="https://www.paypalobjects.com/en_US/i/pui/apple-touch-icon.png" />
<link href="http://starttank.com/brandathon/assets/c/master.css" rel="stylesheet" type="text/css" />
<!--[if lt IE 9]>
<style>body {display:none;} #ie {display:block;}</style>
<![endif]-->
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="http://starttank.com/brandathon/assets/j/ppmn.js"></script>
<script type="text/javascript" src="http://starttank.com/brandathon/assets/j/nbw-parallax.js"></script>
<script type="text/javascript" src="http://starttank.com/brandathon/assets/j/jquery.inview.js"></script>
<script type="text/javascript" src="http://starttank.com/brandathon/assets/j/brandathon.js"></script>


<title><?php 
	$uri = "{$_SERVER['REQUEST_URI']}";
	$uri_clean = ucwords(basename($uri));
	if ($uri_clean == NULL){ echo "Start Tank";}
	else { echo $uri_clean . " | Start Tank"; }

?></title>

</head>
<style>
body {
	background: transparent;
}
.press_right {
	width:100%; 
	height: 100%;
	/* background: #0093c2; */
	background: transparent;
	color: #aee4f5;
	font-family: 'Coustard';
}

.press_right a {
	color: white;
}
</style>
<body class="brandathon">

	<div class="press_right">
		<p>
			<?php  require_once('twitter.php'); ?>

		</p>
	</div>
</body>
</html>

