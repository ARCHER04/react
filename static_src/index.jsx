import React from 'react';
import ReactDOM from 'react-dom';

const content = 'наконец хоть что-то заработало';

const Component = (props) => <h1 className="element">{props.content}</h1>;

ReactDOM.render(
    <Component content={content} />,
    document.getElementById('root'),
);