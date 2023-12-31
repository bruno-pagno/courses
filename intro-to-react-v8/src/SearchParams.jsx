import { useState, useContext } from "react";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
import AdoptedPetContext from "./AdoptedPetContext";
import Results from "./Results";
import fetchSeach from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);
    const [adoptedPet] = useContext(AdoptedPetContext);

    const results = useQuery(["search", requestParams], fetchSeach);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? [],
                        breed: formData.get("breed") ?? [],
                        location: formData.get("location") ?? [],
                    };
                    setRequestParams(obj);
                }}
            >
                {adoptedPet && (
                    <div className="pet image-container">
                        <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                    </div>
                )}
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        name="location"
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                        // onBlur={} acessibily error handling
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        name="breed"
                        disabled={breeds.length === 0}
                    >
                        <option />
                        {breeds.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
