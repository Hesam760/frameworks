import React, { Component } from 'react';
import { BsPlusCircleFill , BsDashCircleFill } from "react-icons/bs";
class Angular extends Component {
    render() { 
        return (
        <>
            <h6 >Advatages : </h6>
            <hr/>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                1) It provides the capability to create Single Page Application in a very clean and maintainable way.
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                2) It provides data binding capability to HTML. Thus, it gives user a rich and responsive experience.
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                3) AngularJS uses dependency injection and make use of separation of concerns.
            </p>
            <BsPlusCircleFill color='green' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}> 
                4) support by Google 
            </p>
            <h6 >Disadvatages : </h6>
            <hr/>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                1)  Not Secure ! Being JavaScript only framework, application written in AngularJS are not safe. Server side authentication and authorization is must to keep an application secure.
            </p>
            <BsDashCircleFill color='red' size='1.2em'/>
            <p style={{fontFamily:'arial' , fontSize:'1.1em', padding:'5px'}}>
                2) Not degradable ! If the user of your application disables JavaScript, then nothing would be visible, except the basic page.
            </p>
        </>);
    }
}
 
export default Angular;
