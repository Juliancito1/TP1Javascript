/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*/

let num1 = prompt("Escriba el primer numero");
let num2 = prompt("Escriba el segundo numero");
let num3 = prompt("Escriba el tercer numero");

if(parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3))
{
    document.write("El mayor es: " + " " + num1)
}
else if (parseInt(num2) > parseInt(num1) && parseInt(num2) > parseInt(num3))
{
    document.write("El mayor es: " + " " + num2);
}
else if (parseInt(num3) > parseInt(num1) && parseInt(num3) > parseInt(num2))
{
    document.write("El mayor es: " + " " + num3);
}
