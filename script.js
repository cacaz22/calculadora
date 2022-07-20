const btn0 = document.getElementById('num0');
const btn1 = document.getElementById('num1');
const btn2 = document.getElementById('num2');
const btn3 = document.getElementById('num3');
const btn4 = document.getElementById('num4');
const btn5 = document.getElementById('num5');
const btn6 = document.getElementById('num6');
const btn7 = document.getElementById('num7');
const btn8 = document.getElementById('num8');
const btn9 = document.getElementById('num9');
const btnPnt = document.getElementById('punto');

const enter      = document.querySelector('.resultado');
const clear      = document.querySelector('#clear');
const suma       = document.getElementById('suma');
const resta      = document.getElementById('resta');
const multi      = document.getElementById('multi');
const divi       = document.getElementById('divi');
const borrar     = document.getElementById('borrar');
const porcentaje = document.getElementById('porcentaje');
const test       = document.getElementById('test');

const pantalla = document.getElementById('pantalla');
let valor        ="";
let valor2       ="";
let operacion    ="";
let resultado    ="";
let prevPantalla ="";
let a ="";
let b ="";
let lastkey = "";
//botones

btn0.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn1.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn2.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn3.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn4.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn5.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn6.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn7.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn8.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btn9.onclick = function(){
    lastkey = "num";
    valor = valor + this.value;
    pantalla.innerText = valor;
}
btnPnt.onclick = function(){
    valor = valor + this.value;
   pantalla.innerText = valor;
}
//operaciones 
suma.onclick = ()=>{
    lastkey = "operacion";
    if ((valor === pantalla.innerText)&&(valor2 !== "")&&(resultado ==="")){
        switch (operacion) {
            case "*":
                resultado =  valor2 * valor;  
                valor= "";
                valor2="";
                operacion="+";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "-":
                resultado =  valor2 - valor;  
                valor= "";
                valor2="";
                operacion="+";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "+":
                    resultado =  Number(valor2) + Number(valor);  
                    valor= "";
                    valor2="";
                    operacion="+";
                    pantalla.innerText = resultado;
    
                    console.log(resultado);
                    break;
            
            case "/":
                    resultado =  valor2 / valor;  
                    valor= "";
                    valor2="";
                    operacion="+";
                    pantalla.innerText = resultado;

                    console.log(resultado);
                    break;
            
            case "%":
                    resultado = ((valor*valor2)/100);
                    valor= "";
                    valor2="";
                    operacion="+";
                    pantalla.innerText = resultado;
            
                    console.log(resultado);
                    break;
            
            default:
                break;
        }
    }else if ((valor === pantalla.innerText)&&(valor2 === "")&&(resultado !=="")){
        
    switch (operacion) {
        case "*":
            resultado =  resultado * valor;  
            valor= "";
            valor2="";
            operacion="+";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "-":
            resultado =  resultado - valor;  
            valor= "";
            valor2="";
            operacion="+";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "+":
                resultado =  (Number(resultado) + Number(valor));  
                valor= "";
                valor2="";
                operacion="+";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "/":
                resultado =  resultado / valor;  
                valor= "";
                valor2="";
                operacion="+";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "%":
                resultado = ((resultado*valor)/100);
                valor= "";
                valor2="";
                operacion="+";
                pantalla.innerText = resultado;
        
                console.log(resultado);
        break;
        
        default:
            break;
    }
    } else if ((valor === pantalla.innerText)&&(valor2==="")){
        valor2 = valor;
        valor  = "";
        operacion = "+";
        console.log(operacion);
        pantalla.innerText ="+";
    }else if (resultado == pantalla.innerText){
        valor2 = resultado; 
        valor="";
        resultado="";
        operacion = "+";
        console.log(resultado);
        console.log(operacion);
        pantalla.innerText = "+";
    }
}

resta.onclick = ()=>{
    lastkey = "operacion";
    if ((valor === pantalla.innerText)&&(valor2 !== "")&&(resultado ==="")){
        switch (operacion) {
            case "*":
                resultado =  valor2 * valor;  
                valor= "";
                valor2="";
                operacion="-";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "-":
                resultado =  valor2 - valor;  
                valor= "";
                valor2="";
                operacion="-";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "+":
                    resultado =  (Number(valor2) + Number(valor));
                    valor= "";
                    valor2="";
                    operacion="-";
                    pantalla.innerText = resultado;
    
                    console.log(resultado);
                    break;
            
            case "/":
                    resultado =  valor2 / valor;  
                    valor= "";
                    valor2="";
                    operacion="-";
                    pantalla.innerText = resultado;

                    console.log(resultado);
                    break;
            
            case "%":
                resultado = ((valor*valor2)/100);
                valor= "";
                valor2="";
                operacion="-";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
            
            default:
                break;
        }
    }else if ((valor === pantalla.innerText)&&(valor2 === "")&&(resultado !=="")){
        
    switch (operacion) {
        case "*":
            resultado =  resultado * valor;  
            valor= "";
            valor2="";
            operacion="-";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "-":
            resultado =  resultado - valor;  
            valor= "";
            valor2="";
            operacion="-";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "+":
                resultado =  (Number(resultado) + Number(valor)); 
                valor= "";
                valor2="";
                operacion="-";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "/":
                resultado =  resultado / valor;  
                valor= "";
                valor2="";
                operacion="-";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        

        case "%":
                resultado = ((resultado*valor)/100);
                valor= "";
                valor2="";
                operacion="-";
                pantalla.innerText = resultado;
        
                console.log(resultado);
        break;
        
        default:
            break;
    }
    } else if ((valor === pantalla.innerText)&&(valor2==="")){
        valor2 = valor;
        valor  = "";
        operacion = "-";
        console.log(operacion);
        pantalla.innerText ="-";
    }else if (resultado == pantalla.innerText){
        valor2 = resultado; 
        valor="";
        resultado="";
        operacion = "-";
        console.log(resultado);
        console.log(operacion);
        pantalla.innerText = "-";
    }
}

multi.onclick = ()=>{
    lastkey = "operacion";
    if ((valor === pantalla.innerText)&&(valor2 !== "")&&(resultado ==="")){
        switch (operacion) {
            case "*":
                resultado =  valor2 * valor;  
                valor= "";
                valor2="";
                operacion="*";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "-":
                resultado =  valor2 - valor;  
                valor= "";
                valor2="";
                operacion="*";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "+":
                    resultado =  (Number(valor2) + Number(valor));
                    valor= "";
                    valor2="";
                    operacion="*";
                    pantalla.innerText = resultado;
    
                    console.log(resultado);
                    break;
            
            case "/":
                    resultado =  valor2 / valor;  
                    valor= "";
                    valor2="";
                    operacion="*";
                    pantalla.innerText = resultado;

                    console.log(resultado);
                    break;
            
            case "%":
                resultado = ((valor*valor2)/100);
                valor= "";
                valor2="";
                operacion="*";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;

            default:
                break;
        }
    }else if ((valor === pantalla.innerText)&&(valor2 === "")&&(resultado !=="")){
        
    switch (operacion) {
        case "*":
            resultado =  resultado * valor;  
            valor= "";
            valor2="";
            operacion="*";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "-":
            resultado =  resultado - valor;  
            valor= "";
            valor2="";
            operacion="*";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "+":
                resultado =  (Number(resultado) + Number(valor));
                valor= "";
                valor2="";
                operacion="*";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "/":
                resultado =  resultado / valor;  
                valor= "";
                valor2="";
                operacion="*";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "%":
                resultado = ((resultado*valor)/100);
                valor= "";
                valor2="";
                operacion="*";
                pantalla.innerText = resultado;
        
                console.log(resultado);
        break;

        default:
            break;
    }
    } else if ((valor === pantalla.innerText)&&(valor2==="")){
        valor2 = valor;
        valor  = "";
        operacion = "*";
        console.log(operacion);
        pantalla.innerText ="*";
    }else if (resultado == pantalla.innerText){
        valor2 = resultado; 
        valor="";
        resultado="";
        operacion = "*";
        console.log(resultado);
        console.log(operacion);
        pantalla.innerText = "*";
    }
} 

divi.onclick = ()=>{
    lastkey = "operacion";
    if ((valor === pantalla.innerText)&&(valor2 !== "")&&(resultado ==="")){
        switch (operacion) {
            case "*":
                resultado =  valor2 * valor;  
                valor= "";
                valor2="";
                operacion="/";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "-":
                resultado =  valor2 - valor;  
                valor= "";
                valor2="";
                operacion="/";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "+":
                    resultado =  (Number(valor2) + Number(valor));  
                    valor= "";
                    valor2="";
                    operacion="/";
                    pantalla.innerText = resultado;
    
                    console.log(resultado);
                    break;
            
            case "/":
                    resultado =  valor2 / valor;  
                    valor= "";
                    valor2="";
                    operacion="/";
                    pantalla.innerText = resultado;

                    console.log(resultado);
                    break;
            
            case "%":
                resultado = ((valor*valor2)/100);
                valor= "";
                valor2="";
                operacion="/";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
            
            default:
                break;
        }
    }else if ((valor === pantalla.innerText)&&(valor2 === "")&&(resultado !=="")){
        
    switch (operacion) {
        case "*":
            resultado =  resultado * valor;  
            valor= "";
            valor2="";
            operacion="/";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "-":
            resultado =  resultado - valor;  
            valor= "";
            valor2="";
            operacion="/";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "+":
                resultado =  (Number(resultado) + Number(valor));  
                valor= "";
                valor2="";
                operacion="/";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "/":
                resultado =  resultado / valor;  
                valor= "";
                valor2="";
                operacion="/";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
            case "%":
                    resultado = ((resultado*valor)/100);
                    valor= "";
                    valor2="";
                    operacion="/";
                    pantalla.innerText = resultado;
            
                    console.log(resultado);
            break;
        
        default:
            break;
    }
    } else if ((valor === pantalla.innerText)&&(valor2==="")){
        valor2 = valor;
        valor  = "";
        operacion = "/";
        console.log(operacion);
        pantalla.innerText ="/";
    }else if (resultado == pantalla.innerText){
        valor2 = resultado; 
        valor="";
        resultado="";
        operacion = "/";
        console.log(resultado);
        console.log(operacion);
        pantalla.innerText = "/";
    }
} 
 
porcentaje.onclick = ()=>{
    lastkey = "operacion";
    if ((valor === pantalla.innerText)&&(valor2 !== "")&&(resultado ==="")){
        switch (operacion) {
            case "*":
                resultado =  valor2 * valor;  
                valor= "";
                valor2="";
                operacion="%";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "-":
                resultado =  valor2 - valor;  
                valor= "";
                valor2="";
                operacion="%";
                pantalla.innerText = resultado;

                console.log(resultado);
                break;
            
            case "+":
                    resultado =  (Number(valor2) + Number(valor));  
                    valor= "";
                    valor2="";
                    operacion="%";
                    pantalla.innerText = resultado;
    
                    console.log(resultado);
                    break;
            
            case "/":
                    resultado =  valor2 / valor;  
                    valor= "";
                    valor2="";
                    operacion="%";
                    pantalla.innerText = resultado;

                    console.log(resultado);
                    break;
            
            case "%":
                    resultado = ((valor*valor2)/100);
                    valor= "";
                    valor2="";
                    operacion="%";
                    pantalla.innerText = resultado;
            
                    console.log(resultado);
                    break;

            default:
                break;
        }
    }else if ((valor === pantalla.innerText)&&(valor2 === "")&&(resultado !=="")){
        
    switch (operacion) {
        case "*":
            resultado =  resultado * valor;  
            valor= "";
            valor2="";
            operacion="%";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "-":
            resultado =  resultado - valor;  
            valor= "";
            valor2="";
            operacion="%";
            pantalla.innerText = resultado;

            console.log(resultado);
            break;
        
        case "+":
                resultado =  (Number(resultado) + Number(valor));  
                valor= "";
                valor2="";
                operacion="%";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "/":
                resultado =  resultado / valor;  
                valor= "";
                valor2="";
                operacion="%";
                pantalla.innerText = resultado;
        
                console.log(resultado);
                break;
        
        case "%":
                resultado = ((resultado*valor)/100);
                valor= "";
                valor2="";
                operacion="%";
                pantalla.innerText = resultado;
        
                console.log(resultado);
        break;
        
        default:
            break;
    }
    } else if ((valor === pantalla.innerText)&&(valor2==="")){
        valor2 = valor;
        valor  = "";
        operacion = "%";
        console.log(operacion);
        pantalla.innerText ="%";
    }else if (resultado == pantalla.innerText){
        valor2 = resultado; 
        valor="";
        resultado="";
        operacion = "%";
        console.log(resultado);
        console.log(operacion);
        pantalla.innerText = "%";
    }
}
//finalizar

enter.addEventListener("click",()=>{
    lastkey = "enter";

    if(resultado===""){
        a = Number(valor2);
        b = Number(valor);
    }else if (resultado !== ""){
        a = Number(resultado); 
        b = Number(valor);  
        }
    if (operacion === "+") {
        valor ="";
        valor2="";
        operacion="";
        resultado = a + b;
        pantalla.innerText = resultado;
    }else if (operacion ==="-") {
        valor="";
        valor2="";
        operacion="";
        resultado = a - b;
        pantalla.innerText = resultado;
    }else if (operacion === "/") {
        valor = "";
        valor2= "";
        operacion="";
        resultado = a / b;
        pantalla.innerText = resultado;
    } else if (operacion === "*") {
        valor ="";
        valor2="";
        operacion="";
        resultado = a * b;
        pantalla.innerText = resultado;
    } else if (operacion==="%"){
        valor ="";
        valor2="";
        operacion="";
        resultado = ((a*b)/100);
        console.log(resultado);
        pantalla.innerText = resultado;
    }else {
        pantalla.innerText = "agrega algo para calcular ameo xd"
        console.log("holaxd");
    }
    
    
});

clear.addEventListener('click',()=>{
    lastkey = "";
    valor ="";
    valor2="";
    operacion = "";
    resultado = "";
    pantalla.innerText = "0";
    
})
borrar.onclick = ()=>{
    lastkey = "";
    console.log({valor});
    console.log({valor2});
        if (pantalla.innerText==valor) {
            if (valor.length>0) {
                valor = valor.substring(0, valor.length - 1);
                pantalla.innerText = valor;
            } 
            if (valor===""){
                pantalla.innerText = "0";
            } 
                
        }else if (pantalla.innerText==valor2) {
            if (valor2.length>0) {
                valor2 = valor2.substring(0, valor.length - 1);
                pantalla.innerText = valor2;
            } 
            if (valor2===""){
                pantalla.innerText = "0";
            }
        }
}



/*
tareas a hacer:

-agregar funcion al boton % -listo-
-agregar que si existen 2 valores al apretar una operacion se lleve a cabo la anterior -listo-
-agregar que el boton enter tire un error si no ingresaste nada -listo-
-poder usar numeros con . -listo-
-agregar limite de cifras a 20
-pantalla 2 para poder borrar operaciones?
-simplificar el codigo

extra:
agregar sonidos

*/
test.onclick = ()=>{
    console.log({valor,valor2,operacion,resultado,prevPantalla,a,b,pantalla});
}