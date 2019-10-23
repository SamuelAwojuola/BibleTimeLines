$("#showAll").click(function()
	{
		$(".container").each(function(){$( this ).children().css("display", "block")
		}),
		$(".container").css("display", "block");
	});
	
$("#hideAll").click(function()
	{
		$(".container").each(function(){$( this ).children().css("display", "none")
		}),
		$(".container").css("display", "none"),
		$("#eventsNav").children().css("color", "green");
	});