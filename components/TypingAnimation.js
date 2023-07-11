import React from 'react';
import Typed from 'react-typed';

// TODO finish main page and keep developer on the bottom of the python java javascript rotation
const TypingAnimation = () => {
    const options = {
        strings: ['Java', 'JavaScript', 'Python'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
    };

    return (
        <div id="name" className="font-extrabold animate-fade-in-2">
            <Typed {...options} /> developer
        </div>
    );
};

export default TypingAnimation;
