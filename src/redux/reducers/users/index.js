import {
    UPDATE_USER_FORM
} from './constants';

//function deepCopy(obj) {
// if (typeof obj !== 'object' || obj === null) {
//     return obj;
// }
// else if (obj instanceof Date) {
//     return new Date(obj.getTime());
// }
// else if (obj instanceof Array) {
//     return obj.reduce((arr, item, i) => {
//         arr[i] = deepCopy(item);
//         return arr;
//     }, []);
// }


// if (obj instanceof Object) {
//     return Object.keys(obj).reduce((acc, key) => {
//         acc[key] = deepCopy(obj[key]);
//         return acc;
//     }, {});
// }
//}

const initialForm = {
    name: '',
    job: ''
};

const initialState = {
    initialized: false,

    form: initialForm,
    result: null,

    loading: false,
    loaded: false,
};

export default function donation(state = initialState, action) {
    switch (action.type) {

        case UPDATE_USER_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload,
                }
            };
        default:
            return state;
    }
}