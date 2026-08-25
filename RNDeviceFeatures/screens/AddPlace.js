import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    console.log("PLACE RECEIVED:", place);
    await insertPlace(place);
    console.log("PLACE INSERTED");
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
