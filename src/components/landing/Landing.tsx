import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Landing: React.FC = () => {
    const Landing = styled.div`
        height: 100%;
        overflow-x: hidden;
    `
    
    const Title = styled.div`
        position: relative;
        font-size: 40px;
        width: 16em;
        height: 25%;
        margin: 0 auto;
        border-right: 2px solid rgba(255, 255, 255, 0);
        overflow: hidden;
        transform: translateY(-50%);
        font-weight: 400;
        animation: typewriter 1s steps(9) 1s 1 normal both,
        blinkTextCursor 1s steps(9) infinite normal;

        @keyframes typewriter {
            from {
                width: 0;
            }
            to {
                width: 190px;
            }
        }
        
        @keyframes blinkTextCursor {
            0% {
                border-right-color: rgba(0, 0, 0, 1);
            }
            25% {
                border-right-color: rgba(0, 0, 0, 1);
            }
            50% {
                border-right-color: rgba(0, 0, 0, 1);
            }
            75% {
                border-right-color: transparent;
            }
            100% {
                border-right-color: transparent;
            }
        }
    `

    const Jumbotron = styled.div`
        height: 350px;

        @media screen and (max-width: 575px) {
            .jumbotron {
                padding-top: 60px;
            }
        }
    `

    return (
        <Landing className="Landing">
            <div className="container h-100 text-center">
                <div className="row align-items-center h-100">
                    <Jumbotron className="col-lg-6 col-md-8 col-10 offset-lg-3 offset-md-2 offset-1 jumbotron text-center mt-5 mt-xl-0">
                        <Title className="anim-typewriter">
                            Propguard
                        </Title>
                        <small>A webapp that teaches people how to use Dronekit and Python to start and launch the drones</small> <br></br>
                        <Link to="/tutorial"><button className="btn btn-primary col-6 mt-5">Start Tutorial</button></Link>
                        <div className="mt-4"><a href="https://github.com/MissouriMRR" target="_blank" rel="noopener noreferrer">Wiki</a></div>
                    </Jumbotron>
                </div>
            </div>
        </Landing>
    );
}

export default Landing;
