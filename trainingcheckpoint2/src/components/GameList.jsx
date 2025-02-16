import React, {useState, useEffect} from "react";
import axios from "axios";
import Game from "./Game";



// 1/ useState que tu initialises avec un booléen pour pouvoir changer l'état par la suite
// 2/creer une fonction qui va inverser le useState
// 3/ un bouton qui lorsque onClick appelle la fonction ci-dessus
// 3/.filter ( renvoi le tableau filtré  - donc soit tous les éléments soit > 4.5)
// 4/.map pour afficher le resultat


    const GameList = () => {
       
        const [games, setGames] = useState("");
        const [filtered, setFiltered] = useState(false);

        
        useEffect(() => {
            axios
            .get('https://apis.wilders.dev/wild-games/games/')
                // Lancer l'appel à l'API
            .then(response => response.data)
                // Extraire la data reçue de l'API
            .then(data => setGames(data))
                }, []);
        
        const handleSwitch = () => {
            setFiltered(!filtered);
        };
                
    
    return (
        <div className="GameList">
            <h2>GameList</h2>
            <button onClick={handleSwitch}>{filtered ? "All Games" : "Top Game"}</button>

            {games && games
            .filter(value => !filtered || value.rating > 4.5)

            .map(value => (
                <Game 
                key={value.id}
                value={value} />
                ))
            }
        </div>
    );
}

export default GameList;