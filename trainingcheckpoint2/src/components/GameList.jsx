import { useState, useEffect, axios } from "react";
import Game from "./Game";


    const GameList = () => {
        const [games, setGames] = useState("")
        // Créer un state pour stocker les données reçues de l'API
        const getGames = () => {
            axios
                .get(`https://apis.wilders.dev/wild-games/games`)
                // Lancer l'appel à l'API
                .then((response) => response.data)
                // Extraire la data reçue de l'API
                .then((data) => {
                    setGames(data)
                });
                // Transmettre cette data pour mettre à jour le state
        }
    
        useEffect(() => getGames(), [])

// https://apis.wilders.dev/wild-games

    return (
        <div>
            {games.map((element, index) => (
                    <Game 
                    key={index}
                    name={element.title}
                    image={element.image}
                    id={element.id}
                    />))
                }
        </div>
    )
}

export default GameList;