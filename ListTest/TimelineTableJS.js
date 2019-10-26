//to hide lower timelines on double clicking
$(document).ready(function () {
    $("tr").dblclick(function () {
        $(this).next().toggle('fast');
    });
});

//to show only the details of selected table cell while hiding all others (https://jsfiddle.net/s07ysx6w/1/)
$(document).ready(function () {
    $("#timelineTable td, a").click(function (e) {
        e.preventDefault()
        var selected = $(this).attr('href');
        $('#details ' + selected).stop().show('fast').siblings().hide('fast');
        $(selected).children().show();
    });
});

//to toggle class. The class to be toggled is declared in the onclick function in the <li>
//    function hider(sh) {
//        $(sh).toggle('slow');
//      };
function hider(sh) {
    $(sh).toggleClass('eventHidden');
};


//removes row with empty cells
if ($('tr').children('visibility:hidden').length == 0) {
    // action when all are hidden
    $(this).hide();
}

//change nav item colour
$("#nav li").click(function () {
    $(this).toggleClass('navColor');
});

$( "#christ, .christ" ).hover(
		function()
		{
			$( ".christ" ).addClass( "hoverWhite" );
		},
		function()
		{
			$( ".christ" ).removeClass( "hoverWhite" );
		}
	);
