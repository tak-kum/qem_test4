//refresh css theme
function reloadStylesheets() {
    $('link[href="assets/css/style.css"]').each(function () {
        this.href = this.href;
    });
}