import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
class Web extends Component {
    render() { 
        return (
        <> 
        <div class="container d-flex justify-content-center">
            <div class="row p-4">
                <h4 className='d-flex justify-content-center' style={{color:'white',marginTop:'2em',marginBottom:'2em',fontFamily:'arial'}}> Popular websites that using these frameworks : </h4>
                <div class="col-sm">
                    <p style={{color:'white',fontSize:'1.1em'}}>React : </p>
                    <SocialIcon url='https://instagram.com' style={{marginRight:'2em'}}/>
                    <SocialIcon url='https://facebook.com' style={{marginRight:'2em'}}/>
                    <SocialIcon url='https://whatsapp.com'/>
                </div>
                <div class="col-sm">
                    <p style={{color:'white',fontSize:'1.1em'}}>Angular : </p>
                    <SocialIcon url='https://google.com' style={{marginRight:'2em'}}/> 
                    <SocialIcon url='https://paypal.com' style={{marginRight:'2em'}}/>
                    <SocialIcon url='https://weather.com'/>
                </div>
                <div class="col-sm">
                    <p style={{color:'white',fontSize:'1.1em'}}>Flask : </p>
                    <SocialIcon url='https://pinterest.com' style={{marginRight:'2em'}}/> 
                    <SocialIcon url='https://ibm.com' style={{marginRight:'2em'}}/>
                </div>
            </div>
        </div>
        </>
        );
    }
}
 
export default Web;