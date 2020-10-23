import React from 'react';

function Header(props) {

    console.log(props);
    return (
        <>
            <h5 className="danger">
                {props.name} is {props.age} years old.
            </h5>
        </>
    )
}

export default Header;