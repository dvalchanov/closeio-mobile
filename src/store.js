let store = null;

function getStore() {
  return store;
}

export function setStore(newStore) {
  store = newStore;
}

export function getState() {
  return getStore().getState() || {};
}

export function dispatch(action) {
  getStore().dispatch(action);
}
