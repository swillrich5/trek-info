import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div className="container space-background">
            <div className="jumbotron">
                <h2>Welcome to Trek-Info</h2>
                <h2>Learning More about the STAPI - The Star Trek API</h2>
                <h4>Created by Cezary Kluczyński</h4>
                <p>This is my attempt at exploiting STAPI to learn more about the API and APIs in general.  I'm also hopeful that this will help others to learn more about Star Trek and how STAPI works.
                    I'll add more API queries over time.  Each will display data, but all have a short explanation as to how the API works.  I hope this is helpful and maybe a little fun!
                </p>
            </div>
        </div>


    )

}

export default Home;