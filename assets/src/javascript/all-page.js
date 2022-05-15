// 
var login_btn = document.getElementById('login-btn');
var showForm = document.getElementById('form-account')
login_btn.addEventListener('click', function () {
    showForm.classList.toggle('show')
});

// counter design
document.addEventListener ("DOMContentLoaded", () =>{
    function counter (id, start, end, duration){
       let obj = document.getElementById(id),
       current = start, 
       range=end- start,
       increment= end > start?1:-1,
       step=Math.abs(Math.floor(duration/range)),
       timer = setInterval(() => {
        current += increment;
         obj.textContent = current;
          if(current == end){
            clearInterval(timer);
          }
      }, step);
  }
  counter("count1",0  ,2000, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0 ,3050, 3000);
  counter("count4", 0 , 7110, 3000);
});

  