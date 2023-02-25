/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
*/

let num1 = prompt("Escriba un numero")

if(parseInt(num1) % 2 === 0)
{
    document.write("El numero " + num1 + " es divisible por 2")
}
else
{
    document.write("El numero " + num1 + " no es divisible por 2")
}