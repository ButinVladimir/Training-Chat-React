export default function compose(...args) {
  return (state, action) => {
    let resultState = state;
    args.forEach((reducer) => { resultState = reducer(resultState, action); });

    return resultState;
  };
}
