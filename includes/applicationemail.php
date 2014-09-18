<?php /*
***************************************************************
This script below allows us to redirect to the /thanks page. 
Leave it.

Also make sure to edit your form tag: 
target="hidden_iframe" onsubmit="submitted=true;"

More here:
http://stackoverflow.com/questions/6077054/google-docs-form-redirect-after-submission


****
UPDATE 07.2014
Chrome and Firefox now asking: 
	Are you sure you want to leave this page? Data you entered may be lost
	Users may freak out. So now we're just keeping them on this page

1. Amend the form and iframe
2. Add class name "validate" to all inputs and textareas (.ss-q-short validate and .ss-q-long validate), 
so that my validate script (in ppmn.js) would work for them all
3. Add in the below checkbox, before the end of the form


****
UPDATE 09.2014
Adding a random string, to serve as a unique ID. There's an include file called randomstring.php. Also, generated a text field for it in the Google Doc. Just hiding it.
***************************************************************
*/ ?>



<!--
********
FORM
********
-->

			<script type="text/javascript">var submitted=false;</script>
			    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"     
			onload="if(submitted) {
				$('h1').html('Got it. Thanks!');
				$('p, form').hide();
				$('#social').show();
				// window.location='/thanks';  Causing issues now
			}"></iframe>
			
<style>
#ss-submit {
display: block;
opacity: 1;
float: left;
background: #0093c2;
color: white;
border-radius: 0;
/* border:1px solid #dadada; */
font: .9em Helvetica;
box-shadow: none;
margin: 0;
}
.ss-form-entry {
	width: 100%;
	float: left;
}

.ss-q-short {
width: 100%;
}

.ss-item {
	float: left;
}

.ss-text {width:100%;}

.ss-form-question {
	width: 50%;
	float: left;
}

.ss-form-entry {
	margin: 0;
}

@media (min-width: 1026px) {
#ss-submit { padding: 19px 16px 20px 16px; }
}
@media (max-width: 1025px) {
#ss-submit { padding: 15px 16px 16px 16px; }
}
</style>	

		<form action="https://docs.google.com/forms/d/19JoMbdNyQwPIZ0Kb6tG4hThFoSDnPyu3eXC_kX3mobY/formResponse" method="POST" id="ss-form" target="hidden_iframe" onsubmit="submitted=true;">
			
			
<ol role="list" class="ss-question-list" style="padding-left: 0">
<div class="ss-form-question errorbox-good" role="listitem">
<div dir="ltr" class="ss-item  ss-text"><div class="ss-form-entry">
<label class="ss-q-item-label" for="entry_946407342">
<div class="ss-q-help ss-secondary-text" dir="ltr"></div></label>
<input type="text" name="entry.946407342" value="" class="ss-q-short" id="entry_946407342" dir="auto" aria-label="What is your email?  " title="">
<div class="error-message" id="534408055_errorMessage"></div>
</div></div></div>
<input type="hidden" name="draftResponse" value="[,,&quot;8636158992020900513&quot;]
">
<input type="hidden" name="pageHistory" value="0">


<input type="hidden" name="fbzx" value="8636158992020900513">

<div class="ss-item ss-navigate"><table id="navigation-table" cellpadding="0" cellspacing="0"><tbody><tr><td class="ss-form-entry goog-inline-block" id="navigation-buttons" dir="ltr">
<input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action ">
</td>
</tr></tbody></table></div></ol>
	
	
	
	
		
		
	
	
	
	</form>
		
			<script type="text/javascript">_initFormViewer();</script>