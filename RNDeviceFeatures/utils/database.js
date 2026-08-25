import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync("places.db");

export function init() {
  database.execSync(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    );
  `);

  console.log("DATABASE INITIALIZED");
}

export function insertPlace(place) {
  console.log("INSERTING PLACE:", place);

  const result = database.runSync(
    `INSERT INTO places (title, imageUri, address, lat, lng)
     VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ],
  );

  console.log("INSERT RESULT:", result);
  console.log("PLACE INSERTED SUCCESSFULLY");
}

export function fetchPlaces() {
  const places = database.getAllSync(`SELECT * FROM places`);

  console.log("DATABASE PLACES:", places);

  return places;
}

export function fetchPlaceDetails(id) {
  const place = database.getFirstSync(`SELECT * FROM places WHERE id = ?`, [
    id,
  ]);

  console.log("PLACE DETAILS:", place);

  return place;
}
