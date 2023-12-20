// include header to all pages
const head = document.querySelector(".header");
fetch("/html/header.html")
  .then((res) => res.text())
  .then((data) => {
    head.innerHTML = data;
  });

// include
const product = document.querySelector(".product");
fetch("/html/product.html")
  .then((res) => res.text())
  .then((data) => {
    product.innerHTML = data;
  });

// include footer
const footer = document.querySelector(".footer");
fetch("/html/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

// // include Category
// const category = document.querySelector('.category')
// fetch('/html/components/category.html')
// .then(res=>res.text())
// .then(data=>{
//     category.innerHTML=data
// })

// // include bestSell
// const bestSell = document.querySelector('.category')
// fetch('/html/components/bestSell.html')
// .then(res=>res.text())
// .then(data=>{
//     bestSell.innerHTML=data
// })

// countdown date time
var countdownDate = new Date("Jan 5, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
});
