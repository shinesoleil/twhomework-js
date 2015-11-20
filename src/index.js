$.getJSON("./bookmarks.json", function(data) {
    var bookmarks = data;

    renderList(bookmarks);
    filterBookmarks(bookmarks);
});