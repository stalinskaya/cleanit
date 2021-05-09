import React, { Component } from 'react';
import styles from './Main.module.css';
import start from '../start.svg';
import {Button} from 'react-bootstrap';

export class Main extends Component {

  render() {
    return(
      <div className="row">
        <div className="col-md-5 mt-xl-5">
            <h1 className={styles.Always}>always clean</h1>
            <h1 className={styles.Home}>HOME & OFFICE</h1>
            <p className={styles.Info}>It’s hard to find someone who enjoys cleaning. It takes a lot of energy, 
                time, and you always have to do it when there are so many other things 
                to do around you.</p>
            <p className={styles.Info}>Is it possible to make it so that your surroundings are clean, 
                but not to create a constant torture of cleaning? Of course it is!</p>
            <Button className={styles.Book}>
                Book Now
            </Button>
        </div>
        <div className="col text-right">
            <img src={start} className="img-fluid" alt="cleaner" />
        </div>
      </div>
    )
  }

}