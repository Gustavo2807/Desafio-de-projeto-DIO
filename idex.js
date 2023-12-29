let nomeDoHeroi = "guilherme1!@44";
let XP = 100;

if (XP < 1000) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL DE FERRO!");
} else if (XP >= 1001 && XP < 2001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL DE BRONZE");
} else if (XP >= 2001 && XP < 5001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL DE PRATA");
} else if (XP >= 5001 && XP < 7001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL DE OURO!");
} else if (XP >= 7001 && XP < 8001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL DE PLATINA!");
} else if (XP >= 8001 && XP < 9001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL ACENDENTE!");
} else if (XP >= 9001 && XP < 100001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL IMORTAL!");
} else if (XP >= 100001) {
  console.log(nomeDoHeroi + " ESTÁ NO NÍVEL RADIANTE!");
}