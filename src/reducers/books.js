import * as types from '../actions/actionsType';

const initState = {
  1: {
    id: Math.random(),
    title: 'test1',
    category: 'test1Content',
  },
  2: {
    id: Math.random(),
    title: 'test2',
    category: 'test2Content',
  },
  3: {
    id: Math.random(),
    title: 'test3',
    category: 'test3Content',
  },
};

export default (state = initState, action) => {
  switch (action.types) {
    case types.FETCH_BOOK:
      console.log("FETCH BOOKS");
      return { ...state };
      break;
    case 'CREATE_BOOK':
      console.log("ACTION PAYLOAD from reducer: ", action.payload);
      const id = action.payload.id;
      return {...state, [action.payload.id]: [action.payload]}
      break;
    default:
      return state;
  }
};