import React, { useEffect } from 'react';
import './css/TypingAnimation.css'

function TypingAnimation() {
    let url = "/animation.js"

    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);

    return (
        <div>
            {'\u00A0'}
            <div id="typewriter">
                <span class="var-highlight">var</span> <span class="property-highlight">mattdag</span> <span class="equals-highlight">=</span> {'{'}
                <br></br><span class="property-highlight">⠀⠀⠀⠀name</span>: <span class="string-highlight">"Matthew D'Agostino"</span>,
                <br></br><span class="property-highlight">⠀⠀⠀⠀type</span>: <span class="string-highlight">"CS Student"</span>,
                <br></br><span class="property-highlight">⠀⠀⠀⠀location</span>: <span class="string-highlight">"Brisbane Australia"</span>,
                <br></br><span class="property-highlight">⠀⠀⠀⠀skills</span>:[<span class="string-highlight">"Full Stack Dev"</span>,
                <br></br><span class="string-highlight">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"Teamwork"</span>,
                <br></br><span class="string-highlight">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"Communication"</span>];
            <br></br><span>{'}'};</span></div>
        </div>
    );
}

export default TypingAnimation;