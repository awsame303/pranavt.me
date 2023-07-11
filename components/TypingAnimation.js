import React from 'react';
import Typed from 'react-typed';

// TODO finish main page
const TypingAnimation = () => {
    const options = {
        strings: ['Java', 'React', 'Python'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
    };

    return (
        <div id="name" className="font-extrabold animate-fade-in-2">
            <Typed {...options} /> <br /> developer
        </div>
    );
};

export default TypingAnimation;
