import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState (initialName);
    const [ isEdititng, setIsEditing ] = useState(false);

    function HandleEditClick (){
        setIsEditing((editing) => !editing);
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
        <li>
        <span className="player">
            {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{isEdititng ? 'Save' : 'Edit'}</button>
      </li>

    );

}