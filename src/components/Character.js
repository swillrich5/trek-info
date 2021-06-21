import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    }

    return (


        <div className="container space-background">
            <div className="jumbotron">
                <h4>Character Name: {character.name}</h4>
                <div>
                    <table>
                        
                    </table>
                </div>
        </div>
    </div>
    )
}

export default Character;