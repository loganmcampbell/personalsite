$(function()
	{
		$('h1').hide();
		$('body').hide();
		$('p').hide();

		$('h1').fadeIn(6000);
		$('body').fadeIn(5800);
		$('p').fadeIn(6200);




		// if (typeof window.orientation !== 'undefined')
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
