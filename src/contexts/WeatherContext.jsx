import { createContext } from "react";
import useWeather from "../hooks/useWeather";

export const WeatherContext = createContext(null);

const Weather_Provider = ({ children }) => {
    const { weatherData, error, loading } = useWeather();

    return (
        <WeatherContext.Provider value={{ weatherData, error, loading }}>
            {children}
        </WeatherContext.Provider>
    );
};
export default Weather_Provider;
