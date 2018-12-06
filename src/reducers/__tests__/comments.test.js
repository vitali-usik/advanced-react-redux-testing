import { SAVE_COMMENT } from './../../actions/types';
import commentsReducer from './../../reducers/comments';

it('handles saveComment action', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'unknow'});

  expect(newState).toEqual([]);
});
