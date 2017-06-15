//GOAL REDUCER GOES HERE
// eventually import actions

export const initialState = {
  1: {
    id: 1,
    title: 'Goal 1',
    color: '#f00',
    tasks: [
      {
        id: 10,
        name: 'Do this first',
        complete: true
      },
      {
        id: 11,
        name: 'Do this second',
        complete: false
      }
    ]
  }, // end of goal id: 1
  2: {
    id: 2,
    title: 'Goal 2',
    color: '#f0f',
    tasks: [
      {
        id: 12,
        name: 'Do this first',
        complete: true
      },
      {
        id: 13,
        name: 'Do this second',
        complete: false
      },
      {
        id: 14,
        name: 'Do this second',
        complete: false
      },
      {
        id: 15,
        name: 'Do this second',
        complete: false
      }

    ]
  }, // end of goal id: 2
  3: {
    id: 3,
    title: 'Goal 3',
    color: '#0f0',
    tasks: [
      {
        id: 16,
        name: 'Do this first',
        complete: true
      },
      {
        id: 17,
        name: 'Do this second',
        complete: false
      }
    ]
  } // end of goal id: 2
}

export default function goalReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
