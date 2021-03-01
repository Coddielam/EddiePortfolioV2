import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Nav = () => {
    const [compassSpinned, setCompassSpinned] = useState('');
    const handleOnClick = () => setCompassSpinned(!compassSpinned);
    return(
        <nav id="left-corner-nav-button" role="button" onClick={handleOnClick}>
            <FontAwesomeIcon icon="compass" className={compassSpinned === '' ? '' : compassSpinned === true ? ' active zoomed' : 'inactive unzoomed'}/>

            <ul id="nav-list" className={`${compassSpinned === '' ? '' : compassSpinned === true ? ' show' : ' unshow'}`}>
                <li className="nav-item">Home</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Resume</li>
                <li className="nav-item">Background</li>
            </ul>
        </nav>
    )
}

export default Nav;