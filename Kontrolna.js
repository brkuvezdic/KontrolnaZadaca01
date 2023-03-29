//a grupa

//1.
// function parni() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) console.log(i);
//   }
// }

// parni();

//2 zad
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak";

// let a = 1;

// function dani(a) {
//   console.log("Unesi dan od 1 do 7");
//   switch (a) {
//     case "1":
//       console.log("Ponedjeljak");
//       break;

//     case "2":
//       console.log("Utorak");
//       break;
//     case "3":
//       console.log("srijeda");
//       break;
//     case "4":
//       console.log("cetvrtak");
//       break;
//     case "5":
//       console.log("petak");
//       break;
//     case "6":
//       console.log("subota");
//       break;
//     case "7":
//       console.log("ned");
//       break;

//     default:
//       console.log("Krivi unos");
//   }
// }

// dani("6");

//3.

//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

// function okreni(str) {
//   let novi = "";
//   let brojac = 0;
//   let dodatnibrojac = 0;
//   let pomocni = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] == " ") dodatnibrojac++;

//     pomocni += str[i];
//     brojac++;
//   }
//   brojac = brojac - dodatnibrojac;
//   console.log(pomocni);
//   console.log(brojac);
// }

// okreni("Pisanje zadataka nije jednostavan posao");


//zamjena zad

 const kvadriraj = (niz) => {
   let pomniz = [];
  for (let i = 0; i < niz.length;i++) {

  }


  kvadriraj(2, 4, 6, 0, 1)
