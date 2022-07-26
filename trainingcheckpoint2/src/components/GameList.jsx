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
       
        useEffect(() => getGames(), [games])

// https://apis.wilders.dev/wild-games

    return (
        <div className="GameList">
            <h2>GameList</h2>

            {games && 
          games
          .map((element, index) => (
            <Game 
            key={index}
            name={element.name}
            rating={element.rating}
            date={element.released}
            image={element.background_image}
            />)
            )
          }

        </div>
    )
}

export default GameList;