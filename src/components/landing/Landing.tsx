import React from 'react';
import './Landing.css';

const Landing: React.FC = () => {
    return (
        <div className="Landing">
            <div className="row h-75">
                <div className="col-xl-6">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-8 mx-auto text-center">
                                <div className="jumbotron text-center mt-5 mt-xl-0">
                                    <h1 className="title">
                                        Propguard
                                    </h1>
                                    <small>A webapp that teaches people how to use Dronekit and Python to start and launch the drones</small> <br></br>
                                    <button className="btn btn-primary col-6 mt-5">Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="terminal-container col-lg-12">
                                <img className="terminal" src="https://i.github-camo.com/d770ff03b2e7f22079b485c24f9fe0963fd8acde/68747470733a2f2f6769746875622e636f6d2f706c6174666f726d696f2f706c6174666f726d696f2d61746f6d2d6964652d7465726d696e616c2f7261772f6d61737465722f7265736f75726365732f64656d6f2e676966" alt="Terminal"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
