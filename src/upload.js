import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory
  } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";



let styles = {
  container: {
      height: "100%",
      width: "100%",
      padding: "0",
      backgroundColor: "white",
      color: "white",
  },
  uploader: {
    backgroundColor: "red",
  },
  label: {
    backgroundImage: "url(\"https://www.pngitem.com/pimgs/m/95-958057_whos-that-pokemon-hd-png-download.png\")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    left: "10%",
    top: "200px",
    height: "280px",
    cursor: "pointer",
  },
  label: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    left: "10%",
    top: "200px",
    height: "280px",
    cursor: "pointer",
  }
}



class Upload extends React.Component {

    state = {
      imageUrl: 'https://www.pngitem.com/pimgs/m/95-958057_whos-that-pokemon-hd-png-download.png',
      model: null,
      prediction: 'NO PREDICTION'
    }

    componentDidMount() {
      this.getModel();
    }
    
    async getModel() {
      const newModel = await tf.loadLayersModel('http://localhost:8000/model.json')
      this.setState({model: newModel})
      console.log('got model')
    }

    handleUpload = (event) => {
      const { files } = event.target;
      var newImage = event.target.files[0]
      if (files.length > 0) {
        const url = URL.createObjectURL(event.target.files[0]);
        this.setState({imageUrl: url})
        console.log(this.state)

        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        img.onload = () => {
          this.getPrediction(img)
        }
      }
    };
    
    async getPrediction(img) {
        console.log(img)
        var testImage = tf.browser.fromPixels(img).resizeBilinear([96,96])
        testImage = tf.reshape(testImage, [1,96,96,3])
        const results = await this.state.model.predict(testImage);
        const value = results.arraySync()[0];
        console.log(value)
        var map = ['Bulbasaur', 'Charmander', 'Pikachu', 'Squirtle', 'Vileplume']
        for(var i = 0; i < value.length; ++i) {
          if(value[i] == 1) {
            this.setState({prediction: map[i]})
            return;
          }
          console.log(value[i])
        }
    }
    
    render() {
        return (
            <div style={styles.container}>
              <label htmlFor="upload" id="pokelabel" style={{
                ...styles.label,
                backgroundImage: "url(\"" + this.state.imageUrl + "\")"
              }}>
              </label>
              <input
                style={{display: "none"}}
                type="file"
                accept="image/*"
                capture="camera"
                onChange={this.handleUpload}
                id="upload"
              />
              <div style={{ color: "black" }}>{this.state.prediction}</div>
            </div>
        )
        
    }

}

export default Upload
