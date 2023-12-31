import Pet from "./Pet";

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No pets found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        id={pet.id}
                        key={pet.id}
                        animal={pet.animal}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        name={pet.name}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
