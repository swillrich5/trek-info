import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Character.css';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const Character = ( { match } ) => {
    console.log(match.params.uid);

    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState();

    useEffect(() => {
        console.log("In useEffect");
        getCharacterDetail();
    }, []);

    const getCharacterDetail = async () => {
        try {
            setLoading(true);
            console.log("loading = " + loading);
            const res = await axios.get("http://stapi.co/api/v1/rest/character?uid=" + match.params.uid);
            console.log(res.data.character);
            setLoading(false);
            setCharacter(res.data.character);
            console.log(res.data.character.characterSpecies.length);
            console.log("Number of episodes = " + res.data.character.episodes.length);
        }
        catch(err) {
            console.log(err);
        }
    }

    if (character) {
        return (
            <div className="container space-background">
                <div className="jumbotron">
                    <h4>Character Name: {character.name}</h4>
                    <div className="pl-5 ml-5 justify-content-center">
                        <div className="row justify-content-start">
                            <p className='col-5'>Species: {character.serialNumber ? (character.serialNumber) : (<span>N/A</span>) }</p>
                            <p className='col-5'>Gender: {character.gender}</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-5'>Year of Birth: {character.yearOfBirth ? (character.yearOfBirth) : (<span>unknown</span>) }</p>
                            <p className='col-5'>Year of Death: {character.yearOfDeath ? (character.yearOfDeath) : (<span>unknown</span>) }</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-5'>Blood Type: {character.bloodType ? (character.bloodType) : (<span>unknown</span>) }</p>
                            <p className='col-5'>Put Something Here</p>
                        </div>
                        {(character.characterSpecies.length > 0) && 
                            (<div className="row justify-content-start">
                                <p className='col-5'>Species: 
                                    {character.characterSpecies.map(species => 
                                        <span key={species.uid}> {' '} {species.name} {' '} </span> )}
                                </p>
                        </div>)}
                    </div>

                    {( character.episodes.length > 0) &&
                        (<div>
                            <h4>Episodes</h4>
                            <div className="row justify-content-around">
                                {character.episodes.map(episode =>
                                    
                                    <div className="card col-4 mx-1 mb-1">
                                        <div className="card-body">
                                            <h5 className="card-title">{episode.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{episode.series.title}</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>                                    
                                    
                                )}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    } else {
        return <Spinner />;        
    }


}

export default Character;