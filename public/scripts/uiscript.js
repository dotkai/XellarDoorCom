/**
 * @author kaustin
 */

$(document).ready(function(){
	
	$("#hide-menu").click(function(){
		$("#profile-menu").css("left","-250px");
		$("#show-menu").css("opacity", "1");
		$("#main").css("left", "0");
	});
	
	$("#show-menu").click(function(){
		$("#show-menu").css("opacity","0");
		$("#main").css("left", "300px");
		$("#profile-menu").css("left","0px");
	});

	//Pop up dialog when clocking on xellar
	$(".xellar-key").click(function(){
		var userTitle = "SOZI's The Black Shop"
			, image = "<img src='images/profile.png'/>"
			, userName = "<li><h4>Park So-Jin</h4></li>"
			, storeItems = "<li>104 <span>Store Items</span> </li>"
			, followers = "<li>76 <span>Followers</span> </li>"
			, regulars = "<li>16 <span>Regulars</span> </li>"
			, buttons = "<div><a><button>Visit</button></a>" +
				"<a><button>Add to Regulars</button></a>" +
				"<a><button>Send Message</button></a></div>"
			, container = "<div>" + 
				image + "<ul>" + userName + storeItems +
				followers + regulars + "</ul>" + buttons + "</div>";
		
		var $dialog = $(container).dialog({
	        width: 350,
	        height: "auto",
	        autoOpen: false,
	        resizable: false,
	        draggable: false,
	        modal: true,
	        title: userTitle,
	        open: function(event, ui) {
		        $(event.target).parent().css('position', 'fixed');
		        $(event.target).parent().css('top', '30%');
		        $(event.target).parent().css('margin', '0 auto');
		    }
	   });

 		$dialog.dialog('open');
	});


})