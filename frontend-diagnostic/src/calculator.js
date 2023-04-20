let display = document.getElementById("display");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal"); 

let btt = document.querySelectorAll('.btt');

let aToken = '';

btt.forEach(function(token){
  token.addEventListener('click', function() {
    aToken = this.value;
    display.value += aToken;
    console.log(this.value)
  });
})

equal.addEventListener('click', () => {
  display.value = eval(display.value);
});

clear.addEventListener('click', () => {
  display.value = "";
});