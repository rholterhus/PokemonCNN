import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory
  } from "react-router-dom";


let styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        padding: "0",
    },
    middle: {
        width: "100%",
        height: "20%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
    },
    mainCircle: {
        position: "absolute",
        height: "150px",
        width: "150px", 
        borderRadius: "100px 100px 100px 100px", 
        backgroundColor: "black", 
    },
    centerLine: {
        position: "absolute",
        height: "5px",
        width: "100%", 
        padding: "0",
        backgroundColor: "black",
        zIndex: "10",
    },
    topSemiCircle: {
        position: "absolute",
        transform: "translate(0, -44px)", 
        height: "30px",
        width: "120px", 
        borderRadius: "100px 100px 0 0", 
        backgroundColor: "white", 
        cursor: "pointer",
    },
    bottomSemiCircle: {
        position: "absolute",
        transform: "translate(0, 44px)", 
        height: "30px",
        width: "120px", 
        borderRadius: "0 0 100px 100px", 
        backgroundColor: "white", 
        cursor: "pointer",
    },
    blackbar: {
        position: "absolute",
        backgroundColor: "black",
        height: "15%",
        width: "100%",
        padding: "0",
    }, 

}


class Main extends React.Component {

    state = {
        navigateToUpload: false,
        navigateToDraw: false,
    }

    setHovered = (e) => {
        e.target.style.backgroundColor = 'gray'
    }

    setUnhovered = (e) => {
        e.target.style.backgroundColor = 'white'
    }

    

    
    render() {

        if (this.state.navigateToUpload) {
            return <Redirect to="/upload" push={true}/>
        }

        if (this.state.navigateToDraw) {
            return <Redirect to="/draw" push={true}/>
        }

        return (
            <div style={styles.container}>
                <div style={styles.middle}>
                    <div style={styles.blackbar}></div>
                    <div style={styles.mainCircle}></div>
                    <div style={styles.centerLine}></div>
                    <div style={styles.topSemiCircle}
                         onMouseEnter={this.setHovered} 
                         onMouseLeave={this.setUnhovered}
                         onClick={() => this.setState({ navigateToUpload: true })}>
                        Upload Image
                    </div>
                    <div style={styles.bottomSemiCircle} 
                        onMouseEnter={this.setHovered} 
                        onMouseLeave={this.setUnhovered}
                        onClick={() => this.setState({ navigateToDraw: true })}>
                        Free Draw
                    </div>
                </div>
            </div>        
        )
        
    }

}

export default Main
