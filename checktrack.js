// Affichage dans terminal

// commande : node nomFichier.ext

console.log("hello elo y a de l'echo"); // le terminal affiche bien le message -> OK !

// Le script (checktrack.js) doit : Fichier JSON  →  Script Node.js  →  Vérifications  →  Messages dans le terminal

// Etape 1 : Lire un fichier JSON
// Consigne : utiliser des fonctions disponibles de Node.js (PAS de framework)
//  fonctions à utiliser : via des modules de Node.js
//      module fs : manipuler le système de fichiers
//                  readFileSync et existSync du module fs
//      module path : manipuler des chemins de fichiers
//                  join du module path
//      module os : en savoir plus sur les capacités de l'ordinateur
//                  homedir du module os

// Etape 1.1 : Import des modules

import { readFileSync, existsSync } from "fs"; // vérifier l'existence du fichier JSON
import { homedir } from "os";
import { join } from "path";

// vérifier l'existence du fichier JSON

if (existsSync("track.json")) {
  console.log("file exists");
} else {
  console.log("file does'nt exist");
}

// lire le fichier JSON et le parser pour l'utiliser dans JS

const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data);

// console.log(track);

// Etape 1.2 : Vérifier les dossiers

const homePath = homedir();
console.log(homePath);

const trackAda = join(homePath, "Documents", "trackada-elodie-sevestre");
console.log(trackAda);

// Etape 3 : Vérifier les fichiers
// Etape 4 : Vérifier que Git est activé
// Etape 5 : Afficher des messages clairs dans le terminal
