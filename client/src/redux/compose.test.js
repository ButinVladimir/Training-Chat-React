import compose from './compose';

describe('compose', () => {
  it('combines result from reducers', () => {
    const reducer1 = state => ({ ...state, state1: { a: 'a' } });
    const reducer2 = state => ({ ...state, state2: { b: 'b' } });

    const state = compose(reducer1, reducer2)({});
    expect(state).toEqual({
      state1: { a: 'a' },
      state2: { b: 'b' },
    });
  });
});
