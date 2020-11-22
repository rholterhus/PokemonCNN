import React, { useState, useRef, useReducer } from "react";
import * as tf from "@tensorflow/tfjs";
import "./App.css";
import Main from "./mainComponent"
import Upload from "./upload"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const machine = {
  initial: "initial",
  states: {
    initial: { on: { next: "loadingModel" } },
    loadingModel: { on: { next: "modelReady" } },
    modelReady: { on: { next: "imageReady" } },
    imageReady: { on: { next: "identifying" }, showImage: true },
    identifying: { on: { next: "complete" } },
    complete: { on: { next: "modelReady" }, showImage: true, showResults: true }
  }
};

function App() {
  const [results, setResults] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [model, setModel] = useState(null);
  const imageRef = useRef();
  const inputRef = useRef();

  const reducer = (state, event) =>
    machine.states[state].on[event] || machine.initial;

  const [appState, dispatch] = useReducer(reducer, machine.initial);
  const next = () => dispatch("next");

  const loadModel = async () => {
    next();
    const model = await tf.loadLayersModel('http://localhost:8000/model.json')
    setModel(model);
    next();
  };

  const identify = async () => {
    next();
    var testImage = tf.browser.fromPixels(imageRef.current).resizeBilinear([96,96])
    testImage = tf.reshape(testImage, [1,96,96,3])
    const results = await model.predict(testImage);
    const value = results.arraySync();
    console.log(value)
    // setResults(results);
    // next();
  };

  const reset = async () => {
    setResults([]);
    next();
  };

  const upload = () => inputRef.current.click();

  const handleUpload = event => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0]);
      setImageURL(url);
      next();
    }
  };

  const actionButton = {
    initial: { action: loadModel, text: "Load Model" },
    loadingModel: { text: "Loading Model..." },
    modelReady: { action: upload, text: "Upload Image" },
    imageReady: { action: identify, text: "Identify Breed" },
    identifying: { text: "Identifying..." },
    complete: { action: reset, text: "Reset" }
  };

  const { showImage, showResults } = machine.states[appState];


  // <div>
  //     {showImage && <img src={imageURL} alt="upload-preview" ref={imageRef} />}
  //     <input
  //       type="file"
  //       accept="image/*"
  //       capture="camera"
  //       onChange={handleUpload}
  //       ref={inputRef}
  //     />
  //     {showResults && (
  //       <ul>
  //         {results.map(({ className, probability }) => (
  //           <li key={className}>{`${className}: %${(probability * 100).toFixed(
  //             2
  //           )}`}</li>
  //         ))}
  //       </ul>
  //     )}
  //     <button onClick={actionButton[appState].action || (() => {})}>
  //       {actionButton[appState].text}
  //     </button>
  //   </div>

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/upload">
            <Upload/>
          </Route>
          <Route path="/draw">
            <div>DRAW SCREEN!!!!!!</div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
