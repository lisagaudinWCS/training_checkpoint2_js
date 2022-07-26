import React, {useState, useEffect} from "react";
import axios from "axios";
import Game from "./Game";

    const GameList = () => {
       
        const getGames = () => {
            axios
                .get(`https://apis.wilders.dev/wild-games/games`)
                // Lancer l'appel à l'API
                .then((response) => response.data)
                // Extraire la data reçue de l'API
                .then((data) => {
                    setGames(data);
                });
                // Transmettre cette data pour mettre à jour le state
        };
    
        const [games, setGames] = useState("")
        // Créer un state pour stocker les données reçues de l'API
       
        // useEffect(() => getGames(), [])

// https://apis.wilders.dev/wild-games

    return (
        <div>
            <h2>Test Games</h2>
            <Game games={games} />
        </div>
    )
}

export default GameList;