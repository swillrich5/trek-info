import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Character.css';
import Spinner from './Spinner';

const Character = ( { match } ) => {
    console.log(match.params.uid);

    const [character, setCharacter] = useState();

    useEffect(() => {
        const getCharacterDetail = async () => {
            try {
                const res = await axios.get("http://stapi.co/api/v1/rest/character?uid=" + match.params.uid);
                console.log(res.data.character);
                setCharacter(res.data.character);
                console.log(res.data.character.characterSpecies.length);
                console.log("Number of episodes = " + res.data.character.episodes.length);
            }
            catch(err) {
                console.log(err);
            }
        }
        getCharacterDetail();
    }, [match.params.uid]);

    if (character) {
        return (
            <div className="container space-background">
                <div className="jumbotron">
                    <h4>Character Name: {character.name}</h4>
                    <div className="pl-5 ml-5 justify-content-center">
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>Species: {character.serialNumber ? (character.serialNumber) : (<span>N/A</span>) }</p>
                            <p className='col-lg-5 col-md-12'>Gender: {character.gender}</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>Year of Birth: {character.yearOfBirth ? (character.yearOfBirth) : (<span>unknown</span>) }</p>
                            <p className='col-lg-5 col-md-12'>Year of Death: {character.yearOfDeath ? (character.yearOfDeath) : (<span>unknown</span>) }</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>Blood Type: {character.bloodType ? (character.bloodType) : (<span>unknown</span>) }</p>
                            <p className='col-lg-5 col-md-12'>Put Something Here</p>
                        </div>
                        {(character.characterSpecies.length > 0) && 
                            (<div className="row justify-content-start">
                                <p className='col-lg-5 col-md-12'>Species: 
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
                                    <div key={episode.uid} className="card col-lg-3 col-md-12 mx-1 mb-1 px-0" >
                                        <div className="card-body py-2 px-0">
                                            <Link to={`/episode/${episode.uid}`}><h5 className="card-title px-1">{episode.title}</h5></Link>
                                            {/* <h5 className="card-title px-1">{episode.title}</h5> */}
                                            <h6 className="card-subtitle mb-2">{episode.series.title}</h6>
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