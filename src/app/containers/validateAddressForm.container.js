import { connect } from 'react-redux';
import ValidateAddressForm from '../components/validateAddressForm/validateAddressForm.react';

import { operations } from '../../ducks/validateAddressForm';

import { getFormStatus } from '../selectors/validationField.selectors';

const mapStateToProps = state => ({
    isAddressValid: getFormStatus(state),
});

const mapDispatchToProps = {
    submitForm: operations.checkAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateAddressForm);
