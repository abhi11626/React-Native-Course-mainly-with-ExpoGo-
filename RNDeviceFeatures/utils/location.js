const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  console.log("MAP PREVIEW URL:", imagePreviewUrl);

  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();

  console.log("GEOCODING RESPONSE:", data);

  if (!data.results || data.results.length === 0) {
    throw new Error(`No address found. Google status: ${data.status}`);
  }

  return data.results[0].formatted_address;
}

// AIzaSyDUQb-qy7Rv0lgJ0CQdP3FMIysleIbZ2Pc
