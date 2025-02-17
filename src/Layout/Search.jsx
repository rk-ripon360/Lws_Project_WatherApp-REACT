import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

import SearchIcon from "../assets/search.svg";
import { getLocationByName } from "../data/location-data";
import useDebounce from "../hooks/useDebounce";
const Search = () => {
    const { setSelectedLocation } = useContext(LocationContext);

    const debounceSearch = useDebounce((query) => {
        const fetchedLocation = getLocationByName(query);
        setSelectedLocation({ ...fetchedLocation });
    }, 500);

    const handleChange = (e) => {
        const value = e.target.value;
        debounceSearch(value);
    };
    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                    onChange={handleChange}
                />
                <button type="submit">
                    <img src={SearchIcon} />
                </button>
            </div>
        </form>
    );
};
export default Search;
