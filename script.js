let a = ''; //firt number
let b = ''; //second number
let sign = ''; //znak operasii
let finish = false;


const digit =['0', '1', '2', '3', '4', '5', '6',  '7', '8', '9', '.' ];
const action =['-', '+', 'X', '/',  ];


//ekran
const out = document.querySelector('.calc-screen p') ;

function clearAll () {
a = ''; //firt number
b = ''; //second number
sign = ''; //znak operasii
finish = false;
out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //nazhata ne knopka
if (!event.target.classList.contains('btn')) return;
//nazhata knopka clearAll ac
if (event.target.classList.contains('ac')) return;


out.textContent = '';
//poluchaiu nazhatnuiu knopka
const key = event.target.textContent;

//klavisha 0-9
if (digit.includes(key))  {
    if (b ==='' && sign === '') {
    a += key;
console.log(a , b ,sign);
out.textContent = a;

    }
    else if (a!=='' && b!=='' && finish) {
        b = key;
        finish = false;
        out.textContent = b;

    }
    else {
        b += key;
        out.textContent = b;
    }
    console.log(a, b, sign);
    return;
}

//esli nazhata +-/*
if (action.includes(key))  {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
}
 //nazhata 
 if (key === '=') {
     if (b ==='')   b = a;
     switch (sign) {
         case "+":
             a = (+a) + (+b);
             break;
             case "-":
                a = a - b;
                break;
                case "X":
                    a = a * b;
                    break;
                    case "/":
                      if (b === '0'){
                          out.textContent = 'Falsch';
                          a = '';
                          b = '';
                          sign = '';
                          return;
                      }

                        
                    a = a / b;
                    break;

     }
     finish = true;
     out.textContent = a;
     console.table(a, b, sign);
 }


}




