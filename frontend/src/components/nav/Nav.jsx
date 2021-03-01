import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Nav = () => {
    const [compassSpinned, setCompassSpinned] = useState('');
    const handleOnClick = () => setCompassSpinned(!compassSpinned);
    return(
        <nav id="left-corner-nav-button" role="button" onClick={handleOnClick}>
            <FontAwesomeIcon icon="compass" className={compassSpinned === '' ? '' : compassSpinned === true ? ' active' : 'inactive'}/>
        </nav>
    )
}

export default Nav;