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

// function okreni(a) {
//   console.log("Pocetak funkcije");

// }
// okreni("Pisanje zadataka nije jednostavan posao");

//zadnji zad
const someEvents = [
  {
    eventName: "Izasla je Java",
    eventYear: 1995,
  },
  {
    eventName: "Izasao je C#",
    eventYear: 2000,
  },
  {
    eventName: "Izasao je Python",
    eventYear: 1991,
  },
  {
    eventName: "Izasao je C++",
    eventYear: 1985,
  },
  {
    eventName: "Izasao je JavaScript",
    eventYear: 1995,
  },
];

function godine(x) {
  for (let i = 0; i < 10; i++) {
    console.log(someEvents.eventYear);
  }
}
godine("5");
