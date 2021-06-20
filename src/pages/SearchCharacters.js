import React, { useState } from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import SearchCharacterResults from '../components/SearchCharacterResults';
import './SearchCharacters.css';




const SearchCharacters = () => {

    const [loading, setLoading] = useState(false);
    const [characterName, setCharacterName] = useState("");
    const [characters, setCharacters] = useState([]);

    const searchCharacters = async (e) => {

        e.preventDefault();
        setLoading(true);
        console.log(characterName);
        const res = await axios.post("http://stapi.co/api/v1/rest/character/search?name=" + characterName)
        console.log(res.data.characters);
        setLoading(false);
        setCharacters(res.data.characters);

    }

    const characterNameChangeHandler = (e) => {
        setCharacterName(e.target.value);
        console.log(e.target.value);
    }

    // if (loading) {
    //     return <Spinner />
    // }

    return (
        <div className="container space-background">
            <div className="jumbotron">
                <div className="row justify-content-center">
                    <form id="search-form" className="col-6">  
                        <h2>Search Star Trek Characters</h2>
                        <div className="form-group form-inline row ml-5">
                            <label htmlFor="character-name" className="space-right">Character Name: </label>
                            <input type="text" name={characterName} value={characterName} onChange={characterNameChangeHandler} className="form-control" id="character-name" />
                        </div>
                        <div className="row ml-5" >
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="alternate-reality" />
                                <label className="form-check-label space-right" htmlFor="alternate-reality">
                                    Include Alternate Reality (ex. Kelvin Universe)
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="mirror-universe" />
                                <label className="form-check-label" htmlFor="mirror-universe">
                                    Include Mirror Universe
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary mt-4 mb-4" onClick={searchCharacters}>Submit</button>
                        </div>
                    </form>
                </div>
                <SearchCharacterResults characters={characters} />
            </div>
        </div>
    )
}

export default SearchCharacters;
