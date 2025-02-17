import Favourite_Cont_Provider from "./contexts/FavoriteContext";
import Location_Cont_Provider from "./contexts/LocationContext";
import Weather_Provider from "./contexts/WeatherContext";
import Weather from "./pages/Weather";

function App() {
    return (
        <>
            <Location_Cont_Provider>
                <Weather_Provider>
                    <Favourite_Cont_Provider>
                        <Weather />
                    </Favourite_Cont_Provider>
                </Weather_Provider>
            </Location_Cont_Provider>
        </>
    );
}

export default App;
