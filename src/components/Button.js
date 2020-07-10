import React from 'react';

export default function Button(props) {
    return (
        <a className="waves-effect waves-light btn">{props.text}</a>
    )
}