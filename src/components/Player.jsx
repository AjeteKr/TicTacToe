import { useState } from "react";

export default function Player({name, symbol}) {
    const [ isEdititng, setIsEditing ] = useState(false);

    function HandleEditClick (){
        setIsEditing(true);
    }

    let playerName =<span className="player-name">{name}</span>;

    if (isEdititng) {
        playerName = <input type="text" required />
    }

    return(
        <li>
        <span className="player">
            {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>Edit</button>
      </li>

    );

}