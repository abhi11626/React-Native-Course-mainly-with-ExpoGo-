import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);

  function addFavourite(id) {
    setFavouriteIds((currFavIds) => [...currFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteIds((currFavIds) => currFavIds.filter((favId) => favId !== id));
  }

  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
