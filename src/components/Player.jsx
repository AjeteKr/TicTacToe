import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState (initialName);
    const [ isEdititng, setIsEditing ] = useState(false);

    function HandleEditClick (){
        setIsEditing((editing) => !editing);
        if (isEdititng) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editPlayerName =<span className="player-name">{playerName}</span>;

    if (isEdititng) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return(
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{isEdititng ? 'Save' : 'Edit'}</button>
      </li>
    );
}