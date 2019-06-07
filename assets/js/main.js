$( document ).ready(function() {
var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.b1').hover(sourceSwap, sourceSwap);
});

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.bk').hover(sourceSwap, sourceSwap);
});

$( ".button4" ).mouseenter(function() {
  $(".bg4").addClass('active');
});

$( ".button4" ).mouseleave(function() {
  $(".bg4").removeClass('active');
});

$( ".button3" ).mouseenter(function() {
  $(".bg3").addClass('active');
});

$( ".button3" ).mouseleave(function() {
  $(".bg3").removeClass('active');
});

$( ".button2" ).mouseenter(function() {
  $(".bg2").addClass('active');
});

$( ".button2" ).mouseleave(function() {
  $(".bg2").removeClass('active');
});

$( ".button1" ).mouseenter(function() {
  $(".bg1").addClass('active');
});

$( ".button1" ).mouseleave(function() {
  $(".bg1").removeClass('active');
});




});