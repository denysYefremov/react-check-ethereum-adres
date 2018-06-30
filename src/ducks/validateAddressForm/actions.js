import { SAVE_CHECKING_RESULT } from './constants';

export const saveCheckingResult = result => ({
    type: SAVE_CHECKING_RESULT,
    payload: {
        isAddressValid: result
    },
});
