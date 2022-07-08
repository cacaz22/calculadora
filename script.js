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
// const btnPnt = document.getElementById('punto');

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
//botones

btn0.onclick = function(){
    // a = parseInt(valor);
    // b = parseInt(this.value)
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn1.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn2.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn3.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn4.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn5.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn6.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn7.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn8.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
btn9.onclick = function(){
    valor = valor + this.value;
    pantalla.innerText = valor;
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;
}
// btnPnt.onclick = function(){
//     valor = valor + this.value;
//     pantalla.innerText = valor;
//     console.log(valor);
// }
//operaciones 
suma.onclick = ()=>{
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
                    resultado =  (parseInt(valor2) + parseInt(valor));  
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
                resultado =  (parseInt(resultado) + parseInt(valor));  
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
    }else if (resultado === pantalla.innerText){
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
                    resultado =  (parseInt(valor2) + parseInt(valor));
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
                resultado =  (parseInt(resultado) + parseInt(valor)); 
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
    }else if (resultado === pantalla.innerText){
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
                    resultado =  (parseInt(valor2) + parseInt(valor));
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
                resultado =  (parseInt(resultado) + parseInt(valor));
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
    }else if (resultado === pantalla.innerText){
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
                    resultado =  (parseInt(valor2) + parseInt(valor));  
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
                resultado =  (parseInt(resultado) + parseInt(valor));  
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
    }else if (resultado === pantalla.innerText){
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
                    resultado =  (parseInt(valor2) + parseInt(valor));  
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
                resultado =  (parseInt(resultado) + parseInt(valor));  
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
    }else if (resultado === pantalla.innerText){
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
    if(resultado===""){
        a = parseInt(valor2);
        b = parseInt(valor);
    }else{
        a = parseInt(resultado); 
        b = parseInt(valor);  
        }
    if (operacion === "+") {
        resultado = a + b;
        pantalla.innerText = resultado;
    }else if (operacion ==="-") {
        resultado = a - b;
        pantalla.innerText = resultado;
    }else if (operacion === "/") {
        resultado = a / b;
        pantalla.innerText = resultado;
    } else if (operacion === "*") {
        valor = "";
        valor2= "";
        resultado = a * b;
        pantalla.innerText = resultado;
    } else if (operacion==="%"){
        resultado = ((a*b)/100);
        console.log(resultado);
        pantalla.innerText = resultado;
    }
    
    
});

clear.addEventListener('click',()=>{
    valor ="";
    valor2="";
    operacion = "";
    resultado = "";
    pantalla.innerText = "0";

    btn0.disabled = false;
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;  
    borrar.disabled = false;
    suma.disabled  = false;
    resta.disabled = false;
    multi.disabled = false;
    divi.disabled  = false;  
    

})
borrar.onclick = ()=>{
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

-agregar funcion al boton % -----------
-agregar que si existen 2 valores al apretar una operacion se lleve a cabo la anterior
-agregar que el boton enter tire un error si no ingresaste nada
-pantalla 2 para poder borrar operaciones?
-simplificar el codigo

extra:
agregar sonidos

*/
test.onclick = ()=>{
    console.log({valor,valor2,operacion,resultado,prevPantalla,a,b});
}