import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className='header'>
             <h1 onClick={()=>{window.scroll(0,0)}}>Recommendations</h1>
        </div>
    )
}

export default Header
