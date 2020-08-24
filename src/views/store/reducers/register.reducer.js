import * as Actions from '../actions';

const initialState = {
	success: false,
	error: {
		username: null,
		password: null
    },
    token: null
};

const register = (state = initialState, action) => {
	switch (action.type) {
		case Actions.REGISTER_SUCCESS: {
			return {
				...initialState,
                success: true,
                token: action.payload
			};
		}
		case Actions.REGISTER_ERROR: {
			return {
				success: false,
				error: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default register;