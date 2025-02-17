import AddToFav from "./AddToFav";
import Condition_W from "./Condition_W";
import Headline_W from "./Headline_W";

const Weather_Board = () => {
    return (
        <div className="container ">
            <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-6 z-40">
                    <AddToFav />
                    <Headline_W />
                    <Condition_W />
                </div>
            </div>
        </div>
    );
};
export default Weather_Board;
