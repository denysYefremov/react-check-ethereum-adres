const getValidationForm = state => state.validationForm;

export const getFormStatus = state => getValidationForm(state).isAddressValid;
