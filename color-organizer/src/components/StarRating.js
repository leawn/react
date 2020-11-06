import React, { useState } from 'react';
import { Star, createArray } from './starRatingFunc';

export default function StarRating( { style = {}, totalStars = 5, selectedStars = 0, onRate = f => f} ) {
    //const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{ padding: '5px', ...style}}>
            {createArray(totalStars).map((n, i) => (
                <Star key={i}
                      selected={selectedStars > i}
                      onSelect={() => onRate(i+1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}