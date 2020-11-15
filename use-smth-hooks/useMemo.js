import React, { useEffect, useMemo } from 'react';

const words = useMemo(() => {
    const words = children.split(' ');
    return words;
}, []);

useEffect(() => {
    console.log('fresh render-props');
}, [words]);