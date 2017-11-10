export const localStorageMiddleware = store => next => action => {
  const previousCartItems = store.getState().cartItems;
  const previousUser = store.getState().user;

  next(action);

  const nextCartItems = store.getState().cartItems;
  const nextUser = store.getState().user;

  if (nextCartItems !== previousCartItems) {
    window.localStorage.setItem('cartItems', JSON.stringify(nextCartItems));
  }

  if (nextUser !== previousUser) {
    window.localStorage.setItem('user', JSON.stringify(nextUser));
  }
};
