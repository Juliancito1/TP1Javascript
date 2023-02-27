//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numero = parseInt(
  prompt("Escriba un numero para saber si es divsible por 2,3,5 o 7")
);

if (!isNaN(numero)) {
  if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0
  ) 
  {
    document.write(`El numero (${numero}) es divisible por 2,3,5 o 7`);
  } else 
  {
    document.write(`El numero (${numero}) no es divisible por 2,3,5 o 7`);
  }
} else 
{
  document.write("Usted no ingreso un numero");
}
