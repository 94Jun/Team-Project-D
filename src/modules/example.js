import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };

export const example = createSlice({
  //redux-toolkit을 사용한 예시 리듀서
  //삭제해도 무방함
  name: "example",
  initialState,
  reducers: {
    INCREMENT: (state) => {
      state.value += 1;
      //toolkit을 이용하는 경우 상태보존이 되기 때문에 값에 직접 접근하여 수정 가능
    },
    INCREMENT_BY_AMOUNT: (state, action) => {
      state.value = action.payload;
      //외부에서 값을 들고 오고 싶을때 action 매개변수 사용
      //매개변수에 입력된 값은 자동으로 action.payload에 저장
      //action은 자동으로 인식되어 함수로 만들어짐
    },
  },
});
//createrSlice에 초기값과 redeucer 값이 동시에 들어감

export const { INCREMENT, INCREMENT_BY_AMOUNT } = example.actions;
export default example.reducer;
