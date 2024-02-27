// src/routes/api/data.js

import { getGameInformations, getQuotes, getGroupes, getPersonnages, getPersonnage, getEquipes } from '$lib/server/database_config';

export async function GET({ params }) {
  try {
    const gameInformations = await getGameInformations();
    const quotes = await getQuotes();
    const groups = await getGroupes();
    const equipes = await getEquipes();

    if (params.id) {
      // Si un ID est fourni dans les paramètres, récupérez les informations du personnage spécifique
      const personnage = await getPersonnage(params.id);
      console.log(personnage);
      return Response.json({
        personnage
      });
    } else {
      // Sinon, retournez toutes les informations
      const personnages = await getPersonnages();
      return Response.json({
        gameInformations,
        quotes,
        groups,
        personnages,
        equipes
      });
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {
        error: 'Internal Server Error'
      }
    };
  }
}
