// @flow
import React from 'react'
import ValidateAddressForm from './validateAddressForm.view'

import type { InputValuesTypes } from '../../types/validateAddressForm.types';

type PropTypes = {
    submitForm: (string) => void,
    isAddressValid: boolean,
};

class ContactPage extends React.Component<PropTypes> {
    submit = (values: InputValuesTypes): void => {
        const { submitForm } = this.props;
        submitForm(values.ethereumAddress);
    };
    render() {
        const { isAddressValid } = this.props;
        return <ValidateAddressForm isAddressValid={isAddressValid} onSubmit={this.submit} />
    };
}

export default ContactPage;
