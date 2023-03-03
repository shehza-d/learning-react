import { setUserEmail } from "../reducers/user";

const basePath = "https://backend/backend";//here you may use backend url

export const UserData = () => async (dispatch) => {
  try {

    dispatch(setUserEmail({email:email}));
    return {
      success: 'success',
    }; 
  } catch (err) {
    return {
      error: err,
    };
  }
};
