// Etape 1 : Import des modules

import { readFileSync, existsSync } from "fs"; // vérifier l'existence du fichier JSON
import { homedir, version } from "os";
import { join } from "path";

// Etape 2 : Lire le fichier JSON et le parser pour l'utiliser dans JS

const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data);

// Etape 3 : Vérifier que le dossier ada existe dans le dossier home (~)

const homePath = homedir();
const trackAda = join(homePath, "Documents", "ada");

if (existsSync(trackAda)) {
  console.log(`Folder ada exists`);
} else {
  console.log(`Folder ada doesn't exist`);
}

// Etape 4 : Vérifier que les dossiers et les fichiers existent dans ada.
//           Vérifier présence .git dans dossier avant de checker fichiers.

let count = 0; // variable pour le calcul du %

for (const project of track.projects) {
  // for...of nous permet d'itérer dans des objets
  const folder = join(trackAda, project.name); // join() permet de rajouter
  let projectComplete = true; // variable pour projet 100%
  if (!existsSync(folder)) {
    console.log(`❌ Folder "${project.name}" doesn't exist`);
    projectComplete = false;
  } else {
    console.log(`✅ Folder "${project.name}" exists`);
  }

  const gitPath = join(folder, ".git");

  if (!existsSync(gitPath)) {
    console.log(`❌ Git repository not initialized`);
    projectComplete = false;
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
    if (noFiles.length === 1) {
      console.log(`Missing : ${noFiles[0]}`);
      projectComplete = false;
    } else if (noFiles.length > 1) {
      projectComplete = false;
      const firstFiles = noFiles.slice(0, noFiles.length - 1);
      // On récupère seulement le dernier
      const lastFile = noFiles[noFiles.length - 1]; // String
      // On affiche le tout dans une seule phrase
      console.log(`- Missing : ${firstFiles.join(", ")} and ${lastFile}`);
    }
  }

  // Si le projet est complètement valide → incrémenter let count = 0;
}
// Étape 4 : Calculer le pourcentage final
const totalProjects = track.projects.length;
const percentage = Math.round((count / totalProjects) * 100);

console.log(
  `${percentage}% of projects are correctly initialized (${count}/${totalProjects})`,
);
