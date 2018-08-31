const initialState = {
  startDate: null,
  endDate: null,
  resultBetweenDates: null,
  firstName: null,
  secondName: null,
  userContacts: {
    phoneNumber: null,
    email: null,
    links: [],
    linkedIn: null,
    gitHub: null,
  }
};

export default function indexreducer(state = initialState, action) {
  switch (action.type) {
    case 'SOME':
      return Object.assign({value: state.value + action.payload},);

    default:
      return state;
  }
}
