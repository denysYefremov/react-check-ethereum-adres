// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';

import './button.css';

const acceptableButtonTypes: string[] = ['submit', 'button'];

type ButtonTypes = {
    type: string,
    className: string,
    children: string | Node,
};

const Button = ({ type, className, children, ...rest }: ButtonTypes): Node => {
    let buttonClassName = 'custom-button';
    switch (type) {
        case 'submit':
            buttonClassName += ' blue';
            break;
        case 'cancel':
            buttonClassName += ' red';
            break;
        default:
            buttonClassName += ' default';
            break;
    }

    return (
        <button
            className={classNames(className, buttonClassName)}
            type={acceptableButtonTypes.includes(type) ? type : 'button'}
            { ...rest }
        >
            { children }
        </button>
    );
};

export default Button;
