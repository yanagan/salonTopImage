$(document).ready(function() {
	// shows/hides the additional menu navigation
		var background = $('.main, #footer-text');
		var menu = $('#menu-navbar');
		menu.on('click', function(){
			//if the menu nav bar is on the right side and the mininav is not visible
			if ($(this).offset().left > 35) {
				// blur the background
				background.addClass('blurred');
				//and bring in the navigation
				if ( $(window).width() < 608) {
					$(this).parent().css({'overflow' : 'visible'}).animate({
						'left': -($(window).width() - 35 - 24*2 - 10) + 'px'
					}, 300, 'easeOutCubic');
				} else {
					$(this).parent().css({'overflow' : 'visible'}).animate({
						'left': -($(window).width() - 49 - 6*2) + 'px'
					}, 300, 'easeOutCubic');
				}
			}
			//if the menu nav bar is on the left side and the mininav is visible
			else {
				//move the navigation out of the screen
				$(this).parent().animate({
					'left': 0
				}, 300, 'easeOutCubic', function(){
					$(this).css({'overflow' : 'hidden'});
				});
				//and un-blur the screen
				background.removeClass('blurred');
				
			}
		});


	// //animating the map tooltip in the footer
	// $( '#google-pin' ).tooltip({
	// 	content: '<img width="400" height="400" src="images/smallMap.png" />',
	// 	track: true,
	// 	position: {
	//         my: "center bottom",
	//         at: "center top",
	//         using: function( position, feedback ) {
	//           $( this ).css( position );
	//           $( "<div>" )
	//             .addClass( "arrow" )
	//             .addClass( feedback.vertical )
	//             .addClass( feedback.horizontal )
	//             .appendTo( this );
	//         }
	        
	//         },
	// 	show: null, // show immediately 
	// 	hide: { effect: "", // fadeOut
	// 	  },
	// 	open: function( event, ui ) {
	// 	    ui.tooltip.animate({ top: ui.tooltip.position().top - 50 } );
	// 	  },
	// 	close: function( event, ui ) {
	// 	    ui.tooltip.hover( function () {
	// 	        $(this).stop(true).fadeTo(400, 1); 
	// 	        }, function () {
	// 	            $(this).fadeOut("400", function(){ $(this).remove(); })
	// 	        }
	// 	    );
 //  		}
	// });
    
});
