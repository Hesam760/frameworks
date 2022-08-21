import React, { Component } from 'react';
import { FaReact , FaAngular} from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import ReactAd from './react';
import Angular from './angular';
import Flask from './flask';
class Collapse extends Component {
    render() { 
        return (
            <>
            <div className="container-fluid" style={{width:'70%'}}>
                <h2 className='my-3' style={{color:'white'}}> Frameworks :  </h2>
                <p style={{color:'white',fontSize:'1.1em'}}> On the blow we have 3 framework like <strong> React </strong> , 
                <strong> Angular</strong> ,  
                <strong> Flask</strong> and show advantages and disadvantages : 
                </p>
                <div id="accordion">
                        <div className="card">
                            <div className="card-header">
                                <FaReact color='cyan' size='2em'/>
                                <a className="btn" data-bs-toggle="collapse" href="#collapseOne" style={{color:'blue'}}>
                                    React JS
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                <div className="card-body">
                                    <ReactAd/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                                <div className="card-header">
                                    <FaAngular color='red' size='2em'/>
                                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo" style={{color:'blue'}}>
                                        Angular JS 
                                    </a>
                                </div>
                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    <Angular/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <SiFlask color='black' size='2em'/>
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree" style={{color:'blue'}}>
                                    Flask Python
                                </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    <Flask/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Collapse;