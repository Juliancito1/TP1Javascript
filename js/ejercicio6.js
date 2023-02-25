/* 
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let num1 = prompt("Escriba un numero");
let num2 = prompt("Escriba otro numero");
if(parseInt(num1) > parseInt(num2))
{
    document.write("El mayor es: " + num1);
}
else
{
    document.write("El mayor es: " + num2);
}

/* Se realiza un parseInt en ambas variables porque sino Javascript al escribir por ejemplo el numero 10 y 5 dirá que es mayor el 5 porque toma el primer digito ya que es un String entonces se pasa ese String a Int*/
