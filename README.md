# Projet Svelte - Semestre 6 - 2024
L'objectif de ce projet est de créer une application web en utilisant le framework Svelte, avec des composants réutilisables et une gestion de l'état de l'application.

## Description

Ce projet est une application web qui permet de présenter un sujet quelconque (Principalement en rapport avec les jeux vidéos ou les séries). L'application est composée de 3 pages :

- Une page d'accueil qui présente le sujet

- Une page avec la description des personnages

- Une page avec la présentation de l'équipe de développement

## Fonctionnalités

- L'application fonctionne avec une base de données SQLITE. Celle-ci (`src/lib/server/FETH_DB.db`) est déjà remplie avec des données sur un jeu favori: Fire Emblem Three Houses. Toutes les données dans la base de données et le dossier `static` sont modifiables.


- La base de donnée communique avec l'application via une API REST. Celle-ci est déjà implémentée (`src/routes/api/+server.js`) et fonctionnelle, mais la modification de celle-ci pour gérer la réception et l'envoi de données est possible.



## Installation

Veuillez avoir Node.js installé sur votre machine. Pour installer les dépendances, exécutez la commande suivante dans le terminal :

```bash
npm install
```

## Utilisation

Pour lancer l'application en mode développement, exécutez la commande suivante dans le terminal :

```bash
npm run dev
```
L'application sera accessible à l'adresse suivante : `http://localhost:5173`, si le port n'est pas déjà utilisé sinon il sera indiqué dans le terminal.

## Modules utilisés

- [Svelte](https://svelte.dev/)

- [SvelteKit](https://kit.svelte.dev/)

- [Svelte Material UI](https://sveltematerialui.com/)

- [Svelte Store](https://svelte.dev/tutorial/writable-stores)

- [Svelte Routing](https://kit.svelte.dev/docs#routing)

SMUI est une bibliothèque de composants Svelte basée sur Material Design. Elle est utilisée pour la création de l'interface utilisateur. Celles utilisées dans ce projet sont les suivantes :


- [SMUI](https://sveltematerialui.com/)

- [TopAppBar](https://sveltematerialui.com/components/top-app-bar)

- [IconButton](https://sveltematerialui.com/components/icon-button)

- [Card](https://sveltematerialui.com/components/card)

- [LayoutGrid](https://sveltematerialui.com/components/layout-grid)

- [List](https://sveltematerialui.com/components/list)

- Store (Pour la gestion dynamique de l'état de l'application)

## Auteurs
- Théo Viard

- Les images et descriptions ont été prises sur le site officiel de [Millenium](https://www.millenium.org/games/game-295)

## Status
Je peux continuer son développement pour ajouter des fonctionnalités supplémentaires à l'avenir.

