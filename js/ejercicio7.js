/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*/

let num1 = parseInt(prompt("Escriba el primer numero"));
let num2 = parseInt(prompt("Escriba el segundo numero"));
let num3 = parseInt(prompt("Escriba el tercer numero"));

if (num1 > num2 && num1 > num3) 
{
  document.write("El mayor es: " + " " + num1);
} else if (num2 > num1 && num2 > num3) 
{
  document.write("El mayor es: " + " " + num2);
} else if (num3 > num1 && num3 > num2) 
{
  document.write("El mayor es: " + " " + num3);
}
