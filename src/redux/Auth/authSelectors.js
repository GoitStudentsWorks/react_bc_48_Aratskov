export const getAuthStatus = state => Boolean(state.auth.token);

export const getErrorStatus = state => Boolean(state.auth.error);

export const getName = state => state.auth.user.name