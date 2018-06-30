import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import validationForm from './ducks/validateAddressForm';

export default combineReducers({
    form: formReducer,
    validationForm,
});
