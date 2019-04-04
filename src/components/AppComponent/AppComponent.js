import React, {Component} from 'react'

import styles from './AppComponent.scss';


class AppComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={styles.main}>
            listo!
            </div>
        )
    }
}

export default AppComponent;