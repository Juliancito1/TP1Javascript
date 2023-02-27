// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Escriba una frase");
let i = 0;
document.write(`La frase (${frase}) tiene las siguientes vocales:`);
for (i = 0; i <= frase.length; i++) 
{
  if (  frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") 
  {
    document.write(`<br>${frase.charAt(i)}`);
  }
}
