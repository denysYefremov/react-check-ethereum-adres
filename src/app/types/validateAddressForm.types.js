// @flow
import type { FormProps } from 'redux-form'

export type InputValuesTypes = {
    ethereumAddress: string,
};

export type ValidateAddressFormTypes = {
    handleSubmit: (InputValuesTypes) => *,
    isAddressValid: boolean,
} & FormProps;
