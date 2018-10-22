import store from './index'
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return false;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return false;
  }
};

export const saveState = (state) => {
  try {
     const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export const deleteit = () => {
  try {
    localStorage.clear();
  } catch {
    // ignore write errors
  }
};
