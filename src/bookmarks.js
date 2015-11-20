var bookmarks;

$.ajaxSettings.async = false;
$.getJSON("./bookmarks.json", function(data) {
    bookmarks = data;
});

function convertTime(milliseconds) {
    var d = new Date();
    d.setTime(milliseconds);
    return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate()+1);
}

//initiate the page
bookmarks.forEach(function(element) {
    $("#content")
        .append('<div>' +
        '<p class="phrase">' + element.title + '</p>' +
        '<span class="timestamp">Created @ ' + convertTime(element.created + "000") +'</span>' +
        '</div>' +
        '<hr>');
});

//input event
$("#input").bind("input propertychange",function() {
    var inputValue = $(this).val();
    var re = new RegExp(inputValue, "ig");

    //keep only matched bookmarks
    function filterByWord(obj) {
        return re.test(obj.title);
    }

    //append matched bookmarks to the page
    function appendToPage(obj) {
        var highlightedText = obj.title.replace(re, '<span class="highlight">$&</span>');
        $("#content")
            .append('<div>' +
            '<p class="phrase">' + highlightedText + '</p>' +
            '<span class="timestamp">Created @ ' + convertTime(obj.created) +'</span>' +
            '</div>' +
            '<hr>');
    }

    $("#content").html("");  //clear all tags
    bookmarks.filter(filterByWord).map(appendToPage);
});