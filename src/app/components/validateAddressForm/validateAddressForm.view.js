// @flow
import React, { type Node } from 'react'
import { Field, reduxForm } from 'redux-form'
import classNames from 'classnames';

import { ValidationField, Button } from '../../commonComponents/index';

import type { InputValuesTypes, ValidateAddressFormTypes } from '../../types/validateAddressForm.types';

import { isAddressHasValidStructure } from './validateAddressForm';

import './validateAddressForm.css';

const validate = (values: InputValuesTypes): InputValuesTypes => {
    const errors = {};
    if (values.ethereumAddress == null) {
        errors.ethereumAddress = 'Please provide Ethereum address';
    } else if (!isAddressHasValidStructure(values.ethereumAddress)) {
        errors.ethereumAddress = 'This Ethereum address is invalid';
    }
    return errors
};

const ValidateAddressForm = ({ isAddressValid, handleSubmit, reset, pristine, submitting }: ValidateAddressFormTypes): Node => (
    <div className={classNames("validate-address", { error: !isAddressValid })}>
        <h3 className="validate-address--title">Ethereum address validator</h3>
        <span className="validate-address--error">Passed address is not valid Ethereum address</span>
        <form className="validate-address--form" onSubmit={handleSubmit}>
            <Field
                label="Ethereum address"
                name="ethereumAddress"
                type="text"
                component={ValidationField}
            />
            <div className="validate-address--button-wrapper">
                <Button
                    className="validate-address--button-wrapper--submit"
                    type="submit"
                    disabled={submitting}
                >
                    Check
                </Button>
                <Button
                    className="validate-address--button-wrapper--clear"
                    type="cancel"
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Clear
                </Button>
            </div>
        </form>
    </div>
);

export default reduxForm({
    // a unique name for the form
    form: 'ethereumAddress',
    validate,
})(ValidateAddressForm);
