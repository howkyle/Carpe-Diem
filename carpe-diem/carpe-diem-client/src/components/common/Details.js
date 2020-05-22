import React from 'react';

const Details = (props) => {
    return (
        <div class="details">
            <h1 class="title">{props.title}</h1>

            <div class="text-content-box">{props.children}</div>

        </div>
    );
};

export default Details