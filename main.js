document.addEventListener(
    "DOMContentLoaded",
    function () {
      var days = document.querySelector(".days span");
      var hour = document.querySelector(".hour");
      var min = document.querySelector(".min");
      var second = document.querySelector(".second");
      var d= new Date();
      var startDate = new Date(2023, 03, 23);
      var startDate1 = new Date(d.getFullYear(),d.getMonth()+1, d.getDate());
      days.innerText = Math.floor((startDate1 - startDate) / 86400000);
      countTime();
  
      function countTime() {
        
        let today = new Date();
        let ms = (today - startDate) % 86400000;
        hour.innerText = Math.floor(ms / 3600000);
        min.innerText = Math.floor((ms % 3600000) / 60000);
        second.innerText = Math.floor(((ms % 3600000) % 60000) / 1000);
      }
  
      setInterval(countTime, 1000);
    },
    false
  );

  // Tạo ra một mảng các hạt mưa tuyết
let snowflakes = [];

// Thiết lập tốc độ và số lượng hạt mưa tuyết
const numFlakes = 100;
const speed = 2;

// Lấy ra phần tử HTML của hiệu ứng mưa tuyết
const snowfall = document.querySelector('#snowfall');

// Tạo ra hạt mưa tuyết
for (let i = 0; i < numFlakes; i++) {
  let snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.opacity = Math.random();
  snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
  snowflakes.push(snowflake);
  snowfall.appendChild(snowflake);
}

// Di chuyển các hạt mưa tuyết
function snowfallLoop() {
  for (let i = 0; i < snowflakes.length; i++) {
    let snowflake = snowflakes[i];
    snowflake.style.top = `${snowflake.offsetTop + speed}px`;
    if (snowflake.offsetTop > snowfall.offsetHeight) {
      snowflake.style.top = `${-50}px`;
    }
  }
  requestAnimationFrame(snowfallLoop);
}

snowfallLoop();
  