import React from 'react';

export const Trip = ({date,number, place, type}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {number}
        </td>
        <td>
            {place}
        </td>
        <td>
            {type}
        </td>
    </tr>	
)