export const getAuth = (state) => state.auth.userAuth.idToken;

export const getError = (state) => state.auth.errorAuth;

export const getEmail = (state) => state.user.email;

export const getDisplayName = (state) => state.user.displayName;
