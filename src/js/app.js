/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true

// Подключение основного файла стилей
import "../scss/style.scss"


/*var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  /*pagination: {
    el: '.swiper-pagination',
  },*/

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    //prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});


// https://www.chartjs.org/docs/latest/charts/doughnut.html#doughnut
const data = {

  datasets: [{
    cutout: 0,
    data: [135, 45, 90, 90],
    backgroundColor: [
      '#76FFF7',
      '#79FF76',
      '#FFF976',
      '#FF7676'
    ],

    hoverOffset: 4,
    
  }]
};

const config = {
  
  options: {
      plugins: {
          tooltip: {
            enabled: false
          }
      }
  },
  type: 'doughnut',
 
  data: data,
};

var sharess = document.querySelectorAll(".sharess");
sharess.forEach(query => {
  new Chart(
    query,
    config
  );
});

/*const myChart = new Chart(
  document.querySelector('.sharess'),
  config
);*/