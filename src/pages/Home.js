import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import spock from '../images/spock.jpeg';

const Home = () => {

    return (
        <div className="container space-background">
            <div className="jumbotron">
                <h2>Welcome to Trek-Info</h2>
                <h2>Learning More about the STAPI - The Star Trek API</h2>
                <p className="lead">This is my attempt at exploiting Cezary Kluczyński's STAPI (Star Trek API) to learn more about the API and APIs in general.  I'm also hopeful that this will help others to learn more about Star Trek and how STAPI works.
                    I'll add more API queries over time.  This is a work in progress that I plan to continue to add to over time.  However, it's far enough along to be useful.  I hope this is helpful 
                    and maybe a little fun!
                </p>
                <p className="lead mt-3">Special thanks to Cezary Kluczyński for putting together this very extensive API and allow me and others to use it.  Information on STAPI can 
                    be found <a className="text-primary" href="http://stapi.co/">here</a>.  The GitHub repo can be found <a className="text-primary" href="https://github.com/cezarykluczynski/stapi">here</a>.
                </p>
                <p className="lead mt-3 mb-5">My code repo for this app can be found in my <a  className="text-primary" href="https://github.com/swillrich5/trek-info">GitHub</a>.  Also, here's a link to my <a className="text-primary" href="https://www.scottwillrich.com/">portfolio site</a>.
                </p>
                <Link className="row justify-content-center" to='/characters'>
                    <div className="card col-md-12 col-lg-3 justify-content-center shadow-lg bg-light rounded">
                        <img className="card-img-top mx-auto pt-3" src={spock} alt="Spock"/>
                        <div className="card-body">
                            <p className="card-text text-center">Characters</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>


    )

}

export default Home;