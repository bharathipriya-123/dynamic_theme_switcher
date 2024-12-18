
// import React from 'react';
// import { useState } from 'react';

// export default function Theme() {
//     const [themeMode, setThemeMode] = useState(false);

//     const switcher = () => {
//         setThemeMode((prevMode) => !prevMode);
//     };

//     const lightStyle = {
//         backgroundColor: "#ffffff",
//         color: "#000000",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         transition: "0.3s",
//     };

//     const darkStyle = {
//         backgroundColor: "#000000",
//         color: "#ffffff",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         transition: "0.3s",
//     };

//     const buttonText = themeMode ? "Switch to Light Mode" : "Switch to Dark Mode";

    
//     const images = {
//         width: "300px",
//         height: "300px",
//         objectFit: "cover",
//         borderRadius: "10px",
//         transition: "0.3s",
//         filter: themeMode ? "brightness(0.5)" : "brightness(1.2)",
//     };

//     return (
//         <div style={themeMode ? darkStyle : lightStyle}>
//             <h2>Dynamic Theme Changer</h2>
//             <h1>{themeMode ? "Dark Mode" : "Light Mode"}</h1>
//             <img
//                 src="https://pbs.twimg.com/media/GS1Nc_nXAAA4aKh?format=jpg&name=large"
//                 alt="Theme"
//                 style={images}
//             />
//             <button onClick={switcher}>{buttonText}</button>
//         </div>
//     );
// }

import React from 'react';
import { useState } from 'react';
import '../style/Theme.css'

export default function Theme() {
    const [themeMode, setThemeMode] = useState(false);

    const switcher = () => {
        setThemeMode((prevMode) => !prevMode);
    };

    const buttonText = themeMode ? "Switch to Light Mode" : "Switch to Dark Mode";

    return (
        <div className={`theme-container ${themeMode ? "dark-theme" : "light-theme"}`}>
            <h2>Dynamic Theme Switcher</h2>
            <h1>{themeMode ? "Dark Mode" : "Light Mode"}</h1>
            <img
                src="https://pbs.twimg.com/media/GS1Nc_nXAAA4aKh?format=jpg&name=large"
                alt="Theme"
                className="theme-image"
            />
            <button className="theme-button" onClick={switcher}>
                {buttonText}
            </button>
        </div>
    );
       
        
}
