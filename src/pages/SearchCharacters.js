import React, { useState } from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import SearchCharacterResults from '../components/SearchCharacterResults';
import './SearchCharacters.css';




const SearchCharacters = () => {

    const [characterName, setCharacterName] = useState("");
    const [characters, setCharacters] = useState([]);

    const searchCharacters = async (e) => {

        e.preventDefault();
        console.log(characterName);
        const res = await axios.post("http://stapi.co/api/v1/rest/character/search?name=" + characterName)
        console.log(res.data.characters);
        setCharacters(res.data.characters);

    }

    const characterNameChangeHandler = (e) => {
        setCharacterName(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="container space-background">
            <div className="jumbotron">
                <div className="row justify-content-center">
                    <form id="search-form" className="col-lg-6 col-md-12">  
                        <h2>Search Star Trek Characters</h2>
                        <div className="form-group form-inline row ml-5">
                            <label htmlFor="character-name" className="space-right">Character Name: </label>
                            <input type="text" name={characterName} value={characterName} onChange={characterNameChangeHandler} className="form-control" id="character-name" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary mt-4 mb-4" onClick={searchCharacters}>Submit</button>
                        </div>
                    </form>
                </div>
                {({characters}) ? (<SearchCharacterResults characters={characters} />) : <Spinner />}
            </div>
        </div>
    )
}

export default SearchCharacters;
