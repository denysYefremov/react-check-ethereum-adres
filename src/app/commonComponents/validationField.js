// @flow
import React, { type Node } from "react";
import type { FieldProps } from 'redux-form'
import classNames from 'classnames';

import './validationField.css';

type ValidationFieldTypes = {
    label: string,
    type: string,
} & FieldProps;

const ValidationField = ({
    input,
    label,
    type,
    meta: { touched, error }
 }: ValidationFieldTypes): Node => (
    <div className="validation-field">
        <label className="validation-field--label">{label}</label>
        <div className="validation-field--input-wrapper">
            <input className={classNames("validation-field--input-wrapper--input", { error: touched && error })} {...input} placeholder={label} type={type} />
            {touched && (error && <span className="validation-field--input-wrapper--error">{error}</span>)}
        </div>
    </div>
);

export default ValidationField;
