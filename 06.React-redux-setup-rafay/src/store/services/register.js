import { setUserEmail } from "../reducers/register";

const basePath = "https://backend/backend";//here you may use backend url

export const register = () => async (dispatch) => {
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
