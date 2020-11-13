import React, { useState, useEffect } from 'react';

function Checkbox() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        txtInputRef.current.focus();
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