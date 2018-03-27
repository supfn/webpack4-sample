import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.child}> config.greetText: {config.greetText}</div>
                <div className={styles.nextChild}>nextChild wow</div>
            </div>
        );
    }
}

export default Greeter;

