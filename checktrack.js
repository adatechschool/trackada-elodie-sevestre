// Affichage dans terminal

// commande : node nomFichier.ext

console.log("hello elo y a de l'echo"); // le terminal affiche bien le message -> OK !

// Le script (checktrack.js) doit : Fichier JSON  →  Script Node.js  →  Vérifications  →  Messages dans le terminal

// Etape 1 : Charger et parser en JSON le fichier track.json

// Etape 1.1 : Import des modules

import { readFileSync, existsSync, fstatSync } from "fs"; // vérifier l'existence du fichier JSON
import { homedir, version } from "os";
import { join } from "path";

// Etape 1.2 : Lire le fichier JSON et le parser pour l'utiliser dans JS

const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data);

// Etape 2 : Vérifier que le dossier ada existe dans le dossier home (~)

const homePath = homedir();
const trackAda = join(homePath, "Documents", "ada");

if (existsSync(trackAda)) {
  console.log(`Folder ada exists`);
} else {
  console.log(`Folder ada doesn't exist`);
}

// Etape 3 : Vérifier que les dossiers, le dossier .git et les fichiers existent dans ada

for (const project of track.projects) {
  //console.log(project.name);
  const folder = join(trackAda, project.name);

  if (existsSync(folder)) {
    console.log(`Folder "${project.name}" exists`);
  } else {
    console.log(`Folder "${project.name}" doesn't exist`);
  }

  const gitPath = join(folder, ".git");

  if (existsSync(gitPath)) {
    console.log(`Folder "${".git"}" exists`);
  } else {
    console.log(`Folder "${".git"}" doesn't exist`);
  }

  for (const fileName of project.required) {
    const filePath = join(folder, fileName);

    if (existsSync(filePath)) {
      console.log(`File "${project.required}" exists`);
    } else {
      console.log(`File "${project.required}" doesn't exist`);
    }
  }
}
