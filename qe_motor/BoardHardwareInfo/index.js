//refresh css theme
function reloadStylesheets() {
    $('link[href="https://renesas.github.io/qe-tools/qe_motor/BoardHardwareInfo/style.css"]').each(function () {
        this.href = this.href;
    });
}

function turnDark() {
    $('body').addClass('dark')";
}

function turnLight() {
   $('body').addClass('light')";
}
