import React, {useState} from 'react';
import './Landing.css';
import terminal from './landing-images/terminal.gif';

const Landing: React.FC = () => {
    const [display, setDisplay] = useState('block');

    const startTutorial = () => {
        setDisplay('none');
    }

    return (
        <div className="Landing" style={{display: display}}>
            <div className="row h-75">
                <div className="col-xl-6">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-8 mx-auto text-center">
                                <div className="jumbotron text-center mt-5 mt-xl-0">
                                    <h1 className="title anim-typewriter">
                                        Propguard
                                    </h1>
                                    <small>A webapp that teaches people how to use Dronekit and Python to start and launch the drones</small> <br></br>
                                    <button className="btn btn-primary col-6 mt-5" onClick={startTutorial}>Start Tutorial</button>
                                    <div className="mt-4"><a href="#">Wiki</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="terminal-container col-lg-12">
                                <img className="terminal pb-5" src={terminal} alt="Terminal"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
