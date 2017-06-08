function sendMail() {
    var link = "mailto:lukasz.laszkiewicz@hotbit.pl"
        + "?cc=" + encodeURI(document.getElementById('recipient-name').value)
        + "&subject=HotBit, kontakt"
        + "&body=" + encodeURI(document.getElementById('recipient-message').value)
    ;

    window.location.href = link;
}

$( document ).ready(function() {


});