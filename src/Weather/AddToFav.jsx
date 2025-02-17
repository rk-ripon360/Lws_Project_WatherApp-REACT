import { useContext, useEffect, useState } from "react";

import RedHeartIcon from "../assets/heart-red.svg";
import HeartIcon from "../assets/heart.svg";
import { FavouriteContext } from "../contexts/FavoriteContext";
import { WeatherContext } from "../contexts/WeatherContext";

const AddToFav = () => {
    const { addToFavourites, removeFromFavourites, favourites } =
        useContext(FavouriteContext);

    const { weatherData } = useContext(WeatherContext);

    const [isFavourite, setFavourite] = useState(true);

    const { latitude, longitude, location } = weatherData;

    useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        setFavourite(found);
    }, [favourites, location]);

    function handleFavourites() {
        const found = favourites.find((fav) => fav.location === location);

        if (!found) {
            addToFavourites(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
        setFavourite(!isFavourite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="z-20 bg-blue-500 text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                    onClick={handleFavourites}
                >
                    <span>Add to Favourite</span>
                    <img
                        src={isFavourite ? RedHeartIcon : HeartIcon}
                        alt="heart"
                    />
                </button>
            </div>
        </div>
    );
};
export default AddToFav;
