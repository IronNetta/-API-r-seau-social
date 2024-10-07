# API Utilisateurs, Messages, et Système de Votes

Ce projet est une API conçue pour gérer l'authentification des utilisateurs, la gestion de leur profil, l'envoi de messages, ainsi qu'un système de likes/dislikes sur les messages. Il inclut également une documentation complète avec Swagger.

## Table des matières
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement du serveur](#lancement-du-serveur)
- [Documentation de l'API](#documentation-de-lapi)
- [Routes de l'API](#routes-de-lapi)
- [Contribution](#contribution)
- [Licence](#licence)

## Technologies utilisées

- Node.js
- Express.js
- Sequelize (ORM pour interagir avec MySQL)
- MySQL et MySQL2
- JWT (JSON Web Token) pour l'authentification
- Bcrypt pour le hachage de mots de passe
- Swagger pour la documentation de l'API
- Body-parser pour la gestion des données envoyées dans les requêtes HTTP

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/en/) (version 14 ou supérieure)
- [MySQL](https://www.mysql.com/)

## Installation

1. Clonez le dépôt GitHub sur votre machine locale :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
Accédez au dossier du projet :

bash
Copier le code
cd votre-repo
Installez les dépendances nécessaires :

bash
Copier le code
npm install
Configuration
Avant de lancer l'API, vous devez configurer les paramètres de la base de données.

Accédez au fichier config.json dans le répertoire config/ et modifiez les valeurs selon votre configuration MySQL locale :

json
Copier le code
{
  "development": {
    "username": "root",
    "password": "votre_mot_de_passe",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "votre_mot_de_passe",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "votre_mot_de_passe",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
Créez les bases de données correspondantes dans MySQL :

sql
Copier le code
CREATE DATABASE database_development;
CREATE DATABASE database_test;
CREATE DATABASE database_production;
Exécutez les migrations Sequelize pour configurer vos tables :

bash
Copier le code
npx sequelize-cli db:migrate
Lancement du serveur
Une fois l'installation et la configuration terminées, vous pouvez lancer le serveur en utilisant la commande suivante :

bash
Copier le code
npm start
Le serveur sera lancé sur le port 8080 par défaut. Vous pouvez y accéder à l'adresse suivante :

arduino
Copier le code
http://localhost:8080
Documentation de l'API
Une documentation complète de l'API est disponible via Swagger. Une fois le serveur lancé, vous pouvez y accéder en visitant :

bash
Copier le code
http://localhost:8080/api-docs
Cela vous permettra de voir tous les endpoints disponibles, ainsi que les paramètres et réponses attendus.

Routes de l'API
Voici un aperçu des routes disponibles dans cette API :

Authentification
POST /api/users/register/ - Inscription d'un nouvel utilisateur.
POST /api/users/login/ - Connexion d'un utilisateur existant.
Gestion de l'utilisateur
GET /api/users/me/ - Récupérer le profil de l'utilisateur authentifié.
PUT /api/users/me/ - Mettre à jour le profil de l'utilisateur authentifié.
Gestion des messages
POST /api/messages/new/ - Créer un nouveau message.
GET /api/messages/ - Lister tous les messages.
Système de likes/dislikes
POST /api/messages/:messageId/vote/like - Liker un message.
POST /api/messages/:messageId/vote/dislike - Disliker un message.
Contribution
Les contributions sont les bienvenues ! Si vous souhaitez apporter des améliorations ou corriger des bugs, suivez ces étapes :

Forkez ce dépôt.
Créez une branche pour vos modifications (git checkout -b nouvelle-fonctionnalité).
Commitez vos changements (git commit -am 'Ajout d'une nouvelle fonctionnalité').
Poussez vos changements sur votre fork (git push origin nouvelle-fonctionnalité).
Créez une Pull Request sur ce dépôt principal.
Licence
Ce projet est sous licence ISC. Voir le fichier LICENSE pour plus d’informations.
