"use strict";

let setActive = false;
$('#sidebar').toggleClass('active');

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        document.getElementById("open-buttons").style.zIndex = "-1"
        document.getElementById("data").style.display = "block";
        document.getElementById("simular").style.display = "none";
        $('#sidebar').toggleClass('d-none');
        setTimeout(() => $('#sidebar').toggleClass('active'), 10);
    });

    $('#sidebarCollapse2').on('click', function () {
        document.getElementById("open-buttons").style.zIndex = "1";
        $('#sidebar').toggleClass('active');
        setTimeout(() => $('#sidebar').toggleClass('d-none'), 100);
    });

    $('#simularCollapse').on('click', function () {
        document.getElementById("open-buttons").style.zIndex = "-1";
        document.getElementById("data").style.display = "none";
        document.getElementById("simular").style.display = "block";
        $('#sidebar').toggleClass('d-none');
        setTimeout(() => $('#sidebar').toggleClass('active'), 10);
    });

    $('#simularCollapse2').on('click', function () {
        document.getElementById("open-buttons").style.zIndex = "1";
        document.getElementById("data").style.display = "none";
        document.getElementById("simular").style.display = "block";
        $('#sidebar').toggleClass('active');
        setTimeout(() => $('#sidebar').toggleClass('d-none'), 100);
    });
});

let isOpen = false;

function imgFullScreenOpen(target) {
    $("#imgFullScreen > img").attr("src", target.children[0].src);
    document.getElementById("imgFullScreen").style.display = "block"
    document.getElementById("imgFullScreen").style.opacity = "1";
    isOpen = !isOpen;
}

function imgFullScreenClose(target) {
    if (isOpen) {
        target.style.opacity = "0";
        setTimeout(() => target.style.display = "none", 200);
        isOpen = !isOpen;
    }
}