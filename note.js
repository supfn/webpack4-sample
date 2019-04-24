// combineReducers 返回的函数，等价于下面这个函数

function rootReducers(state = {}, action) {
  return {
    products: productsReducer(state.products, action),
    shoppingCart: cartReducer(state.shoppingCart, action),
    order: orderReducer(state.order, action),
  }
}


// bindActionCreators(actionCreators, dispatch)

function bindActionCreators(actionCreators, dispatch) {
  if (typeof dispatch !== "function") {
    throw new Error("dispatch must be function")
  }

  if (typeof actionCreators === "function") {
    return (...rest) => dispatch(actionCreators(...rest))
  } else if (Object.prototype.toString.call(actionCreators) === "[object Object]") {
    let result = {};
    for (let key in actionCreators) {
      if (actionCreators.hasOwnProperty(key)) {
        result[key] = (...rest) => dispatch(actionCreators[key](...rest));
      }
    }
    return result;
  } else {
    throw new Error("actionCreators should be function or plain object");
  }
}
