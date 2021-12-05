// redux
import { constants } from "@redux";

// constants
const {
    METHOD_MGTEST,
} = constants;

export const methodMgTest = (state = null, action) => {
    switch (action.type) {
        case METHOD_MGTEST:
            return action.payload;
        default:
            return state;
    }
};