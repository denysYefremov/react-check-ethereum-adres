import { isValidEthereumAddress } from '../../app/components/validateAddressForm/index';

import { saveCheckingResult } from './actions';

const checkAddress = address => dispatch => {
    const isAddressValid = isValidEthereumAddress(address);

    if (isAddressValid) {
        alert('This is valid address!');
    }

    dispatch(saveCheckingResult(isAddressValid));
};

export default {
    checkAddress,
};
