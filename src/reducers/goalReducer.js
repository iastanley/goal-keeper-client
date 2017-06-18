//GOAL REDUCER GOES HERE
// eventually import actions

export const initialState = {
  1: {
    _id: 1,
    title: 'Goal 1',
    color: '#f00',
    tasks: [
      {
        _id: 10,
        name: 'Do this first',
        completed: true
      },
      {
        _id: 11,
        name: 'Do this second',
        completed: false
      }
    ]
  }, // end of goal _id: 1
  2: {
    _id: 2,
    title: 'Goal 2',
    color: '#f0f',
    tasks: [
      {
        _id: 12,
        name: 'Do this first',
        completed: true
      },
      {
        _id: 13,
        name: 'Do this second',
        completed: false
      },
      {
        _id: 14,
        name: 'Do this second',
        completed: false
      },
      {
        _id: 15,
        name: 'Do this second',
        completed: false
      }

    ]
  }, // end of goal _id: 2
  3: {
    _id: 3,
    title: 'Goal 3',
    color: '#0f0',
    tasks: [
      {
        _id: 16,
        name: 'Do this first',
        completed: true
      },
      {
        _id: 17,
        name: 'Do this second',
        completed: false
      }
    ]
  } // end of goal _id: 2
}

export default function goalReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
