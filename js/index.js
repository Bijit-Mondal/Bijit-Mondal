// Loader Event

$(window).on("load", function () {
    $("#preloader").css({
        transform: "translateY(-100%)",
        "transition-delay": "0.6s",
    });
    $(".loader").css({
        opacity: "0",
        transform: "translate(0,-50%)",
        "transition-delay": "0.3s",
    });
});

// Scroll Event

// $(window).scroll(function () {
//     $("header").toggleClass("showHeader", window.scrollY > 1000);
// });

let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight - 500) {
        header.classList.add("showHeader");
    } else {
        header.classList.remove("showHeader");
    }
});

// Menu Category Button Options

$("span.menu-btn i").click(function () {
    $("a.nav-link").toggleClass("showOptions");
});

$(window).scroll(function () {
    $("a.nav-link").removeClass("showOptions");
});

// AOS Initialisation

// AOS.init({
//     delay: 0,
//     duration: 1000,
//     easing: "ease",
// });

// Rellax JS Initialisation

var rellax = new Rellax(".rellax");

// Sweetalert Toast: Empty Link Alert

$.toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    confirmButtonText: '<i class="fa fa-times text-secondary"></i>',
    confirmButtonColor: "transparent",
    padding: "15px 20px",
    showClass: { popup: "animated bounceIn" },
    hideClass: { popup: "animated bounceOut" },
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

// Empty Link Click Event

$("a[href='javascript:void(0);']").click(function () {
    $.toast.fire({
        icon: "warning",
        title: "<span class='text-warning'>Link haven't Updated!</span>",
    });
    $("a[href='javascript:void(0);']").attr("target", "_self");
});

$(document).ready(function () {
    $("a").attr("target", "_blank");
});

// Visitors Counter

$.getJSON(
    "https://api.countapi.xyz/hit/bijit/portfolio",
    function (response) {
        $("#visits").text(response.value);
    }
);
