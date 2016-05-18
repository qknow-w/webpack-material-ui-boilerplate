

const initialState =  {
  counter: 0

}

export default function Counter(state = initialState, action){
  console.log(state);
  switch (action.type) {
    case "ADD":
    return Object.assign({},state,{
        counter: state.counter +1
      })
      break;
    default:
    return state;

  }
}
