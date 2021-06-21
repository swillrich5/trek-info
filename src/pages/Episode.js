import React, { useState, useEffect } from 'react';

const Episode = ( { match } ) => {
    return (
    <div>
        {match.params.uid}
    </div>
    );
}

export default Episode;