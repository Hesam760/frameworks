import React, { Component } from 'react';
import { BsPlusCircleFill , BsDashCircleFill } from "react-icons/bs";
class ReactAd extends Component {
    render() { 
        return (
            <>
            <h6 >Advatages : </h6>
            <hr/>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 1) 
                Creating Dynamic Web Applications Becomes Easier
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
               2) Reusable Components
            </p>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                A ReactJS web application is made up of multiple components, and each component has its own logic and controls. These components are responsible for outputting a small, reusable piece of HTML code which can be reused wherever you need them. The reusable code helps to make your apps easier to develop and maintain. These Components can be nested with other components to allow complex applications to be built of simple building blocks. ReactJS uses virtual DOM based mechanism to fill data in HTML DOM. The virtual DOM works fast as it only changes individual DOM elements instead of reloading complete DOM every time.
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                3) Performance Enhancement
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                4) Known to be SEO Friendly
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                5) The Benefit of Having JavaScript Library
            </p>
            <h6>Disadvantages : </h6>
            <hr/>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                1) Framework updated weekly / monthly (Development speed) 
            </p>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                2) JSX (JavaScript Extention)
            </p>
            </>
        );
    }
}
 
export default ReactAd;