import { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    const adoptedPet = useState(null);
    return (
        <div>
            {/* Uses Contexts under the hood */}
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    {/* Custom provider / context */}
                    <AdoptedPetContext.Provider value={adoptedPet}>
                        <header>
                            <Link to="/">Adopt Me!</Link>
                        </header>
                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </AdoptedPetContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
