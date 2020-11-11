import React, { useState, useEffect } from 'react';

function Checkbox() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(`checked: ${checked.toString()}`);
    })

    return (
        <>
            <input
                type='checkbox'
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? 'checked' : 'not checked'}
        </>
    );
}