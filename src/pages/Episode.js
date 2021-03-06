import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import './Episode.css';

const Episode = ( { match } ) => {

    console.log(match.params.uid);

    const [episode, setEpisode] = useState();

    useEffect(() => {
        const getEpisodeDetail = async () => {
            try {
                const res = await axios.get("http://stapi.co/api/v1/rest/episode?uid=" + match.params.uid);
                console.log(res.data.episode);
                setEpisode(res.data.episode);
            }
            catch(err) {
                console.log(err);
            }
        }
        getEpisodeDetail();
    }, [match.params.uid]);

    if (episode) {
        return (
            <div className="container space-background">
                <div className="jumbotron">
                    <h4>Episode: {episode.title}</h4>
                    <div className="pl-3 ml-3 justify-content-center">
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>Series: {episode.series.title}</p>
                            <p className='col-lg-5 col-md-12'>Episode No.: {episode.episodeNumber}</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>Production Company: {episode.series.productionCompany.name}</p>
                            <p className='col-5'>Original Broadcaster: {episode.series.originalBroadcaster.name}</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>Season: {episode.season.seasonNumber}</p>
                            <p className='col-lg-5 col-md-12'>Original Air Date: {episode.usAirDate}</p>
                        </div>
                        <div className="row justify-content-start">
                            <p className='col-lg-5 col-md-12'>German Title: {episode.titleGerman}</p>
                            <p className='col-lg-5 col-md-12'>Japanese Title: {episode.titleJapanese}</p>
                        </div>
                    </div>
                    {( episode.teleplayAuthors.length > 0) &&
                        (<div>
                            <h4 className="mt-3">Teleplay Written By</h4>
                            <div className="row justify-content-around">
                                {episode.teleplayAuthors.map(author =>
                                    <div key={author.uid} className="card col-lg-3 col-md-12 mx-1 mb-1 px-0" >
                                        <div className="card-body py-2 px-0">
                                            {/* <Link to={`/episode/${episode.uid}`}><h5 className="card-title px-1">{episode.title}</h5></Link> */}
                                            <h5 className="card-title px-1">{author.name}</h5>
                                        </div>
                                    </div>                                    
                                )}
                            </div>
                        </div>)
                    }
                    {( episode.storyAuthors.length > 0) &&
                        (<div>
                            <h4 className="mt-3">Story Authors</h4>
                            <div className="row justify-content-around">
                                {episode.storyAuthors.map(author =>
                                    <div key={author.uid} className="card col-3 mx-1 mb-1 px-0" >
                                        <div className="card-body py-2 px-0">
                                            {/* <Link to={`/episode/${episode.uid}`}><h5 className="card-title px-1">{episode.title}</h5></Link> */}
                                            <h5 className="card-title px-1">{author.name}</h5>
                                        </div>
                                    </div>                                    
                                )}
                            </div>
                        </div>)
                    }
                    {( episode.directors.length > 0) &&
                        (<div>
                            <h4 className="mt-3">Directed By</h4>
                            <div className="row justify-content-around">
                                {episode.directors.map(director =>
                                    <div key={director.uid} className="card col-3 mx-1 mb-1 px-0" >
                                        <div className="card-body py-2 px-0">
                                            {/* <Link to={`/episode/${episode.uid}`}><h5 className="card-title px-1">{episode.title}</h5></Link> */}
                                            <h5 className="card-title px-1">{director.name}</h5>
                                        </div>
                                    </div>                                    
                                )}
                            </div>
                        </div>)
                    }
                    {( episode.performers.length > 0) &&
                        (<div>
                            <h4 className="mt-3">Performers</h4>
                            <div className="row justify-content-around">
                                {episode.performers.map(performer =>
                                    <div key={performer.uid} className="card col-3 mx-1 mb-1 px-0" >
                                        <div className="card-body py-2 px-0">
                                            {/* <Link to={`/episode/${episode.uid}`}><h5 className="card-title px-1">{episode.title}</h5></Link> */}
                                            <h5 className="card-title px-1">{performer.name}</h5>
                                        </div>
                                    </div>                                    
                                )}
                            </div>
                        </div>)
                    }
                    {( episode.characters.length > 0) &&
                        (<div>
                            <h4 className="mt-3">Characters</h4>
                            <div className="row justify-content-around">
                                {episode.characters.map(character =>
                                    <div key={character.uid} className="card col-3 mx-1 mb-1 px-0" >
                                        <div className="card-body py-2 px-0">
                                            {/* <Link to={`/episode/${episode.uid}`}><h5 className="card-title px-1">{episode.title}</h5></Link> */}
                                            <h5 className="card-title px-1">{character.name}</h5>
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
        return (<Spinner />);
    }

}

export default Episode;