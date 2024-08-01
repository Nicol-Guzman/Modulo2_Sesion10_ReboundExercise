// Mismos comportamientos que en la sesión 9, pero con JQuery

$(document).ready(function () {
    $("#text1").mouseenter(function () {
        $("#text2").show();
    })
});

$("#caja2").click(function () {
    $("#pacMan").css('width', '100%');
});

$("#caja2").mouseleave(function () {
    $("#pacMan").css('width', '20%');
});

$("#caja3").dblclick(function () {
    $("#text3").css('fontSize', 'x-large');
});