import {
  ADD_ITEM_TO_CART,
  DECREASE_ITEM_QUANTITY,
  EMPTY_CART,
  INCREASE_ITEM_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEMS,
  UPDATE_USER_INFOS,
} from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: (state.cartItems || []).concat([action.item]),
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.productVariant.id !== action.productVariantId) {
            return item;
          }

          return {
            ...item,
            amount: item.amount - 1,
          };
        }),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.productVariant.id !== action.productVariantId) {
            return item;
          }

          return {
            ...item,
            amount: item.amount + 1,
          };
        }),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.productVariant.id !== action.productVariantId,
        ),
      };
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case UPDATE_USER_INFOS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
