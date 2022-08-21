import React, { Component } from 'react';

class Table extends Component {
    render() { 
        return (
            <>
            <div className="container mt-3" style={{color:'white', paddingTop:'5em'}}>
                <h2 style={{textAlign:'center',display:'flex',justifyContent:'center',marginBottom:'1.5em'}}>Table of their difference </h2>
                <div className="table-responsive">          
                <table className="table table-bordred" style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>React</th>
                                <th>Angular</th>
                                <th>Flask</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>side of use </td>
                                <td>Front</td>
                                <td>Front</td>
                                <td>Most Back</td>
                            </tr>
                            <tr>
                                <td>flexibility</td>
                                <td>good</td>
                                <td>good</td>
                                <td>good</td>
                            </tr>
                            <tr>
                                <td>SPA</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>perfomance </td>
                                <td>So Fast</td>
                                <td>good</td>
                                <td>Normal</td>
                            </tr>
                            <tr>
                                <td>MVC</td>
                                <td>well</td>
                                <td>well</td>
                                <td>not good</td>
                            </tr>
                            <tr>
                                <td>SEO</td>
                                <td>normal </td>
                                <td>normal</td>
                                <td>normal</td>
                            </tr>
                            <tr>
                                <td>Data binding </td>
                                <td>one-way </td>
                                <td>two-way</td>
                                <td>one-way</td>
                            </tr>
                            <tr>
                                <td>DOM</td>
                                <td>Virtual DOM</td>
                                <td>Real DOM</td>
                                <td>Real DOM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        );
    }
}
 
export default Table;