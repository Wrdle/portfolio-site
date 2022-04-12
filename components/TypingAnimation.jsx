import React, { useEffect } from "react";

// This is very "hacky" plans to eventually rewrite given time.
function TypingAnimation() {
  let url = "/animation.js";

  // Loading animation.js and appending to html
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div>
      <link rel="stylesheet" href="/TypingAnimation.css"></link>
      {"\u00A0"}
      <div id="typewriter">
        <span className="var-highlight">var </span>
        <span className="property-highlight">mattdag</span>
        <span className="equals-highlight"> =</span> <span>{"{"}</span>
        <br></br>
        <span className="property-highlight">⠀⠀⠀ name</span>:
        <span className="string-highlight"> "Matthew D'Agostino"</span>,
        <br></br>
        <span className="property-highlight">⠀⠀⠀ type</span>:
        <span className="string-highlight"> "Software Engineer"</span>,<br></br>
        <span className="property-highlight">⠀⠀⠀ location</span>:
        <span className="string-highlight"> "Brisbane, Australia"</span>,
        <br></br>
        <span className="property-highlight">⠀⠀⠀⠀skills</span>:[
        <span className="string-highlight">"Teamwork"</span>,<br></br>
        <span className="string-highlight">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"Communication"</span>,
        <br></br>
        <span className="string-highlight">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"Problem Solver"</span>]
        <br></br>
        <span>{"}"};</span>
      </div>
    </div>
  );
}

export default TypingAnimation;
