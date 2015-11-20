function renderArticle(title, time) {
    $("#content")
        .append('<div>' +
        '<p class="phrase">' + title + '</p>' +
        '<span class="timestamp">Created @ ' + time +'</span>' +
        '</div>' +
        '<hr>');
}

function renderList(bookmarks) {
    bookmarks.forEach(function(element) {
        renderArticle(element.title, convertTime(element.created + "000"));
    });
}