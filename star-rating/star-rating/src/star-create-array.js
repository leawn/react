import React from 'react';
import { FaStar } from 'react-icons/fa';

export const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

export const createArray = length => [...Array(length)];

//export function StarRating({ totalStars = 5 }) {
//return createArray(totalStars).map((n, i) => <Star key={i} />);
//}