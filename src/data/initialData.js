import { assetsData } from "./assetsData";

export const getFakeAPIData = {
    coord: {
        lon: 78.9629,
        lat: 20.5937,
    },
    weather: [
        {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
        },
    ],
    base: "stations",
    main: {
        temp: 24.87,
        feels_like: 24.3,
        temp_min: 24.87,
        temp_max: 24.87,
        pressure: 1012,
        humidity: 34,
        sea_level: 1012,
        grnd_level: 984,
    },
    visibility: 10000,
    wind: {
        speed: 3.02,
        deg: 333,
        gust: 3.36,
    },
    clouds: {
        all: 1,
    },
    dt: 1705671920,
    sys: {
        country: "BD",
        sunrise: 1705627372,
        sunset: 1705667155,
    },
    timezone: 19800,
    id: 1270077,
    name: "Hinganghāt",
    cod: 200,
};
export const initial_W_Hook_data = {
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
};
export const getWeatherIcon = (climate) => {
    switch (climate) {
        case "Rain":
            return assetsData.RainIcon;
        case "Clouds":
            return assetsData.CloudIcon;
        case "Clear":
            return assetsData.SunnyIcon;
        case "Snow":
            return assetsData.SnowIcon;
        case "Thunder":
            return assetsData.ThunderIcon;
        case "Fog":
            return assetsData.HazeIcon;
        case "Haze":
            return assetsData.HazeIcon;
        case "Mist":
            return assetsData.HazeIcon;

        default:
            return assetsData.SunnyIcon;
    }
};
export const getBackgroundImage = (climate) => {
    switch (climate) {
        case "Rain":
            return assetsData.RainyDayImage;
        case "Clouds":
            return assetsData.ScatterdCloudsImage;
        case "Clear":
            return assetsData.ClearSkyImage;
        case "Snow":
            return assetsData.SnowImage;
        case "Thunder":
            return assetsData.ThunderStormImage;
        case "Fog":
            return assetsData.WinterImage;
        case "Haze":
            return assetsData.FewCloudsImage;
        case "Mist":
            return assetsData.MistImage;
        default:
            return assetsData.ClearSkyImage;
    }
};
