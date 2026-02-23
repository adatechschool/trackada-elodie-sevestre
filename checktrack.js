// Affichage dans terminal

// commande : node nomFichier.ext

console.log("hello elo y a de l'echo"); // le terminal affiche bien le message -> OK !

// Le script (checktrack.js) doit : Fichier JSON  →  Script Node.js  →  Vérifications  →  Messages dans le terminal

// Etape 1 : Lire un fichier JSON
// utiliser des fonctions disponibles de Node.js (PAS de framework)
// - fonctions à utiliser : via des modules de Node.js
// -- readFileSync et existSync du module fs
// --- module fs : manipuler le système de fichiers
// -- join du module path
// --- module path : manipuler des chemins de fichiers
// -- homedir du module os
// --- module os : en savoir plus sur les capacités de l'ordinateur

import { readFileSync, existsSync } from "fs";
const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data);
console.log(track);

// Etape 2 : Vérifier les dossiers

import { join } from "path";
const 

import { homedir } from "os";
// Etape 3 : Vérifier les fichiers
// Etape 4 : Vérifier que Git est activé
// Etape 5 : Afficher des messages clairs dans le terminal
