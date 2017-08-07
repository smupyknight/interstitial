$(document).ready(function() {
	// var config = {
	// 	type: 'image',
	// 	src: 'http://m.bubblebox.com/images/game3.jpg'
	// };
	
	var config = {
		type: 'iframe',
		src: 'http://m.bubblebox.com/iframe.html'
	};

	displayInterstitial(config);
});

function displayInterstitial(config) {

	var modal = '';
	modal += 	'<div id="interstitial">';
	modal += 	'	<div id="interstitial-widget">';
	modal +=	'		<div class="interstitial-header">';
	modal +=	'			<span class="header-text"> You May Like </span>';
	modal += 	'			<span class="btn-close" onclick="$(\'#interstitial\').hide()">×</span>';
	modal +=	'		</div>';
	modal +=	' 		<div class="interstitial-body">';
	if (config.type == 'image') {
		modal +='			<img src="' + config.src + '">';

	} else if (config.type == 'iframe')  {
		modal +='			<iframe src="' + config.src + '"> </iframe>';
	}
	modal += 	'		</div>';
	modal +=	'		<div class="interstitial-footer">';
	modal += 	'			<span class="brand"> BUBBLEBOX </span> <span class="promoted-by"> PROMOTED BY </span>';
	modal += 	'		</div>';
	modal += 	'	</div>';
	modal += 	'</div>';
	
	$("body").append(modal);

	document.cookie = 'interstitial_displayed=true;';
}