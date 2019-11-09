

//action creartor
//동적으로 작동> action creartor , action을 만드는 function
// action creator: 액션을 동적으로 생성하는 펑션
export const updateUser = (name) => ({
  type: 'updateUser',
  payload: name
});