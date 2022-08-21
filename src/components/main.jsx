import React, { Component } from 'react';
import styles from '../css/mystyle.module.css';
import Collapse from './collapsible';
import ProgressBar from './progressBar';
import Table from './table';
import Web from './websitesUses';
class Main extends Component {
    render() { 
        return (
        <>
            <body className={styles.body}>
                <main className={styles.main}>
                    <h1 className={styles.h1}> This is the difference of 3 frameworks of Front-End !  </h1>
                </main>
                <Collapse/>
                <br/>
                <ProgressBar/>
                <Table/>
                <Web/>
            </body>     
        </>
        );
    }
}
 
export default Main;