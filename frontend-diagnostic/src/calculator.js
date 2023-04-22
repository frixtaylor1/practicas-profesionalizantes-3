let display = document.getElementById("display");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal"); 

let btt = document.querySelectorAll('.btt');

btt.forEach(function(token){
  token.addEventListener('click', function() {
    display.value += this.value;
    console.log(this.value)
  });
})

equal.addEventListener('click', () => {
  display.value = eval(display.value);
});

clear.addEventListener('click', () => {
  display.value = "";
});