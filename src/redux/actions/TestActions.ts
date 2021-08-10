
export const TEST_ACTION_TYPE = "TEST_ACTION_TYPE";

export const addAction = (val: any) => {
  return {
    type: TEST_ACTION_TYPE,
    val: val
  }
}