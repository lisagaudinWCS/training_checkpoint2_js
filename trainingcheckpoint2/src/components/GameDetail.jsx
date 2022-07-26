import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';

function GameDetail() {
    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(value => setDetail(value.data))
    }, []);

return (

    <div>
        {
            detail && 
                <div className="game-container">
                    <h3 className='game-name'>{detail.name}</h3>
                    <h4 className='game-date'>Released in {detail.released}</h4>
                    <h5 className='game-rating'>Note : {detail.rating}</h5>
                    <img className='game-img' src={detail.background_image} alt={detail.name} height={150}/>
                </div>
        }
    </div>
);
}

export default GameDetail;