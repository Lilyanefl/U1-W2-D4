/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(p1, p2) {
  if (p1 != p2) {
    return p1 + p2;
  } else if (p1 === p2) {
    return (p1 + p2) * 3;
  }
}
console.log(crazySum(5, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(p1) {
  var differenza = Math.abs(p1 - 19);
  if (p1 > 19) {
    return differenza * 3;
  }
  return differenza;
}
console.log(crazyDiff(-4));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
}
console.log(boundary(100));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(parola) {
  if (parola.startsWith("EPICODE", 0)) {
    return parola;
  }
  return "EPICODE".concat(parola);
}
console.log(epify(" corso di programmazione"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(p1) {
  if (p1 % 3 === 0 || p1 % 7 === 0) {
    return true;
  }
  return false;
}
console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*function upperFirst(fst) {
  fst.charAt(0).toUpperCase();
  for (let i = 1; i < fst.length; i++) {
    if (fst.charAt(i - 1) === " ") {
      fst.charAt(i).toUpperCase();
    }
  }
  return fst;
}
   */
/*function upperFirst(str) {
  let words = str.split(" ");
  let completeSentence = "";
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let firstLetter = w.charAt(0).toUpperCase();
    let remainingLetters = w.slice(1);
    let completeWord = firstLetter + remainingLetters;
    completeSentence += completeWord + " ";
    console.log(completeWord);
  }
  console.log(completeSentence);
}
console.log(upperFirst("mi piace il mango")); */

function upperFirst(str) {
  let words = str.split(" ");
  let wordsCapitalized = [];
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let firstLetter = w.charAt(0).toUpperCase();
    let remainingLetters = w.slice(1);
    let completeWord = firstLetter + remainingLetters;
    wordsCapitalized.push(completeWord);
  }
  console.log(wordsCapitalized);
  let completeSentence = wordsCapitalized.join(" ");
  return completeSentence;
}
console.log(upperFirst("mi piace il mango"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  return str.slice(1, str.length - 1);
};
console.log(cutString("EPICODE"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
{
}
function giveMeRandom(n) {
  let numbers = [];
  for (i = 0; i < numbers.length; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  return numbers;
}
console.log(giveMeRandom(3));
