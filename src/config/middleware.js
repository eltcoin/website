export default store => next => action => {
  const previousCartItems = store.getState().cartItems;

  next(action);

  const nextCartItems = store.getState().cartItems;

  if (nextCartItems !== previousCartItems) {
    window.localStorage.setItem('cartItems', JSON.stringify(nextCartItems));
  }
};
