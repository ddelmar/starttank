<?php

# Load Twitter class
require_once('TwitterOAuth.php');

# Define constants
define('TWEET_LIMIT', 1);
define('TWITTER_USERNAME', 'starttank');
define('HASHTAG', 'Brandathon2014');
define('CONSUMER_KEY', 'taDWEo0vTgfYx3Zg6sIveUi4x');
define('CONSUMER_SECRET', 'XhszlY8MWBxhZIWmzRrnHgJVPIYhb5XOwnEQWKBysKuAaNCEJd');
define('ACCESS_TOKEN', '1400464639-twBDRntof7DJ3BrEocuLnp6seOWatRHlRpKytVj');
define('ACCESS_TOKEN_SECRET', 'w0krVlFnKfbnHAmeYzsGPegjELqvaXHyHUtF6Ol10gHOy');

# Create the connection
$twitter = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

# Migrate over to SSL/TLS
$twitter->ssl_verifypeer = true;

# Load the Tweets
/*
************************************************
LOADING ONLY STARTTANK'S TWEETS LOOKS LIKE THIS:
$tweets = $twitter->get('statuses/user_timeline', array('screen_name' => TWITTER_USERNAME, 'exclude_replies' => 'true', 'include_rts' => 'true', 'count' => TWEET_LIMIT));
************************************************
*/

$tweets = $twitter->get('search/tweets', array('q' => 'brandathon2014', 'count' => TWEET_LIMIT));

# Example output
    foreach($tweets as $tweet) {
        # Access as an object
		########################################################################
		# NOTE TO SELF: In the statuses API (the one that only shows @starttank tweets)
		# you only need 
		# $tweetText = $tweet['text'];
		# this is because the API structure is different.
		# To see the whole Array, and not just the newest Tweet, change this:
		# echo $tweetText;
		# to this:
		# print_r($tweets);
		# You'll see all available parameters
		########################################################################
		
        $tweetText = $tweet['0']['text'];

        # Make links active
        $tweetText = preg_replace("/(http:\/\/|(www\.))(([^\s<]{4,68})[^\s<]*)/", '<a href="http://$2$3" target="_blank" >$1$2$4</a >', $tweetText);


        # Output
        echo $tweetText;
		// print_r($tweets);
		

}


?>