import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const FavouriteContext = createContext(null);

const Favourite_Cont_Provider = ({ children }) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);

    const addToFavourites = (latitude, longitude, location) => {
        setFavourites([
            ...favourites,
            {
                latitude: latitude,
                longitude: longitude,
                location: location,
            },
        ]);
    };

    const removeFromFavourites = (location) => {
        const restFavourites = favourites.filter(
            (fav) => fav.location !== location
        );
        setFavourites(restFavourites);
    };
    return (
        <FavouriteContext.Provider
            value={{
                favourites,
                setFavourites,
                addToFavourites,
                removeFromFavourites,
            }}
        >
            {children}
        </FavouriteContext.Provider>
    );
};
export default Favourite_Cont_Provider;
