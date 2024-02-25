// database_config.js
import Database from 'better-sqlite3';

const db = new Database('./src/lib/server/FETH_DB.db');

export const getGameInformations = () => {
    const stmt = db.prepare('SELECT * FROM GAME_INFO');
    return stmt.all();
}

// get all quotes
export const getQuotes = () => {
    const stmt = db.prepare('SELECT * FROM QUOTES');
    return stmt.all();
}

// get all factions
export const getGroupes = () => {
    const stmt = db.prepare('SELECT * FROM GROUPE');
    return stmt.all();
}

// get all personnages
export const getPersonnages = () => {
    const stmt = db.prepare('SELECT * FROM PERSO');
    return stmt.all();
}

// get a specific character
export const getPersonnage = (id) => {
    const stmt = db.prepare('SELECT * FROM PERSO WHERE IDPERSONNAGE = ?');
    return stmt.get(id);
}
export default db;
