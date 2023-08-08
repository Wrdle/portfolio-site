import Typist from "react-typist";

export default function TypingAnimation() {
  return (
    <div className="wrap-layer">

      <link rel="stylesheet" href="/TypingAnimation.css"></link>
      {/*<div><SvgComponent></SvgComponent></div>*/}
      {/*{"\u00A0"}*/}
      <div id="typewriter" className="text-layer">
        <Typist>
          <span className="var-highlight">var </span>
          <span className="property-highlight">mattdag</span>
          <span className="equals-highlight"> = </span>
          <span>{"{"}</span>
          <br></br>
          <span className="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;name</span>
          <span>:</span>
          <Typist.Delay ms={250}/>
          <span className="string-highlight">&nbsp;"Matthew D'Agostino"</span>
          <span>,</span>
          <br></br>
          <span className="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;type</span>
          <span>:</span>
          <Typist.Delay ms={250}/>
          <span className="string-highlight"> "Software Engineer"</span>
          <span>,</span>
          <br></br>
          <span className="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;location</span>
          <span>:</span>
          <Typist.Delay ms={250}/>
          <span className="string-highlight"> "Brisbane, Australia"</span>
          <span>,</span>
          <br></br>
          <span className="property-highlight">&nbsp;&nbsp;&nbsp;&nbsp;skills</span>
          <span>: [</span>
          <Typist.Delay ms={250}/>
          <span className="string-highlight">"Software Development"</span>
          <span>,</span>
          <br></br>
          <Typist.Delay ms={250}/>
          <span
            className="string-highlight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Cloud and DevOps"</span>
          <span>,</span>
          <br></br>
          <Typist.Delay ms={250}/>
          <span
            className="string-highlight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Solutionising"</span>
          <span> ]</span>
          <br></br>
          <span>{"}"};</span>
        </Typist>
      </div>
    </div>
  );
}

import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"  width='100%' height='100%' viewBox="0 0 800 800" {...props} className="background-layer">
    <g
      strokeWidth={2}
      stroke="hsl(0, 0%, 100%)"
      fill="none"
      strokeLinecap="round"
      width='100%' height='100%'
    >
      <path
        d="M378.95 99.72c9.37.24 18.71 1.47 27.99 3.63 9.29 2.59 18.55 6 27.75 10.13 9.25 4.36 18.48 9.27 27.7 14.64 9.29 5.36 18.6 11.02 27.94 16.9 9.45 5.67 18.97 11.46 28.55 17.3 9.73 5.52 19.55 11.07 29.44 16.62 10.04 5.19 20.15 10.41 30.29 15.66 10.24 4.94 20.46 9.97 30.58 15.13 10.11 4.91 20.01 10.02 29.59 15.35 9.38 5.17 18.29 10.63 26.58 16.39 7.86 5.69 14.93 11.72 21.07 18.09 5.5 6.35 9.92 13.08 13.16 20.16 2.47 7.08 3.71 14.53 3.69 22.33-.75 7.8-2.68 15.94-5.73 24.39-3.51 8.45-7.91 17.21-13.06 26.26-5.16 9.04-10.73 18.36-16.53 27.94-5.29 9.59-10.37 19.22-15.08 28.89-3.86 9.67-7.23 19.4-10.08 29.18-1.91 9.81-3.35 19.7-4.37 29.66-.24 10.04-.24 20.18-.13 30.41.61 10.34 1.1 20.79 1.35 31.32.41 10.64.37 21.34-.21 32.06-.69 10.76-2.07 21.46-4.17 32.03-2.39 10.46-5.56 20.65-9.52 30.43-4.29 9.47-9.35 18.36-15.14 26.52-6.09 7.6-12.86 14.28-20.21 19.9-7.61 4.87-15.73 8.55-24.29 10.98-8.72 1.64-17.81 2.04-27.2 1.23-9.47-1.41-19.19-3.81-29.08-7.09-9.93-3.4-19.99-7.3-30.15-11.47-10.16-3.68-20.4-7.2-30.67-10.35-10.26-2.08-20.55-3.48-30.85-4.07-10.31.74-20.38 2.28-30.21 4.5-9.85 3.26-19.48 6.87-28.89 10.62-9.43 4.22-18.67 8.13-27.7 11.53-9.08 3.25-17.98 5.61-26.69 6.95-8.79.73-17.4.23-25.85-1.51-8.53-2.54-16.9-6.34-25.1-11.32-8.28-5.73-16.4-12.51-24.34-20.2-8.01-8.24-15.83-17.2-23.42-26.74-7.64-9.83-15.03-20.06-22.14-30.55a731.957 731.957 0 0 1-20.35-32.06 664.216 664.216 0 0 1-17.91-32.02c-5.43-10.51-10.38-20.94-14.82-31.25-4.28-10.21-8.02-20.32-11.19-30.33-2.97-9.93-5.37-19.8-7.15-29.6-1.6-9.75-2.59-19.46-2.96-29.12-.22-9.65.16-19.28 1.16-28.86 1.09-9.58 2.73-18.9 4.86-27.94 2.16-9.05 4.76-17.81 7.78-26.28 2.96-8.46 6.29-16.61 9.95-24.42 3.53-7.8 7.37-15.26 11.48-22.35 3.94-7.09 8.13-13.82 12.56-20.18 4.24-6.37 8.71-12.4 13.41-18.08 4.52-5.75 9.27-11.19 14.26-16.35 4.84-5.3 9.93-10.38 15.28-15.26a313.08 313.08 0 0 1 16.58-14.99c5.75-5.21 11.8-10.38 18.14-15.52 6.32-5.49 12.96-10.99 19.89-16.46 6.93-5.8 14.17-11.55 21.7-17.19 7.54-5.85 15.36-11.5 23.45-16.85 8.09-5.37 16.44-10.29 25.02-14.67 8.59-4.16 17.39-7.61 26.4-10.25 9-2.21 18.2-3.5 27.58-3.8"
        strokeDasharray="4 8"
        opacity={0.59}
      />
      <path
        d="M401.247 109.676c9.012.858 17.957 2.672 26.819 5.363 8.842 3.12 17.63 7.02 26.347 11.615 8.731 4.837 17.453 10.225 26.134 16.061 8.758 5.872 17.533 12.066 26.323 18.48 8.91 6.274 17.871 12.681 26.876 19.172 9.155 6.21 18.367 12.475 27.628 18.753a7769.638 7769.638 0 0 1 28.214 17.963 1414.57 1414.57 0 0 1 28.117 17.364c9.196 5.621 18.133 11.385 26.677 17.302 8.347 5.732 16.158 11.667 23.333 17.818 6.752 6.02 12.705 12.296 17.739 18.807 4.428 6.428 7.825 13.124 10.08 20.07 1.58 6.888 1.997 14.035 1.224 21.43-1.4 7.339-3.902 14.941-7.444 22.791-3.93 7.813-8.691 15.888-14.161 24.213-5.47 8.315-11.34 16.903-17.459 25.764-5.66 8.893-11.158 17.888-16.36 26.954-4.434 9.14-8.466 18.39-12.044 27.74a360.255 360.255 0 0 0-7.018 28.687c-1.243 9.787-2.264 19.7-3.17 29.69-.432 10.096-.951 20.284-1.653 30.5-.495 10.28-1.382 20.564-2.725 30.775-1.37 10.178-3.342 20.205-5.936 29.976-2.794 9.607-6.262 18.826-10.407 27.545-4.41 8.35-9.474 16.043-15.173 22.928-5.92 6.329-12.426 11.714-19.428 16.041a78.434 78.434 0 0 1-22.81 7.412c-8.091.591-16.504.047-25.16-1.597-8.71-2.129-17.64-5.155-26.715-8.954-9.121-3.852-18.382-8.136-27.748-12.647-9.42-4.023-18.96-7.895-28.595-11.433-9.694-2.559-19.491-4.504-29.389-5.744a217.26 217.26 0 0 0-29.483 1.987c-9.745 2.29-19.333 4.9-28.731 7.665-9.461 3.232-18.725 6.226-27.78 8.805-9.088 2.496-17.962 4.225-26.594 5.079-8.666.35-17.106-.376-25.296-2.218-8.211-2.545-16.201-6.237-23.933-11.023-7.764-5.47-15.296-11.948-22.576-19.299-7.292-7.893-14.342-16.521-21.13-25.732-6.795-9.543-13.298-19.516-19.51-29.799a598.774 598.774 0 0 1-17.53-31.704c-5.42-10.688-10.458-21.39-15.06-32.03-4.486-10.573-8.517-21.063-12.046-31.427-3.384-10.274-6.236-20.43-8.546-30.448-2.134-9.945-3.696-19.77-4.676-29.463a230.862 230.862 0 0 1-.657-28.587 221.356 221.356 0 0 1 3.32-27.845 225.354 225.354 0 0 1 6.825-26.515 235.895 235.895 0 0 1 9.512-24.541 242.308 242.308 0 0 1 11.466-22.528c4.015-7.165 8.286-13.991 12.802-20.44a232.562 232.562 0 0 1 13.7-18.39 223.051 223.051 0 0 1 14.378-16.508 229.163 229.163 0 0 1 15.048-15.047 264.305 264.305 0 0 1 15.92-14.194c5.43-4.789 11.114-9.46 17.06-14.032a431.148 431.148 0 0 1 18.489-14.514 514.85 514.85 0 0 1 20.134-15.24 470.071 470.071 0 0 1 21.834-15.62 341.12 341.12 0 0 1 23.45-14.925c8.059-4.664 16.335-8.861 24.823-12.512 8.462-3.412 17.104-6.12 25.912-8.045a128.441 128.441 0 0 1 26.75-1.75"
        strokeDasharray="4 5"
        opacity={0.23}
      />
      <path
        d="M422.685 121.322c8.634 1.438 17.16 3.78 25.565 6.962 8.37 3.582 16.652 7.92 24.84 12.93 8.202 5.255 16.349 11.048 24.46 17.3 8.165 6.31 16.332 12.954 24.505 19.841 8.27 6.78 16.585 13.728 24.917 20.779a9471.88 9471.88 0 0 1 25.474 20.625 4084.132 4084.132 0 0 1 25.779 19.972c8.595 6.401 17.063 12.845 25.324 19.33 8.195 6.235 16.085 12.556 23.557 18.97 7.25 6.21 13.957 12.537 20.008 19.001 5.653 6.287 10.505 12.733 14.468 19.326 3.426 6.455 5.85 13.072 7.213 19.84.75 6.662.419 13.483-1.02 20.48-1.967 6.892-4.962 13.972-8.911 21.229-4.276 7.21-9.337 14.612-15.056 22.244-5.699 7.625-11.807 15.505-18.195 23.648-5.962 8.203-11.82 16.532-17.434 24.977a381.93 381.93 0 0 0-13.804 26.089 391.916 391.916 0 0 0-9.455 27.332c-2.171 9.388-4.146 18.885-6.011 28.468-1.396 9.69-2.86 19.43-4.462 29.152-1.367 9.775-3.047 19.475-5.1 29.021-2.033 9.489-4.547 18.727-7.577 27.62-3.153 8.693-6.865 16.913-11.15 24.546-4.445 7.257-9.453 13.788-14.979 19.488-5.69 5.152-11.851 9.347-18.421 12.515-6.693 2.535-13.745 3.968-21.104 4.297-7.415-.275-15.085-1.597-22.956-3.926-7.918-2.71-16.014-6.223-24.267-10.414-8.293-4.197-16.735-8.76-25.32-13.523-8.664-4.29-17.486-8.452-26.452-12.32-9.103-2.97-18.372-5.407-27.788-7.238a227.448 227.448 0 0 0-28.511-.371c-9.555 1.35-18.992 3.01-28.279 4.823-9.373 2.275-18.567 4.363-27.543 6.12-9.023 1.728-17.794 2.826-26.315 3.152-8.506-.056-16.736-1.063-24.676-3.049-7.905-2.587-15.532-6.205-22.846-10.818-7.277-5.235-14.27-11.4-20.952-18.398-6.65-7.52-12.997-15.743-19.039-24.55-6.001-9.164-11.686-18.779-17.052-28.722a502.684 502.684 0 0 1-14.834-30.901 504.798 504.798 0 0 1-12.303-31.512c-3.554-10.464-6.676-20.846-9.321-31.1-2.493-10.19-4.49-20.241-5.955-30.125-1.303-9.82-2.062-19.484-2.271-28.967-.046-9.42.471-18.69 1.551-27.788a214.967 214.967 0 0 1 5.321-26.667 218.17 218.17 0 0 1 8.588-24.99 222.401 222.401 0 0 1 11.036-22.816 228.833 228.833 0 0 1 12.774-20.68 232.42 232.42 0 0 1 13.938-18.636 230.398 230.398 0 0 1 14.674-16.713 234.863 234.863 0 0 1 15.228-15.06 248.97 248.97 0 0 1 15.782-13.838 290.919 290.919 0 0 1 16.525-13.169 365.577 365.577 0 0 1 17.556-13.102 454.175 454.175 0 0 1 18.873-13.491c6.53-4.73 13.334-9.4 20.387-13.973a417.88 417.88 0 0 1 21.95-14.035c7.568-4.642 15.37-9.009 23.381-13.012 7.999-3.976 16.181-7.47 24.536-10.405 8.302-2.7 16.758-4.701 25.327-5.94a124.099 124.099 0 0 1 25.812.17"
        strokeDasharray="8 10"
        opacity={0.71}
      />
      <path
        d="M443.062 134.606c8.22 1.97 16.288 4.786 24.223 8.413 7.858 3.989 15.61 8.712 23.244 14.074 7.613 5.603 15.162 11.745 22.655 18.335 7.518 6.667 15.023 13.68 22.5 20.962 7.567 7.2 15.136 14.583 22.708 22.09a3340.946 3340.946 0 0 1 23.027 22.179 2424 2424 0 0 1 23.04 21.64c7.627 6.967 15.078 13.946 22.289 20.947 7.134 6.738 13.923 13.514 20.273 20.33 6.147 6.576 11.729 13.206 16.656 19.89 4.57 6.484 8.37 13.028 11.31 19.632 2.457 6.419 3.975 12.923 4.498 19.489.003 6.413-.993 12.909-3.01 19.492-2.47 6.455-5.888 13.035-10.178 19.723-4.561 6.62-9.853 13.4-15.764 20.354-5.883 6.96-12.173 14.15-18.74 21.586-6.218 7.522-12.362 15.173-18.328 22.954a421.308 421.308 0 0 0-15.322 24.243 431.337 431.337 0 0 0-11.623 25.641 853.1 853.1 0 0 0-8.557 26.801c-2.297 9.121-4.615 18.248-7.026 27.334-2.17 9.107-4.579 18.082-7.27 26.852-2.61 8.676-5.603 17.044-9.011 25.006-3.45 7.728-7.358 14.927-11.705 21.501-4.438 6.186-9.328 11.62-14.63 16.21-5.377 4.082-11.144 7.221-17.241 9.369-6.148 1.574-12.577 2.127-19.255 1.644-6.701-.99-13.617-2.935-20.687-5.782-7.106-3.153-14.385-7.027-21.793-11.492-7.477-4.429-15.12-9.18-22.907-14.114-7.915-4.482-16.017-8.86-24.313-12.995a239.691 239.691 0 0 0-26.064-8.563 242.707 242.707 0 0 0-27.307-2.53c-9.257.477-18.438 1.226-27.51 2.131-9.18 1.353-18.195 2.567-27.021 3.516-8.852.973-17.457 1.416-25.792 1.222-8.299-.504-16.29-1.821-23.966-3.991-7.6-2.665-14.861-6.24-21.776-10.711-6.84-5.018-13.33-10.892-19.464-17.528-6.06-7.12-11.771-14.913-17.135-23.276-5.28-8.703-10.217-17.863-14.782-27.374a415.555 415.555 0 0 1-12.349-29.705 436.16 436.16 0 0 1-9.68-30.553c-2.692-10.182-4.948-20.302-6.739-30.3-1.638-9.946-2.815-19.752-3.48-29.376-.504-9.559-.505-18.938.014-28.114a222.06 222.06 0 0 1 3.61-26.717 207.918 207.918 0 0 1 7.156-25.322c2.99-8.205 6.385-16.017 10.163-23.418a215.83 215.83 0 0 1 12.35-21.077 223.997 223.997 0 0 1 13.9-18.903 228.091 228.091 0 0 1 14.894-16.92 237.953 237.953 0 0 1 15.536-15.146 245.94 245.94 0 0 1 15.975-13.711 279.643 279.643 0 0 1 16.46-12.687 322.12 322.12 0 0 1 17.129-12.175 394.391 394.391 0 0 1 18.051-12.14 450.704 450.704 0 0 1 19.266-12.412 445.471 445.471 0 0 1 20.64-12.67 379.514 379.514 0 0 1 22.029-12.42 285.143 285.143 0 0 1 23.252-11.117c7.898-3.295 15.957-6.105 24.13-8.35 8.124-2.008 16.347-3.342 24.644-3.923 8.205-.201 16.477.43 24.793 1.95"
        strokeDasharray="2 9"
        opacity={0.71}
      />
      <path
        d="M462.115 149.459c7.785 2.453 15.383 5.696 22.804 9.69 7.338 4.354 14.53 9.394 21.574 15.048 7.01 5.884 13.917 12.3 20.74 19.15 6.837 6.947 13.617 14.232 20.358 21.797a1164.964 1164.964 0 0 1 20.305 23.093 2015.467 2015.467 0 0 1 20.346 23.346 1616.654 1616.654 0 0 1 20.076 22.912 836.983 836.983 0 0 1 19.072 22.175c6.027 7.118 11.69 14.236 16.915 21.32 5.013 6.845 9.487 13.68 13.312 20.495 3.508 6.576 6.288 13.15 8.249 19.714 1.546 6.341 2.228 12.682 1.986 19.015-.677 6.144-2.286 12.31-4.816 18.49-2.903 6.03-6.675 12.11-11.247 18.26-4.788 6.068-10.243 12.244-16.302 18.567-6.006 6.319-12.421 12.83-19.135 19.578-6.396 6.84-12.766 13.803-19.016 20.893a482.248 482.248 0 0 0-16.57 22.226 477.934 477.934 0 0 0-13.464 23.648c-3.726 8.186-7.31 16.456-10.787 24.756-3.061 8.41-6.14 16.805-9.263 25.104-2.859 8.323-5.896 16.47-9.13 24.36-3.112 7.793-6.514 15.22-10.214 22.205-3.682 6.742-7.702 12.928-12.065 18.462-4.368 5.158-9.083 9.57-14.108 13.153-7.717 4.209-24.448 7.263-33.339 6.04-5.983-1.557-12.14-3.986-18.43-7.215-6.315-3.464-12.78-7.565-19.378-12.205-6.676-4.558-13.534-9.42-20.55-14.45-7.174-4.6-14.567-9.125-22.177-13.475a252.338 252.338 0 0 0-24.263-9.686 256.91 256.91 0 0 0-25.895-4.484c-8.868-.331-17.704-.414-26.465-.36-8.886.486-17.638.865-26.192 1.03-8.608.245-16.961.042-25.036-.695-8.044-.946-15.759-2.599-23.12-4.97a103.865 103.865 0 0 1-20.715-10.72c-6.41-4.825-12.433-10.412-18.063-16.707-5.52-6.712-10.658-14.062-15.402-21.944-4.63-8.203-8.881-16.848-12.742-25.837a344.065 344.065 0 0 1-10.052-28.223 369.824 369.824 0 0 1-7.293-29.193 346.1 346.1 0 0 1-4.336-29.087c-.852-9.564-1.255-18.989-1.191-28.226.233-9.178.933-18.168 2.13-26.932 1.344-8.7 3.175-17.174 5.5-25.413a202.688 202.688 0 0 1 8.788-23.825 203.788 203.788 0 0 1 11.554-21.765 209.384 209.384 0 0 1 13.482-19.362 218.492 218.492 0 0 1 14.84-17.19 228.157 228.157 0 0 1 15.717-15.29 245.668 245.668 0 0 1 16.261-13.684 268.21 268.21 0 0 1 16.654-12.415 299.098 299.098 0 0 1 17.095-11.57 356.242 356.242 0 0 1 17.687-11.168c6-3.821 12.186-7.526 18.55-11.127a450.903 450.903 0 0 1 19.645-11.278 429.434 429.434 0 0 1 20.857-11.291c7.15-3.8 14.514-7.403 22.045-10.76a265.17 265.17 0 0 1 23.038-9.222c7.779-2.63 15.668-4.778 23.65-6.349 7.89-1.357 15.848-2.05 23.843-2.013a116.905 116.905 0 0 1 23.674 3.6"
        strokeDasharray="6 11"
        opacity={0.34}
      />
      <path
        d="M479.625 165.746c7.308 2.87 14.413 6.497 21.307 10.812 6.782 4.648 13.39 9.945 19.827 15.82 6.377 6.097 12.621 12.699 18.742 19.724 6.114 7.13 12.145 14.602 18.098 22.344a928.32 928.32 0 0 1 17.764 23.744 1368.996 1368.996 0 0 1 17.521 24.113 1182.631 1182.631 0 0 1 16.97 23.761 676.38 676.38 0 0 1 15.756 22.974c4.907 7.368 9.44 14.683 13.52 21.927 3.916 6.993 7.281 13.92 10.047 20.767 2.492 6.607 4.287 13.138 5.338 19.577.698 6.213.591 12.354-.343 18.425-1.316 5.866-3.457 11.685-6.435 17.462-3.29 5.61-7.347 11.223-12.156 16.849-4.957 5.539-10.55 11.153-16.683 16.845-6.085 5.71-12.572 11.582-19.37 17.636a1251.307 1251.307 0 0 0-19.493 18.806 559.415 559.415 0 0 0-17.542 20.078 533.683 533.683 0 0 0-14.967 21.42 943.038 943.038 0 0 0-12.63 22.396 2724.178 2724.178 0 0 1-11.108 22.573c-3.45 7.436-6.988 14.68-10.66 21.618-3.52 6.846-7.228 13.303-11.142 19.279-3.839 5.77-7.912 10.962-12.222 15.493-6.52 5.933-20.613 13.279-28.113 14.494-7.62-.289-23.525-5.683-31.768-10.56-5.56-3.654-11.261-7.882-17.083-12.592-5.923-4.609-12.02-9.495-18.303-14.545a483.329 483.329 0 0 0-20.074-13.758 264.3 264.3 0 0 0-22.392-10.615 276.348 276.348 0 0 0-24.319-6.22c-8.402-1.055-16.807-1.9-25.15-2.625-8.504-.316-16.882-.713-25.1-1.286-8.262-.45-16.292-1.274-24.033-2.535-7.711-1.398-15.097-3.391-22.12-5.996a105.634 105.634 0 0 1-19.586-10.798c-5.991-4.655-11.581-9.993-16.745-15.942-5.012-6.33-9.628-13.218-13.814-20.608-4.047-7.68-7.676-15.77-10.906-24.194a286.32 286.32 0 0 1-8.027-26.49 315.211 315.211 0 0 1-5.137-27.538 301.554 301.554 0 0 1-2.18-27.526c-.15-9.06.14-17.988.878-26.742a229.331 229.331 0 0 1 4.024-25.445c1.942-8.204 4.33-16.17 7.177-23.88a194.978 194.978 0 0 1 10.223-22.196 197.474 197.474 0 0 1 12.73-20.058 203.098 203.098 0 0 1 14.441-17.649 212.378 212.378 0 0 1 15.628-15.54 231.223 231.223 0 0 1 16.394-13.744 255.267 255.267 0 0 1 16.883-12.265 287.606 287.606 0 0 1 17.252-11.18 328.378 328.378 0 0 1 17.666-10.453 385.207 385.207 0 0 1 18.225-10.12 440.873 440.873 0 0 1 19.008-10.044 452.867 452.867 0 0 1 19.966-10.044 408.743 408.743 0 0 1 21.02-9.837 331.228 331.228 0 0 1 21.991-9.063c7.459-2.808 15.036-5.273 22.721-7.336 7.616-1.993 15.316-3.486 23.058-4.43 7.631-.73 15.294-.82 22.944-.211 7.52.934 15.017 2.626 22.473 5.125"
        strokeDasharray="2 3"
        opacity={0.68}
      />
      <path
        d="M495.34 183.286c6.823 3.236 13.405 7.176 19.741 11.762 6.223 4.885 12.224 10.362 18.036 16.379 5.723 6.24 11.29 12.946 16.686 20.059 5.378 7.225 10.64 14.781 15.773 22.598a744.598 744.598 0 0 1 15.154 24.02 974.359 974.359 0 0 1 14.604 24.462 846.98 846.98 0 0 1 13.814 24.173 550.322 550.322 0 0 1 12.44 23.324c3.787 7.473 7.202 14.867 10.182 22.131 2.833 7.033 5.146 13.953 6.898 20.73 1.519 6.54 2.396 12.945 2.592 19.207a71.557 71.557 0 0 1-2.49 17.71c-1.873 5.572-4.493 11.027-7.865 16.396-3.606 5.208-7.926 10.37-12.897 15.49-5.1 5.042-10.766 10.101-16.937 15.208-6.13 5.114-12.635 10.355-19.457 15.74-6.576 5.494-13.184 11.062-19.758 16.722a686.215 686.215 0 0 0-18.226 17.829 622.724 622.724 0 0 0-16.098 19.017 1098.368 1098.368 0 0 0-14.041 19.812c-4.221 6.72-8.401 13.348-12.565 19.819-3.885 6.509-7.824 12.774-11.821 18.728-3.808 5.875-7.74 11.342-11.775 16.336-5.954 6.915-18.434 17.242-24.949 20.384-6.54 1.859-20.086 1.035-27.045-1.605-4.65-2.291-9.39-5.28-14.22-8.925-4.851-3.742-9.827-8.011-14.937-12.714-5.212-4.573-10.596-9.42-16.17-14.431-5.775-4.64-11.787-9.288-18.064-13.858a270.304 270.304 0 0 0-20.49-11.342 294.61 294.61 0 0 0-22.585-7.713c-7.865-1.699-15.765-3.227-23.624-4.649-8.027-1.048-15.963-2.153-23.743-3.386-7.846-1.11-15.463-2.51-22.807-4.27-7.321-1.838-14.313-4.164-20.945-6.996-6.525-3.07-12.67-6.714-18.392-10.935-5.577-4.518-10.73-9.613-15.448-15.258-4.556-5.956-8.672-12.404-12.358-19.295-3.517-7.143-6.61-14.667-9.274-22.49-2.508-7.995-4.584-16.222-6.245-24.614a262.531 262.531 0 0 1-3.27-25.644 263.38 263.38 0 0 1-.3-25.688 241.54 241.54 0 0 1 2.688-24.967 214.461 214.461 0 0 1 5.66-23.728 195.964 195.964 0 0 1 8.621-22.165 188.926 188.926 0 0 1 11.443-20.445 193.03 193.03 0 0 1 13.704-18.308 199.082 199.082 0 0 1 15.22-15.947 215.055 215.055 0 0 1 16.254-13.935 241.35 241.35 0 0 1 16.954-12.25 265.517 265.517 0 0 1 17.402-10.907 301.803 301.803 0 0 1 17.759-9.946 358.726 358.726 0 0 1 18.16-9.326 428.548 428.548 0 0 1 18.697-9.008 461.439 461.439 0 0 1 19.387-8.862 456.834 456.834 0 0 1 20.226-8.725 395.504 395.504 0 0 1 21.089-8.304 309.828 309.828 0 0 1 21.835-7.332 228.977 228.977 0 0 1 22.286-5.483c7.429-1.35 14.886-2.225 22.351-2.56 7.344-.137 14.677.335 21.947 1.482a111.739 111.739 0 0 1 21.184 6.489"
        strokeDasharray="4 10"
        opacity={0.09}
      />
      <path
        d="M509.04 201.839c6.322 3.572 12.357 7.761 18.134 12.538 5.638 5.055 11.027 10.657 16.187 16.748 5.073 6.295 9.945 13.027 14.622 20.142 4.634 7.217 9.106 14.756 13.428 22.531a602.26 602.26 0 0 1 12.527 23.932 736.54 736.54 0 0 1 11.703 24.407 659.936 659.936 0 0 1 10.691 24.114c3.336 7.836 6.42 15.592 9.192 23.25 2.703 7.45 5.052 14.777 6.98 21.958 1.792 6.948 3.123 13.74 3.914 20.353.605 6.39.639 12.596.047 18.614-1.555 8.611-8.323 24.672-13.54 32.176-3.894 4.809-8.401 9.515-13.506 14.15-5.188 4.556-10.885 9.087-17.061 13.623-6.118 4.555-12.592 9.18-19.382 13.907a3326.957 3326.957 0 0 0-19.798 14.637 858.698 858.698 0 0 0-18.617 15.545 784.903 784.903 0 0 0-16.852 16.506 1445.198 1445.198 0 0 0-15.048 17.101c-4.59 5.787-9.108 11.463-13.572 16.954-4.215 5.533-8.418 10.812-12.611 15.778-6.03 7.157-18.062 18.967-24.104 23.358-5.931 3.407-17.943 6.358-23.999 5.814-6.012-1.679-18.214-8.822-24.454-14.087-4.214-3.755-8.54-7.978-12.983-12.595-4.559-4.485-9.298-9.226-14.216-14.143a457.47 457.47 0 0 0-16.118-13.815 290.714 290.714 0 0 0-18.584-11.872 326.368 326.368 0 0 0-20.742-8.956c-7.284-2.25-14.607-4.361-21.92-6.388-7.484-1.687-14.886-3.42-22.16-5.267-7.335-1.687-14.472-3.62-21.354-5.834-6.863-2.25-13.406-4.885-19.605-7.947a112.296 112.296 0 0 1-17.113-11.08 108.703 108.703 0 0 1-14.16-14.648c-4.115-5.586-7.778-11.61-11.004-18.024-3.055-6.606-5.661-13.56-7.825-20.766a195.39 195.39 0 0 1-4.704-22.664 219.442 219.442 0 0 1-1.683-23.593 225.68 225.68 0 0 1 1.29-23.652 211.877 211.877 0 0 1 4.192-23.01 194.54 194.54 0 0 1 7.042-21.807 184.895 184.895 0 0 1 9.798-20.301 180.464 180.464 0 0 1 12.426-18.603 186.343 186.343 0 0 1 14.48-16.51 195.801 195.801 0 0 1 15.81-14.273 219.177 219.177 0 0 1 16.741-12.353A244.3 244.3 0 0 1 268.903 257a281.308 281.308 0 0 1 17.817-9.583 326.705 326.705 0 0 1 18.161-8.704 387.81 387.81 0 0 1 18.566-8.146 441.35 441.35 0 0 1 19.061-7.823c6.437-2.658 13-5.19 19.677-7.594a450.634 450.634 0 0 1 20.366-7.314c6.9-2.42 13.924-4.67 21.041-6.712a288.063 288.063 0 0 1 21.531-5.575 214.112 214.112 0 0 1 21.737-3.658c7.19-.742 14.37-1.023 21.514-.792 7.03.421 13.988 1.417 20.856 3.045 6.714 1.875 13.321 4.43 19.8 7.69"
        strokeDasharray="8 8"
        opacity={0.32}
      />
      <path
        d="M520.55 221.166c5.795 3.82 11.282 8.202 16.476 13.122 5.05 5.147 9.83 10.798 14.34 16.894 4.42 6.275 8.596 12.952 12.56 19.968 3.901 7.131 7.605 14.539 11.114 22.178a494.151 494.151 0 0 1 9.958 23.482 583.87 583.87 0 0 1 8.887 23.94 515.07 515.07 0 0 1 7.684 23.654c2.31 7.685 4.358 15.276 6.104 22.747 1.684 7.29 3.023 14.432 3.966 21.395.838 6.755 1.237 13.326 1.175 19.689-.608 9.117-4.778 25.957-8.43 33.693-2.809 4.908-6.206 9.623-10.178 14.162-4.117 4.412-8.781 8.68-13.956 12.837-5.248 4.088-10.944 8.116-17.063 12.102-6.063 4.01-12.462 8.044-19.161 12.124-6.508 4.19-13.08 8.386-19.64 12.602a1298.96 1298.96 0 0 0-18.712 13.248c-5.848 4.643-11.6 9.3-17.239 13.968a2915.16 2915.16 0 0 0-15.622 14.35 1113.913 1113.913 0 0 1-14.179 14.07c-6.561 6.723-19.158 18.61-25.239 23.508-11.501 6.994-28.183 10.936-33.583 9.744-5.294-2.142-15.905-9.743-21.293-15.01-3.65-3.694-7.392-7.824-11.242-12.307-3.966-4.355-8.101-8.947-12.416-13.724a490.193 490.193 0 0 0-14.283-13.616 313.283 313.283 0 0 0-16.694-12.218 352.403 352.403 0 0 0-18.842-9.945 867.581 867.581 0 0 0-20.06-7.851c-6.89-2.24-13.705-4.505-20.403-6.861-6.78-2.208-13.362-4.597-19.715-7.22-6.348-2.608-12.391-5.532-18.104-8.79a116.409 116.409 0 0 1-15.733-11.232 105.294 105.294 0 0 1-12.862-14.066c-3.69-5.258-6.927-10.879-9.726-16.816-2.627-6.099-4.802-12.48-6.536-19.091a159.58 159.58 0 0 1-3.399-20.682 182.521 182.521 0 0 1-.358-21.467c.457-7.213 1.312-14.4 2.582-21.513a186.556 186.556 0 0 1 5.404-20.886 176.876 176.876 0 0 1 8.124-19.781 172.77 172.77 0 0 1 10.715-18.32 173.305 173.305 0 0 1 13.167-16.697c4.8-5.27 9.83-10.17 15.043-14.706a197.621 197.621 0 0 1 16.228-12.595c5.56-3.889 11.259-7.49 17.072-10.806a252.664 252.664 0 0 1 17.66-9.358 293.327 293.327 0 0 1 18.082-8.25 352.967 352.967 0 0 1 18.457-7.458 410.02 410.02 0 0 1 18.841-6.907 450.29 450.29 0 0 1 19.291-6.55 460.041 460.041 0 0 1 19.826-6.237A416.913 416.913 0 0 1 399 217.869a348.898 348.898 0 0 1 20.824-5.084 273.91 273.91 0 0 1 21.107-3.828c7.012-.983 14.035-1.629 21.037-1.885 6.907-.162 13.774.112 20.565.882a118.333 118.333 0 0 1 19.646 4.465c6.269 2.286 12.4 5.183 18.361 8.741"
        strokeDasharray="11 4"
        opacity={0.14}
      />
      <path
        d="M529.712 240.943c5.252 4.016 10.178 8.524 14.79 13.51 4.465 5.186 8.631 10.81 12.515 16.837 3.77 6.178 7.275 12.72 10.538 19.555a309.163 309.163 0 0 1 8.894 21.535 416.958 416.958 0 0 1 7.499 22.706 459.343 459.343 0 0 1 6.213 23.102 410.124 410.124 0 0 1 4.88 22.79 315.331 315.331 0 0 1 3.252 21.877c.743 7.004 1.16 13.843 1.219 20.492-.029 6.449-.46 12.701-1.31 18.73-1.693 8.626-7.64 24.414-11.96 31.578-3.187 4.533-6.87 8.862-11.058 12.981-4.285 3.999-9.05 7.841-14.256 11.522-5.256 3.63-10.905 7.171-16.924 10.625a516.77 516.77 0 0 1-18.796 10.401 1993.094 1993.094 0 0 1-19.279 10.618 3637.31 3637.31 0 0 0-18.518 11.004c-5.852 3.85-11.615 7.68-17.261 11.47-5.385 3.958-10.665 7.857-15.817 11.651-7.3 5.801-21.041 16.572-27.507 21.324-6.097 4.402-17.664 11.073-23.162 13.16-10.23 1.211-24.693-3.128-29.317-6.731-4.598-4.23-13.996-15.01-18.93-21.312-3.454-4.182-7.05-8.592-10.81-13.199a516.536 516.536 0 0 0-12.571-13.302 342.75 342.75 0 0 0-14.85-12.385 395.322 395.322 0 0 0-16.899-10.678 1104.704 1104.704 0 0 0-18.099-9.015 871.807 871.807 0 0 1-18.487-8.184 287.076 287.076 0 0 1-17.936-8.36c-5.78-2.927-11.274-6.09-16.465-9.515-5.119-3.47-9.879-7.26-14.261-11.343a101.178 101.178 0 0 1-11.531-13.518 102.462 102.462 0 0 1-8.516-15.657 115.622 115.622 0 0 1-5.38-17.47 133.787 133.787 0 0 1-2.286-18.721c-.18-6.403.061-12.87.708-19.347a160.203 160.203 0 0 1 3.594-19.32 161.547 161.547 0 0 1 6.318-18.72 162.46 162.46 0 0 1 8.917-17.662 160.295 160.295 0 0 1 11.371-16.29 165.75 165.75 0 0 1 13.657-14.756 177.955 177.955 0 0 1 15.392-12.895 193.158 193.158 0 0 1 16.45-10.925 220.203 220.203 0 0 1 17.236-9.278 258.338 258.338 0 0 1 17.79-7.938c6-2.5 12.08-4.804 18.223-6.925a366.808 366.808 0 0 1 18.596-6.166 423.848 423.848 0 0 1 18.965-5.62c6.381-1.872 12.84-3.611 19.362-5.217a454.364 454.364 0 0 1 19.796-4.81 413.848 413.848 0 0 1 20.185-4.276 337.732 337.732 0 0 1 20.45-3.422 265.097 265.097 0 0 1 20.486-2.105c6.769-.406 13.516-.48 20.191-.186 6.588.38 13.09 1.18 19.48 2.433 6.271 1.4 12.388 3.296 18.358 5.729 5.8 2.63 11.429 5.83 16.853 9.612"
        strokeDasharray="7 2"
        opacity={0.23}
      />
      <path
        d="M536.428 260.836c4.717 4.147 9.08 8.726 13.112 13.708 3.884 5.157 7.458 10.693 10.726 16.573 6.179 12.166 11.294 25.488 15.398 39.552 3.882 14.216 6.892 28.87 8.989 43.564 2.005 14.43 3.047 28.62 3.017 42.264-.226 13.057-1.737 25.4-4.693 36.805-3.331 10.703-8.285 20.458-14.94 29.173-7.063 8.145-15.804 15.452-26.148 21.96-5.213 3.193-10.77 6.25-16.648 9.192a436.732 436.732 0 0 1-18.278 8.763 1144.086 1144.086 0 0 1-18.722 8.714 5537.493 5537.493 0 0 1-18.073 8.846c-11.273 6.334-22.204 12.434-32.62 18.146-9.518 6.186-18.607 11.634-27.155 16.046-7.828 4.447-15.235 7.44-22.183 8.723-6.416.935-12.485-.08-18.206-3.125-5.473-3.397-10.822-8.685-16.117-15.686-5.54-6.882-11.407-14.987-17.736-23.998-5.305-6.34-17.288-19.046-24.066-25.261a436.322 436.322 0 0 0-14.959-11.169 1313.701 1313.701 0 0 0-16.083-9.893c-11.29-5.852-22.252-11.964-32.508-18.474-10.353-6.29-19.582-13.436-27.433-21.43-7.459-8.239-13.324-17.486-17.51-27.535-3.593-10.358-5.487-21.386-5.687-32.77.361-11.471 2.352-23.053 5.887-34.397a140.883 140.883 0 0 1 16.403-32.079 147.676 147.676 0 0 1 11.756-14.26 160.3 160.3 0 0 1 13.908-12.825c5.006-4 10.185-7.693 15.516-11.087a197.148 197.148 0 0 1 16.491-9.287c11.276-5.688 22.983-10.418 34.993-14.3 11.96-4.148 24.253-7.605 36.744-10.433a443.125 443.125 0 0 1 38.15-8.12 417.897 417.897 0 0 1 39.354-6.047c13.21-1.652 26.475-2.457 39.59-2.22 12.852.327 25.421 1.99 37.466 5.242a111.666 111.666 0 0 1 16.957 6.83 102.257 102.257 0 0 1 15.3 10.289"
        strokeDasharray="2 1"
        opacity={0.61}
      />
      <path
        d="M540.677 280.497c8.167 8.597 14.955 18.629 20.431 29.826 5.008 11.69 8.865 24.338 11.653 37.576 2.536 13.397 4.12 27.121 4.762 40.805.5 13.474.049 26.673-1.44 39.289-1.664 12.122-4.487 23.514-8.578 33.942-4.38 9.836-10.149 18.718-17.342 26.524-7.487 7.336-16.384 13.794-26.59 19.388-10.263 5.496-21.614 10.458-33.867 14.998-11.86 4.924-23.738 9.48-35.364 13.753-10.941 4.873-21.518 9.417-31.562 13.503-9.304 4.546-18.091 8.366-26.266 11.218-7.53 2.966-14.536 4.625-20.963 4.794-5.947-.02-11.458-1.727-16.512-5.156-4.866-3.637-9.535-8.888-14.084-15.632-4.816-6.572-9.884-14.258-15.327-22.804a534.008 534.008 0 0 0-20.896-24.61c-8.792-7.43-17.915-14.738-27.114-21.896-9.92-6.38-19.516-12.962-28.487-19.84-9.109-6.621-17.184-13.869-24.007-21.722-6.506-7.962-11.534-16.66-14.976-25.933-2.928-9.44-4.241-19.37-3.937-29.506.826-10.17 3.195-20.368 7.065-30.299 4.302-9.786 10.002-19.155 17.066-27.873 7.357-8.486 15.978-16.264 25.804-23.17 10.003-6.745 20.655-12.379 31.76-17.006 11.157-4.649 22.73-8.425 34.582-11.426 11.827-3.22 23.965-5.785 36.292-7.759a436.004 436.004 0 0 1 37.539-5.373 400.261 400.261 0 0 1 38.312-3.005c12.73-.57 25.411-.305 37.827.931 12.148 1.352 23.89 3.932 34.996 7.946 10.587 4.458 20.391 10.585 29.216 18.51"
        strokeDasharray="11 2"
        opacity={0.5}
      />
      <path
        d="M542.469 299.59c7.094 8.57 12.799 18.318 17.18 28.998 3.901 11.09 6.616 22.937 8.249 35.235a243.373 243.373 0 0 1 1.084 37.626c-.767 12.38-2.478 24.432-5.158 35.887-2.84 11.048-6.726 21.367-11.709 30.734-5.201 8.879-11.577 16.808-19.129 23.68-7.749 6.5-16.66 12.093-26.639 16.814-9.994 4.641-20.895 8.682-32.52 12.176-11.314 3.86-22.592 7.248-33.585 10.249-10.444 3.53-20.503 6.666-30.015 9.304-8.893 3.065-17.24 5.433-24.925 6.921-10.402 1.918-27.551-.556-34.525-5.4-4.353-3.786-8.438-8.958-12.368-15.403-4.203-6.241-8.572-13.5-13.225-21.56a718.743 718.743 0 0 0-17.965-23.762c-7.588-7.454-15.41-14.886-23.272-22.243-8.547-6.697-16.786-13.574-24.453-20.65-7.84-6.788-14.753-14.038-20.521-21.685-5.543-7.648-9.73-15.801-12.449-24.319-2.305-8.577-3.096-17.466-2.367-26.433 1.167-8.94 3.812-17.826 7.883-26.412 4.43-8.437 10.21-16.452 17.27-23.85 7.321-7.178 15.843-13.694 25.514-19.41 9.816-5.553 20.245-10.111 31.106-13.744 10.904-3.644 22.207-6.492 33.777-8.629 11.567-2.293 23.415-3.981 35.42-5.114a420.42 420.42 0 0 1 36.466-2.621 373.048 373.048 0 0 1 36.8-.072c12.12.461 24.087 1.713 35.702 3.865 11.317 2.268 22.155 5.654 32.273 10.293 9.619 5.027 18.385 11.504 26.1 19.524"
        strokeDasharray="10 11"
        opacity={0.83}
      />
      <path
        d="M541.892 317.764c6.056 8.424 10.728 17.771 14.094 27.83 2.9 10.39 4.621 21.344 5.239 32.602.325 11.37-.355 22.841-1.969 34.147-1.795 11.168-4.5 21.987-8.101 32.196-3.76 9.889-8.45 19.055-14.068 27.307-5.78 7.86-12.553 14.805-20.275 20.725-7.854 5.632-16.648 10.384-26.28 14.241-9.627 3.829-19.98 6.991-30.902 9.544a394.636 394.636 0 0 1-31.488 7.07c-9.826 2.354-19.232 4.236-28.086 5.607-8.366 1.777-16.152 2.896-23.263 3.22-9.677.313-25.353-4.289-31.593-9.535-3.91-3.882-7.516-8.93-10.915-15.056-3.69-5.93-7.462-12.74-11.42-20.316a1292.432 1292.432 0 0 0-15.256-22.74c-6.433-7.354-13.024-14.75-19.597-22.123-7.207-6.836-14.096-13.815-20.47-20.911-6.58-6.825-12.323-13.952-17.044-21.308-4.58-7.288-7.935-14.884-9.974-22.671a66.848 66.848 0 0 1-.942-23.547c1.443-7.798 4.26-15.465 8.415-22.797 4.456-7.172 10.177-13.928 17.108-20.074 7.14-5.954 15.432-11.279 24.802-15.855 9.492-4.417 19.565-7.944 30.049-10.64 10.51-2.678 21.423-4.633 32.57-5.921 11.15-1.417 22.566-2.257 34.103-2.56a401.83 401.83 0 0 1 34.924.024c11.662.32 23.328 1.204 34.823 2.686 11.375 1.409 22.513 3.542 33.215 6.489 10.407 3.07 20.265 7.118 29.338 12.246 8.616 5.452 16.328 12.14 22.963 20.12"
        strokeDasharray="4 6"
        opacity={0.8}
      />
      <path
        d="M539.097 334.71c5.057 8.166 8.77 17.002 11.226 26.346 2.019 9.608 2.877 19.599 2.669 29.755-.5 10.24-1.99 20.487-4.382 30.492-2.584 9.915-6.02 19.447-10.284 28.362-4.395 8.678-9.613 16.654-15.63 23.767-6.142 6.813-13.082 12.762-20.792 17.746-7.79 4.772-16.327 8.685-25.504 11.737-9.175 3.039-18.903 5.4-29.045 7.101a291.525 291.525 0 0 1-29.16 4.277c-9.098 1.322-17.774 2.139-25.885 2.45-7.733.685-14.883.745-21.368.126-8.888-1.01-23.133-7.301-28.711-12.809-3.52-3.931-6.726-8.824-9.688-14.634-3.243-5.6-6.496-11.996-9.835-19.066-3.959-6.685-8.221-13.9-12.786-21.576-5.358-7.151-10.773-14.372-16.123-21.601-5.919-6.804-11.53-13.704-16.659-20.672-5.354-6.71-9.972-13.595-13.675-20.58-3.634-6.864-6.188-13.89-7.552-20.946-1.14-6.989-1.03-13.989.351-20.844 1.664-6.755 4.577-13.304 8.72-19.48 4.383-6.01 9.949-11.591 16.63-16.59 6.86-4.819 14.789-9.036 23.735-12.547 9.048-3.375 18.645-5.937 28.612-7.738 10.006-1.778 20.382-2.89 30.97-3.387 10.592-.583 21.426-.62 32.349-.14a376.048 376.048 0 0 1 32.91 2.474c10.923 1.188 21.788 2.905 32.431 5.176 10.49 2.24 20.69 5.127 30.387 8.741 9.417 3.717 18.233 8.284 26.25 13.764 7.583 5.73 14.257 12.479 19.84 20.297"
        strokeDasharray="5 3"
        opacity={0.75}
      />
      <path
        d="M534.291 350.145c4.11 7.785 6.96 16.04 8.615 24.6 1.254 8.763 1.403 17.746.537 26.762a138.202 138.202 0 0 1-6.173 26.791c-3.11 8.64-7.036 16.866-11.695 24.508-4.785 7.459-10.287 14.255-16.452 20.243a102.963 102.963 0 0 1-20.691 14.815c-7.58 3.926-15.726 7.048-24.353 9.338-8.612 2.316-17.626 3.94-26.937 4.893a225.736 225.736 0 0 1-26.642 1.893c-8.315.438-16.185.385-23.506-.162-7.04-.21-13.518-.992-19.353-2.364-8.064-2.068-20.922-9.63-25.913-15.288-3.181-3.935-6.039-8.66-8.616-14.13-2.86-5.299-5.662-11.272-8.455-17.837a1383.758 1383.758 0 0 1-10.524-20.286 1045.886 1045.886 0 0 1-12.909-20.71c-4.728-6.599-9.138-13.285-13.087-19.967-4.202-6.46-7.731-12.987-10.468-19.515-2.735-6.401-4.517-12.824-5.274-19.158-.6-6.239-.098-12.376 1.53-18.286 1.831-5.795 4.79-11.32 8.849-16.441 4.25-4.966 9.564-9.487 15.92-13.447 6.474-3.786 13.94-6.995 22.353-9.543 8.487-2.417 17.48-4.098 26.824-5.094 9.37-.952 19.074-1.289 28.98-1.063 9.905.181 20.001.886 30.165 2.057a350.474 350.474 0 0 1 30.464 4.666c10.059 1.942 19.99 4.37 29.646 7.308 9.52 2.923 18.68 6.427 27.316 10.549 8.367 4.215 16.12 9.133 23.054 14.799 6.554 5.868 12.205 12.555 16.795 20.07"
        strokeDasharray="5 11"
        opacity={0.96}
      />
      <path
        d="M527.703 363.85a80.032 80.032 0 0 1 6.288 22.628c.626 7.882.212 15.835-1.134 23.71-1.608 7.934-4.088 15.705-7.345 23.147a116.467 116.467 0 0 1-12.406 20.754c-4.927 6.275-10.481 11.928-16.574 16.841a100.16 100.16 0 0 1-20.05 12.005c-7.21 3.118-14.846 5.498-22.815 7.106-7.966 1.64-16.217 2.63-24.642 2.949-8.318.522-16.36.46-24.001-.09-7.487-.269-14.525-1.016-21.04-2.222-9.212-1.62-24.524-7.123-30.616-11.152-5.418-4.426-14.007-16.29-17.528-23.696-2.508-4.986-4.9-10.547-7.215-16.621a543.045 543.045 0 0 1-8.486-18.886 555.097 555.097 0 0 1-9.995-19.498c-3.63-6.28-6.941-12.59-9.82-18.85-3.128-6.087-5.666-12.166-7.513-18.163-2.423-8.756-2.828-25.44-.573-33.149 3.435-7.205 15.395-19.492 23.839-24.302 6.027-2.879 12.951-5.198 20.726-6.89 7.843-1.571 16.141-2.462 24.744-2.732 8.625-.226 17.55.114 26.635.976 9.08.853 18.325 2.193 27.6 3.971 9.242 1.729 18.504 3.9 27.638 6.5 9.067 2.552 17.968 5.548 26.55 8.994 8.454 3.452 16.516 7.41 24.05 11.863 7.28 4.55 13.94 9.66 19.819 15.362 5.526 5.846 10.198 12.341 13.864 19.446"
        strokeDasharray="2 9"
        opacity={0.34}
      />
      <path
        d="M519.624 375.651a72.434 72.434 0 0 1 4.277 20.476c.11 6.967-.714 13.902-2.383 20.682a94.144 94.144 0 0 1-7.963 19.618 97.762 97.762 0 0 1-12.488 17.208 94.232 94.232 0 0 1-16.065 13.655 94.661 94.661 0 0 1-18.89 9.413c-6.694 2.376-13.713 4.085-20.951 5.096a130.758 130.758 0 0 1-22.176 1.27c-7.443-.037-14.58-.612-21.32-1.653-6.63-.815-12.837-2.085-18.544-3.754-8.134-2.386-21.642-9.051-27.022-13.403-4.834-4.63-12.477-16.235-15.557-23.191-2.18-4.678-4.209-9.822-6.082-15.392-2.27-5.404-4.498-11.223-6.667-17.386a343.578 343.578 0 0 1-7.405-18.01c-2.657-5.844-4.983-11.667-6.916-17.418-2.99-8.376-6.21-24.38-6.108-31.849.91-7.075 6.965-19.56 12.158-24.765 3.82-3.197 8.481-5.94 13.933-8.143 5.531-2.083 11.84-3.633 18.91-4.578 7.11-.843 14.625-1.06 22.4-.724 7.783.387 15.827 1.305 23.994 2.701 8.166 1.397 16.444 3.244 24.711 5.502a278.158 278.158 0 0 1 24.517 7.919c7.978 3.004 15.772 6.414 23.238 10.199 7.326 3.807 14.267 8.032 20.665 12.652 6.192 4.7 11.784 9.84 16.624 15.422 4.549 5.685 8.298 11.854 11.11 18.453"
        strokeDasharray="6 10"
        opacity={0.92}
      />
      <path
        d="M510.354 385.433c3.247 12.29 2.824 24.497-.63 35.918-4.26 11.484-11.19 21.83-20.096 30.266a85.099 85.099 0 0 1-32.34 17.841c-12.177 3.411-25.215 4.556-38.422 3.24-13.032-.785-24.765-3.492-34.712-7.624-9.654-3.396-17.559-8.372-23.526-14.726-5.97-5.862-10.487-13.38-13.643-22.346-3.983-8.595-7.357-18.668-10.104-29.92-4.261-10.77-7.527-21.64-9.564-32.024-2.835-9.989-3.674-19.52-2.206-27.999 1.447-8.105 5.637-15.074 12.597-20.34 7.179-4.83 17.137-7.865 29.712-8.614 12.672-.402 26.635 1.391 40.98 4.95 14.3 3.616 28.866 8.898 42.767 15.476 13.62 6.581 26.312 14.592 37.077 23.78 10.02 9.387 17.707 20.191 22.11 32.122"
        strokeDasharray="7 7"
        opacity={0.69}
      />
      <path
        d="M500.212 393.136c2.11 10.845 1.101 21.273-2.47 30.722-4.221 9.479-10.725 17.769-18.872 24.319-8.462 6.388-18.324 10.927-28.969 13.278-10.74 2.29-22.094 2.589-33.42.733-11.234-1.466-21.244-4.627-29.673-9.013-8.269-3.838-15.04-8.995-20.144-15.232-5.204-5.833-9.115-12.936-11.769-21.115-3.332-7.918-5.935-16.972-7.718-26.908-2.958-9.649-4.855-19.24-5.6-28.258-1.424-8.757-1.163-16.903.968-23.959 2.013-6.77 6.248-12.35 12.693-16.26 6.563-3.588 15.391-5.45 26.35-5.202 11.021.52 23.048 3.042 35.297 7.115 12.186 4.159 24.476 9.804 36.071 16.558 11.318 6.799 21.71 14.77 30.314 23.615 7.992 8.989 13.895 18.972 16.942 29.607"
        strokeDasharray="1 1"
        opacity={0.36}
      />
      <path
        d="M489.487 398.787c1.187 9.33-.183 18.011-3.645 25.653-3.961 7.631-9.8 14.108-16.957 19.026-7.403 4.825-15.946 8.063-25.042 9.445-9.18 1.365-18.785 1.037-28.276-1.144-9.435-1.896-17.777-5.245-24.779-9.632-6.947-3.99-12.62-9.059-16.9-14.96-4.432-5.604-7.734-12.17-9.892-19.49-2.7-7.16-4.621-15.146-5.615-23.717-1.863-8.44-2.675-16.647-2.447-24.24-.303-7.438.782-14.188 3.338-19.86 2.417-5.467 6.552-9.773 12.386-12.531 5.884-2.513 13.534-3.438 22.832-2.452 9.34 1.192 19.38 4.134 29.497 8.432 10.048 4.37 20.054 10.043 29.348 16.642 9.066 6.626 17.235 14.217 23.84 22.407 6.11 8.27 10.414 17.206 12.312 26.421"
        strokeDasharray="7 1"
        opacity={0.22}
      />
      <path
        d="M478.478 402.442c.48 7.758-1.047 14.764-4.21 20.763-3.526 5.981-8.526 10.88-14.54 14.446-6.219 3.513-13.292 5.688-20.774 6.334-7.55.672-15.39-.086-23.087-2.373-7.67-2.09-14.434-5.394-20.089-9.532-5.652-3.888-10.279-8.64-13.776-14.008-3.65-5.173-6.35-11.054-8.04-17.428-2.084-6.288-3.395-13.138-3.783-20.322-.995-7.13-.995-13.917-.104-20.062 1.318-8.754 9.414-21.614 16.49-24.974 5.126-1.617 11.563-1.827 19.184-.377 7.645 1.6 15.705 4.687 23.716 8.893 7.948 4.283 15.731 9.645 22.848 15.74 6.93 6.13 13.041 12.989 17.822 20.228 4.423 7.282 7.355 14.96 8.343 22.672"
        strokeDasharray="3 6"
        opacity={0.89}
      />
      <path
        d="M467.446 404.232c-.36 12.32-6.588 21.653-16.033 26.619-9.977 4.866-22.378 5.458-34.318.97-11.93-3.987-21.014-11.77-26.389-21.177-5.836-8.958-8.924-20.06-8.469-31.6-1.045-11.523 1.522-21.375 6.979-27.753 5.011-6.109 13.869-8.372 25.793-5.195 11.933 3.598 24.548 11.923 34.896 22.443 9.82 10.64 16.58 23.39 17.54 35.693"
        strokeDasharray="1 3"
        opacity={0.63}
      />
      <path
        d="M456.624 404.3c-.805 9.11-5.646 15.683-12.649 18.9-7.32 3.171-16.328 3.092-24.983-.773a38.138 38.138 0 0 1-19.229-17.593c-4.25-7.346-6.328-16.083-5.516-24.743-.027-8.703 2.765-15.73 7.545-19.931 4.474-4.088 11.465-5.103 20.157-1.976 8.68 3.366 17.37 10.268 24.16 18.655 6.458 8.46 10.552 18.301 10.515 27.461"
        strokeDasharray="10 8"
        opacity={0.07}
      />
      <path
        d="M446.177 402.836c-2.078 11.906-13.705 16.451-24.813 10.562-11.166-5.413-17.546-18.513-15.48-29.997.62-11.671 9.232-17.601 20.446-12.585 11.173 5.444 20.566 19.939 19.847 32.02"
        strokeDasharray="2 2"
        opacity={0.87}
      />
    </g>
  </svg>
)

