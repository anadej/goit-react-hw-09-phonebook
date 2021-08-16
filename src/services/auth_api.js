import axios from "axios";
const API_KEY = "AIzaSyDZKNiswL8RQXzhTtbuSF2zZEn4tMwubTI";
const register_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const login_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const baseURL = "https://phonebook-d66d1-default-rtdb.firebaseio.com";

export const registerUser = async (user) => {
  try {
    const res = await axios.post(register_URL, {
      ...user,
      returnSecureToken: true,
    });
    const addUserToDB = await axios.post(baseURL + "/users.json", {
      email: user.email,
    });
    return {
      registerData: res.data,
      id: addUserToDB.data.name,
    };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(login_URL, {
      ...user,
      returnSecureToken: true,
    });
    return { loginData: res.data };
  } catch (error) {
    throw error;
  }
};
