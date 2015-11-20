function convertTime(milliseconds) {
    var d = new Date();
    d.setTime(milliseconds);
    return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate()+1);
}