// Importez le package dotenv et chargez les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Récupérez les valeurs des variables d'environnement
const { MY_NAME, MY_CITY, MY_LANGUAGE } = process.env;

// Affichez le message avec les valeurs récupérées
console.log(`I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}.`);
