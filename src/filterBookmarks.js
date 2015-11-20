function filterBookmarks(bookmarks) {
    $("#input").bind("input propertychange",function() {
        var inputValue = $(this).val();
        var regExp = new RegExp(inputValue, "ig");

        function filterByWord(article) {
            return regExp.test(article.title);
        }

        function appendToPage(article) {
            var highlightedText = article.title.replace(regExp, '<span class="highlight">$&</span>');
            renderArticle(highlightedText, convertTime(article.created));
        }

        $("#content").html(""); //clear all contents
        bookmarks.filter(filterByWord).map(appendToPage);
    });
}