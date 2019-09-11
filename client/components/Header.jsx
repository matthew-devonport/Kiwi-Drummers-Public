import React from 'react'
import {Link} from 'react-router-dom'


function Header(props) {
    return (
      <div>
        <nav>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <Link to='/form'>Add a drummer!</Link>
        </nav>
      </div>
    );

}

export default Header