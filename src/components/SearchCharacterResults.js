import React from 'react';
import { Link } from 'react-router-dom';

const SearchCharacterResults = (props) => {

    return (
        <div className="row">
            {props.characters.map(character =>
                <div key={character.uid} className='col-4 justify-content-around'>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            {(!character.gender) ? ( <h6 className="card-subtitle mb-2 text-muted">Gender: Unknown</h6> )  : ( <h6 className="card-subtitle mb-2 text-muted">Sex: {character.gender}</h6> ) }
                            {(!character.yearOfBirth) ? ( <h6 className="card-subtitle mb-2 text-muted">Year of Birth: Unknown</h6> )  : ( <h6 className="card-subtitle mb-2 text-muted">Year of Birth: {character.yearOfBirth}</h6> ) }
                            {(!character.yearOfDeath) ? ( <h6 className="card-subtitle mb-2 text-muted">Year of Death: Unknown</h6> )  : ( <h6 className="card-subtitle mb-2 text-muted">Year of Birth: {character.yearOfDeath}</h6> ) }
                            { character.alternateReality ? (<h6 className="card-subtitle mb-2 text-muted">Alternate Reality: True</h6>) : (<h6 className="card-subtitle mb-2 text-muted">Alternate Reality: False</h6> ) }
                            <Link to={`/character/${character.uid}`} className='btn btn-dark btn-sm my-1'>More</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchCharacterResults;