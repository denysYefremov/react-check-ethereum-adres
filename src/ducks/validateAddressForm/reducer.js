import { SAVE_CHECKING_RESULT } from './constants';

const defaultState = {
    isAddressValid: true,
};

const validationForm = (state = defaultState, { type, payload }) => {
    switch (type) {
        case SAVE_CHECKING_RESULT: {
            const { isAddressValid } = payload;
            return {
                ...state,
                isAddressValid,
            };
        }
        default: {
            return state;
        }
    }
};

export default validationForm;
