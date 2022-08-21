import React, { Component } from 'react';
import '../css/progressBar.css';
class ProgressBar extends Component {
    render() { 
        return (
            <>
            <div className="container-fluid" style={{display:'flex',justifyContent:'center'}}>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mx-4">
                        <p style={{color: 'cyan',textAlign:'center',padding:'20px',fontSize:'1.3em'}}>React popularity : </p>
                        <div className="progress blue p-4">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">70%</div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mx-4">
                    <p style={{color: 'red',textAlign:'center',padding:'20px',fontSize:'1.3em'}}> Angular popularity : </p>
                        <div className="progress yellow">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">55%</div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mx-4">
                    <p style={{color: 'white',textAlign:'center',padding:'20px',fontSize:'1.3em'}}>Flask <br/> popularity : </p>
                        <div className="progress green">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">50%</div>
                        </div>
                    </div>
                 </div>
            </div>  
            </>
        );
    }
}
 
export default ProgressBar;