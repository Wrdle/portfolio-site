import React from "react";
import {ReactTyped} from "react-typed";

export default function TypingAnimation(): React.JSX.Element {
  return (
    <div className="wrap-layer">
      <link rel="stylesheet" href="/TypingAnimation.css"></link>
      <div id="typewriter" className="text-layer">
        <ReactTyped
          strings={[`
            <span class="var-highlight">var </span><span class="property-highlight">mattdag</span><span class="equals-highlight"> = </span><span>{</span><br/>
            <span class="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;name</span><span>:</span><span class="string-highlight"> "Matthew D'Agostino"</span><span>,</span><br>
            <span class="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;type</span><span>:</span><span class="string-highlight"> "Software Engineer"</span><span>,</span><br>
            <span class="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;location</span><span>:</span><span class="string-highlight"> "Brisbane, Australia"</span><span>,</span><br>
            <span class="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;skills</span><span>: [</span><span class="string-highlight">"Software Development"</span><span>,</span><br>
            <span class="string-highlight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Cloud and DevOps"</span><span>,</span><br>
            <span class="string-highlight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Solutionising"</span><span>]</span><br>
            <span>};</span>
          `]}
          typeSpeed={35}
          startWhenVisible={true}
        />
      </div>
    </div>
  )
}
