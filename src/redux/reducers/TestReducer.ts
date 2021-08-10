import { TEST_ACTION_TYPE } from "../actions/TestActions";

const initialState = {
  numValue: 0
}

const testReducer = (state = initialState, action:any) => {
  switch(action.type) {
    case TEST_ACTION_TYPE: {
      return {
        ...state,
        numValue: action.val
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default testReducer;
