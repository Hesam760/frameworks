import React, { Component } from 'react';
import Main from './components/main';

class App extends Component {
    state= {
        loading: true,
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({loading:false});
          }, 3000);
        };
        
    render() { 
        return (
            <>
            {this.state.loading ? <div class="spinner-border text-danger" style={{width:'5rem',height:'5rem',position:'absolute', top:'42%',left:'49%'}}></div>
            : 
            <Main/>
            } 
            </>
        );
    }
}
 
export default App;