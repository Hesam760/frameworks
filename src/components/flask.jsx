import React, { Component } from 'react';
import { BsPlusCircleFill , BsDashCircleFill } from "react-icons/bs";

class Flask extends Component {
    render() { 
        return (
            <>
            <h6 >Advatages : </h6>
            <hr/>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                1) higher flexibility 
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                2) high scalability for simple web pages  
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                3) good for small codes   
            </p>
            <h6 >Disadvatages : </h6>
            <hr/>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                1) more potential for security risks 
            </p>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                2) slower MVC development in most cases 
            </p> 
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                3) more complicated for larger projects and codes 
            </p>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                4) Most uses in Back-End development and server
            </p>
            </>
        );
    }
}
 
export default Flask;