// Affichage dans terminal

// commande : node nomFichier.ext

console.log("hello elo y a de l'echo"); // le terminal affiche bien le message -> OK !

// Le script (checktrack.js) doit : Fichier JSON  →  Script Node.js  →  Vérifications  →  Messages dans le terminal

// Etape 1 : Charger et parser en JSON le fichier track.json

// Etape 1.1 : Import des modules

import { readFileSync, existsSync } from "fs"; // vérifier l'existence du fichier JSON
import { homedir } from "os";
import { join } from "path";

// Etape 1.2 : Vérifier l'existence du fichier JSON

if (existsSync("track.json")) {
  console.log("file exists");
} else {
  console.log("file does'nt exist");
}

// Etape 1.3 : Lire le fichier JSON et le parser pour l'utiliser dans JS

const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data);
// console.log(track);

// Etape 2 : Vérifier que le dossier ada existe dans le dossier home (~)

const homePath = homedir();
console.log(homePath);

//const trackAda = join(homePath, "Documents", "ada");
const trackAda = join(homePath, "Documents", "ada");
console.log(trackAda);

if (existsSync(trackAda)) {
  console.log("folder exists");
} else {
  console.log("folder doesn't exist");
}

// Etape 2.1 : Vérifier que les dossiers existent

for (const project of track.projects) {
  console.log(project.name);
  const adaPath = join(trackAda, project.name);
  if (existsSync(adaPath)) {
    console.log(`Folder "${project.name}" exists`);
  } else {
    console.log(`Folder "${project.name}" doesn't exist`);
  }
}

// Etape 2.1.1 : Transformer objet du JSON en array

// Etape 2.1.2 : itérer sur l'array pour vérifier les dossiers

// Etape 3 : Vérifier les fichiers
// Etape 4 : Vérifier que Git est activé
// Etape 5 : Afficher des messages clairs dans le terminal
