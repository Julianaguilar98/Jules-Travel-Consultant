import React from 'react';

import useStyles from './styles.js';

const PlaceDetails = ({ place }) => {
    return(
        <h1>{place.name}</h1>
    );
};

export default PlaceDetails;