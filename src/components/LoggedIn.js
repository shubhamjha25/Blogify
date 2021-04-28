import React from 'react';

const LoggedIn = () => {

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px"
    }
    
    return (
        <div style={style}>
            <img src="https://i.vippng.com/png/small/65-650489_png-file-svg-logged-in-icon-png.png" alt="Please Login" />
            <h1>ERROR! You must be logged in to view this content.</h1>
        </div>
    );
}

export default LoggedIn;