import { useState } from "react";
import { assetsData } from "../data/assetsData";
import FavModal from "./FavModal";
import Search from "./Search";
const Header = () => {
    const [showFavModal, setShowFavModal] = useState(false);
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <a href="./index.html">
                    <img
                        className="h-9"
                        src={assetsData.LogoImage}
                        alt="Weather App"
                    />
                </a>

                <div className="flex items-center gap-4 relative">
                    <Search />

                    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
                        <img src={assetsData.Heart} alt="love" />
                        <span onClick={() => setShowFavModal(!showFavModal)}>
                            Favourite Locations
                        </span>
                    </div>
                    {showFavModal && <FavModal />}
                </div>
            </nav>
        </header>
    );
};
export default Header;
