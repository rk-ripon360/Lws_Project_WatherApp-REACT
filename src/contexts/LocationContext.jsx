import { createContext, useState } from "react";
export const LocationContext = createContext(null);

const Location_Cont_Provider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0,
    });

    return (
        <LocationContext.Provider
            value={{ selectedLocation, setSelectedLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
};
export default Location_Cont_Provider;
