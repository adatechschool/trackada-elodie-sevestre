// Etape 1 : Charger et parser en JSON le fichier track.json

// Etape 1.1 : Import des modules

import { readFileSync, existsSync } from "fs"; // vérifier l'existence du fichier JSON
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

// Etape 3 : Vérifier que les dossiers et les fichiers existent dans ada.
//           Vérifier présence .git dans dossier avant de checker fichiers.

for (const project of track.projects) {
  // for...of nous permet d'itérer dans des objets
  const folder = join(trackAda, project.name); // join() permet de rajouter
  if (!existsSync(folder)) {
    console.log(`❌ Folder "${project.name}" doesn't exist`);
  } else {
    console.log(`✅ Folder "${project.name}" exists`);
  }

  const gitPath = join(folder, ".git");
  if (!existsSync(gitPath)) {
    console.log(`❌ Git repository not initialized`);
  } else {
    console.log(`✅ Git repository initialized`);
  }
  if (project.required.length > 0) {
    const noFiles = [];
    for (const fileName of project.required) {
      const filePath = join(folder, fileName);
      if (!existsSync(filePath)) {
        noFiles.push(fileName);
      }
    }

    if (noFiles.length > 0) {
      console.log(`❌ Missing ${noFiles.join(", ")}`);
    } else {
      console.log(`✅ All required files exist`);
    }
    console.log(""); // espace entre projets
  }
}
