// Kode Vanilla Javascript(Javascript Murni) untuk menambahkan value
// pada elemen HTML

document.getElementById('nama').innerHTML = 'Wachid Muslih'

//Kode JQuery untuk menambahkan value pada elemen HTML

$('#nim').html('20190140110');

$(function(){
    console.log("Hello");
});

$("#hide").on("click", function(){
    $("#nama").hide();
});

$("#show").on("click", function()
{
    $("#nama").show();
});


$("#toggle").on("click", function(){
    $("#nama").toggle();
});

$("#fadeIn").on("click", function()
{
    $("#tanggal").fadeIn();
});

$("#fadeOut").on("click", function()
{
    $("#tanggal").fadeOut();
});

$("#fadeToggle").on("click", function()
{
    $("#tanggal").fadeToggle();
});

$("#slideUp").on("click", function()
{
    $("#img").slideUp();
});

$("#slideDown").on("click", function()
{
    $("#img").slideDown();
});

$("#slideToggle").on("click", function()
{
    $("#img").slideToggle();
});
