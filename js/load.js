
var homeIn;
homeIn =
`
<br />
| W E L C O M E |
<br /><br /><br />

`;
var attributesIn;
setTimeout(function()
{
$(function()
	{

		$('h1').hide();
		$('body').hide();
		$('p').hide();
		$('h1').fadeIn(6000);
		$('body').fadeIn(5800);
		$('p').fadeIn(6200);
		document.getElementById('picture').src="m/profile/take1.jpg";
		document.getElementById('quote').innerHTML =" \"Learning is not a race. It's a walk into discovery...\"";
		document.getElementById('bio').innerHTML = homeIn;
		document.getElementsByClassName('socialbar')[0].style.visibility = 'visible';		// if (typeof window.orientation !== 'undefined')
		document.getElementsByClassName('attributes')[0].style.visibility = 'visible';
		document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
		document.getElementsByClassName('bar')[0].style.visibility = "visible";
			// {
		// 	$('head').append('<link rel="stylesheet" type="text/css" href="css/styleMobile.css">');
		// }

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
		{
 			// some code..
			$('head').append('<link rel="stylesheet" type="text/css" href="css/styleMobile.css">');
			// $('body').append('<link rel="stylesheet" type="text/css" href="css/styleMobile.css">');

		}
		else
		{
			//NONE MOBILE
			// $('head').append('<link rel="stylesheet" type="text/css" href="css/styleMobile.css">');
			$('head').append('<link rel="stylesheet" type="text/css" href="css/style.css">');
		}
	}
);
} , 1500);
