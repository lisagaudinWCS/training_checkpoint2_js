import { Link } from 'react-router-dom';
import '../components/game.css';

function Game ({value}) {
    return (
        <div>
            <Link to={`/games/${value.id}`}>
                <div className="game-container">
                    <h3 className='game-name'>{value.name}</h3>
                    <h4 className='game-date'>Released in {value.released}</h4>
                    <h5 className='game-rating'>Note : {value.rating}</h5>
                    <img className='game-img' src={value.background_image} alt={value.name} height={150}/>
                </div>
            </Link>
        </div>
    );
}

export default Game;