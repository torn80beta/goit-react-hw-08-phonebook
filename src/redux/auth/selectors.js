export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectRegistrationError = state => state.auth.registrationError;
export const selectLoginError = state => state.auth.loginError;
