import React, { useContext } from 'react';
import { useColors } from "../color-hooks";
import Color from './Color';

export default function ColorList(/*{
                                      onRemoveColor = f => f,
                                      onRateColor = f => f }*/) {
    const { colors } = useColors();
    if(!colors.length) return <div>No colors Listed. (Add a color)</div>;
    return (
        <div className='color-list'>
            {
                colors.map(color => <Color key={color.id}
                                           {...color}
                                           /*onRemove={onRemoveColor}
                                           onRate={onRateColor}*/
                />)
            }
        </div>
    );
}