import React from 'react';
import './Avatar.css';


const Avatar: React.FC<{ name: string }>  = ({name}) => {
    const initials = name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase();

    return (
        <div className="avatar">
            <span>{initials}</span>
        </div>
    );
};

export default Avatar;
