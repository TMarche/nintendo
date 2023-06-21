import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/_Home/_Home";
import CartPage from "./components/_Cart/_Cart";
import LoginPage from "./components/_Login/_Login";
import StorePage from "./components/_Store/_Store";
import WishListPage from "./components/_WishList/_WishList";
import Navigation from "./components/generic/Navigation";
import { useState } from "react";

function App() {
    const [searchBarState, setSearchBarState] = useState<"ACTIVE" | "INACTIVE">(
        "INACTIVE"
    );

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navigation
                    searchBarState={searchBarState}
                    setSearchBarState={setSearchBarState}
                />
                {/* <div
                    className={`${
                        searchBarState === "INACTIVE" ? "hidden" : ""
                    } bg-neutral-500 opacity-30 flex-1`}
                    onClick={() => setSearchBarState("INACTIVE")}
                ></div> */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                searchBarState={searchBarState}
                                setSearchBarState={setSearchBarState}
                            />
                        }
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/wishList" element={<WishListPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
