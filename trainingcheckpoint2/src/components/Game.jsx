function Game ({games}) {

    return (
        games &&
        <div>
            <ul>
                <li>Name : {games.name}</li>
            </ul>
        </div>
    )
}

export default Game;