import React from 'react';

const SearchCharacterResults = (props) => {

    console.log(props.characters);

    return (
        <div className="row">
            {props.characters.map(character =>
                <div key={character.uid} className='col-3 justify-content-around'>
                    <p>{character.name}</p>
                </div>

            )}

        </div>
    );

}

export default SearchCharacterResults;