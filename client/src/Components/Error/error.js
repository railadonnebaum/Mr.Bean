import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import error from '../../images/backgrounds/error.png';
import './error.css';
function  Error(params) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);
    return(
         <div
            className="image"
            style={{
                backgroundImage: `url(${error})`,
            }}
        >
        <h5 className="error"></h5>
        <h5 className="number">404</h5>
        <h5 className="errorTitle">whoops... Page Not Found:(</h5>
        <Link to="/"><button className="errorButton">GO HOME</button></Link>
        </div>
    )
}
export default Error