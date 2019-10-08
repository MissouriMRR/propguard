import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import terminal from './landing-images/terminal.gif';

const Landing: React.FC = () => {
    const [display, setDisplay] = useState('block');

    const startTutorial = () => {
        setDisplay('none');
    }

    return (
        <div className="Landing" style={{display: display}}>
            <div className="container h-100 text-center">
                <div className="row align-items-center h-100">
                    <div className="col-lg-6 col-md-8 col-10 offset-lg-3 offset-md-2 offset-1 jumbotron text-center mt-5 mt-xl-0">
                        <h1 className="title anim-typewriter">
                            Propguard
                        </h1>
                        <small>A webapp that teaches people how to use Dronekit and Python to start and launch the drones</small> <br></br>
                        <Link to="/tutorial"><button className="btn btn-primary col-6 mt-5" onClick={startTutorial}>Start Tutorial</button></Link>
                        <div className="mt-4"><a href="#">Wiki</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
