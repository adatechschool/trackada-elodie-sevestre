# Trackada

## 📌 Objectif

`Trackada` est un outil en ligne de commande développé avec Node.js pour vérifier l'organisation des projets Ada.  
Il permet de s'assurer que :

- Le dossier `ada` existe dans le répertoire home.
- Les projets sont présents, correctement nommés et initialisés en tant que repository git.
- Tous les fichiers requis par projet sont bien présents.

## ⚙️ Installation et utilisation

1. Cloner le repository :

```bash
git clone <url_du_repo>
cd trackada-[nom_github]
```

2. Vérifier la structure des projets en exécutant le script :

```bash
node checktrack.js
```

## 🧰 Fonctionnement

- Le script charge le fichier `track.json`.
- Il parcourt chaque projet et vérifie :
  1. L’existence et le nom correct du dossier.
  2. L’initialisation du repository git.
  3. La présence des fichiers requis.
- L’affichage indique pour chaque projet :
  - ✅ si tout est correct
  - ❌ si des erreurs sont détectées, suivies des messages d’erreur détaillés

Exemple de sortie :

```bash
✅ dossier ada

✅ dossier du projet adapage

❌ dossier du projet trackada
- le repository git n'est pas initialisé
```

- Le script calcule également le pourcentage de projets correctement initialisés.

## 🛠 Pré-requis

- Node.js installé
- Connaissances de base en JavaScript et terminal
