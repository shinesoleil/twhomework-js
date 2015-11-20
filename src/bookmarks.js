$.getJSON("./bookmarks.json", function(data) {
    var bookmarks = data;
    
    function convertTime(milliseconds) {
        var d = new Date();
        d.setTime(milliseconds);
        return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate()+1);
    }

    function renderArticle(title, time) {
        $("#content")
            .append('<div>' +
            '<p class="phrase">' + title + '</p>' +
            '<span class="timestamp">Created @ ' + time +'</span>' +
            '</div>' +
            '<hr>');
    }

    bookmarks.forEach(function(element) {
        renderArticle(element.title, convertTime(element.created + "000"));
    });

    //input event
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
});