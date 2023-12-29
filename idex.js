let nomeDoHeroi = "Gustavo"
let XP = 100


switch (XP) {
  case XP < 1000:
    console.log(nomeDoHeroi  +  "ESTÁ NO NIVEL DE FERRO!");
    break;
  case XP >= 1001:
    console.log(nomeDoHeroi  +  "ESTÁ NO NIVEL DE BRONZE");
    break;
  case XP >= 2001:
    console.log(nomeDoHeroi  +  "ESTÁ NO NIVEL DE PRATA");
    break;
  case XP >= 5001:
    console.log(nomeDoHeroi  + "ESTÁ NO NIVEL DE OURO!");
    break;
  case XP >= 7001:
    console.log(nomeDoHeroi  +  "ESTÁ NO NIVEL DE PLATINA!");
    break;
 case XP >= 8001:
    console.log(nomeDoHeroi + "ESTÁ NO NIVEL ACENDENTE!")
    break;
 case XP >= 9001:
    console.log(nomeDoHeroi + "ESTÁ NO NIVEL IMORTAL!")
    break;
case XP >= 100001:
    console.log(nomeDoHeroi + "ESTÁ NO NIVEL RADIANTE!")


}


