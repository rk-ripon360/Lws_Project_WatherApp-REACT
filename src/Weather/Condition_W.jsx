import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { assetsData } from "../data/assetsData";
const Condition_W = () => {
    const { weatherData, error, loading } = useContext(WeatherContext);
    const {
        maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind,
        climate,
    } = weatherData;
    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                The climate is <u>{climate}</u>
            </p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{maxTemperature}</p>
                        <img src={assetsData.TempMaxIcon} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{minTemperature}</p>
                        <img src={assetsData.TempMinIcon} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}</p>
                        <img src={assetsData.HumidityIcon} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudPercentage}</p>
                        <img src={assetsData.CloudyIcon} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}</p>
                        <img src={assetsData.WindIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Condition_W;
