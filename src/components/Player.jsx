import { useState } from "react";

export default function Player({name, symbol}) {
    const [ isEdititng, setIsEditing ] = useState(false);

    function HandleEditClick (){
        setIsEditing((editing) => !editing);
    }

    let playerName =<span className="player-name">{name}</span>;
    //let btnCaption = 'Edit';

    if (isEdititng) {
        playerName = <input type="text" required value={name} />
        //btnCaption="Save";
    }

    return(
        <li>
        <span className="player">
            {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{isEdititng ? 'Save' : 'Edit'}</button>
      </li>

    );

}