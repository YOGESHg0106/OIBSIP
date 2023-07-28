let value = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (a)=>{
    if(a.target.innerHTML == '='){
      value = eval(value);
      document.querySelector('input').value = value;
    }
    else if(a.target.innerHTML == 'C'){
      value = ""
      document.querySelector('input').value = value;
    }
    else{ 
    console.log(a.target)
    value = value + a.target.innerHTML;
    document.querySelector('input').value = value;
      }
  })
})