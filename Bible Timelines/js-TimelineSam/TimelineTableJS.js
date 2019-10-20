//to hide lower timelines on double clicking
$(document).ready(function () {
    $("tr").dblclick(function () {
        $(this).next().toggle('fast');
    });
});

//to show only the details of selected table cell while hiding all others (https://jsfiddle.net/s07ysx6w/1/)
$(document).ready(function () {
    $("#timelineTable td").click(function (e) {
        e.preventDefault()
        var selected = $(this).attr('href');
        $('#details ' + selected).stop().show('fast').siblings().hide('fast');
        $(selected).children().show();
    });
});
