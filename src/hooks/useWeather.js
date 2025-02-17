import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { initial_W_Hook_data } from "../data/initialData";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState(initial_W_Hook_data);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { selectedLocation } = useContext(LocationContext);

    useEffect(() => {
        const FetchWeatherData = async (latitude, longitude) => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
                        import.meta.env.VITE_WEATHER_API_KEY
                    }&units=metric`
                );
                if (!response.ok) {
                    throw new Error(response.status);
                }
                const data = await response.json();
                const updateWeatherData = {
                    ...weatherData,
                    location: data?.name,
                    climate: data?.weather[0]?.main,
                    temperature: data?.main?.temp,
                    maxTemperature: data?.main?.temp_max,
                    minTemperature: data?.main?.temp_min,
                    humidity: data?.main?.humidity,
                    cloudPercentage: data?.clouds?.all,
                    wind: data?.wind?.speed,
                    time: data?.dt,
                    longitude: longitude,
                    latitude: latitude,
                };
                setWeatherData(updateWeatherData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (selectedLocation.latitude && selectedLocation.longitude) {
            FetchWeatherData(
                selectedLocation.latitude,
                selectedLocation.longitude
            );
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                FetchWeatherData(
                    position.coords.latitude,
                    position.coords.longitude
                );
            });
        }
    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return { weatherData, error, loading };
};

export default useWeather;
