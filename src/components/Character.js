import React from 'react';

const Character = ({match}) => {
    console.log(match.params.uid);
    return (


        <div className="container space-background">
            <div className="jumbotron">
                <div>
                    {match.params.uid}
                </div>
        </div>
    </div>
    )
}

export default Character;