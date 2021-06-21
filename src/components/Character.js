import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Character.css';
import { spreadElement } from '@babel/types';

const Character = ({match}) => {
    console.log(match.params.uid);

    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState({});

    useEffect(() => {
        getCharacterDetail(match.params.uid);
    }, []);

    const getCharacterDetail = async (id) => {
        setLoading(true);
        const res = await axios.get("http://stapi.co/api/v1/rest/character?uid=" + id)
        console.log(res.data.character);
        setLoading(false);
        setCharacter(res.data.character);
        console.log(res.data.character.characterSpecies.length);
    }

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
                        <p className='col-5'>Year of Death: {character.yearOfDeath ? (character.yearOfDeath) : (<span>unknown</span>) }</p>
                    </div>
                    {(character.characterSpecies.length > 0) && 
                        (<div className="row justify-content-start">
                            <p className='col-5'>Species: 
                                {character.characterSpecies.map(species => 
                                    <span> {' '} {species.name} {' '} </span> )}
                            </p>
                        </div>)}
                    </div>
                </div>
            </div>
    )
}

export default Character;