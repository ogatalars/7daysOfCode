let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

if (numeroUm === stringUm) {
  console.log(
    `As variáveis do ${numeroUm} e ${stringUm} são iguais e tem o mesmo tipo`
  );
} else if (numeroUm == stringUm) {
  console.log(
    `As variáveis do ${numeroUm} e ${stringUm} são iguais mas não tem o mesmo tipo`
  );
} else {
  console.log(`As variáveis do ${numeroUm} e ${stringUm} são diferentes`);
}

if (numeroTrinta === stringTrinta) {
  console.log(`As variáveis do ${numeroTrinta} e ${stringTrinta} são iguais`);
}

if (numeroTrinta === stringTrinta) {
  console.log(
    `As variáveis do ${numeroTrinta} e ${stringTrinta} são iguais e tem o mesmo tipo`
  );
} else if (numeroTrinta == stringTrinta) {
  console.log(
    `As variáveis do ${numeroTrinta} e ${stringTrinta} são iguais mas não tem o mesmo tipo`
  );
} else {
  console.log(
    `As variáveis do ${numeroTrinta} e ${stringTrinta} são diferentes`
  );
}

if (numeroDez === stringDez) {
  console.log(
    `As variáveis do ${numeroDez} e ${stringDez} são iguais e tem o mesmo tipo`
  );
} else if (numeroDez == stringDez) {
  console.log(
    `As variáveis do ${numeroDez} e ${stringDez} são iguais mas não tem o mesmo tipo`
  );
} else {
  console.log(`As variáveis do ${numeroDez} e ${stringDez} são diferentes`);
}
