import '../components/game.css'
function Game ({name, image, rating, date}) {

    return (
        <div className="game-container">
            <h3 className='game-name'>{name}</h3>
            <h4 className='game-date'>Released in {date}</h4>
            <h5 className='game-rating'>Note : {rating}</h5>
            <img className='game-img' src={image} alt={name} height={150}/>
        </div>
    )
}

export default Game;