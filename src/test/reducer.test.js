import state from "./fixture";
import reducer from "../reducer";

describe("testing reducer", () => {
  it("should get actions", () => {//done
    //we can use axios to get data from API
    const results = reducer(
      { actions: [], currentAction: {} },
      { type: "GET_ACTIONS", payload: state.actions }
    );
    expect(results.actions).toEqual(state.actions);//done() for async
  });
});
