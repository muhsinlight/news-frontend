import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

const register = (username, email, password) => {
  return axios.post(`${API_URL}/auth/register`, {
    username,
    email,
    password,
  });
};

const login = async (identifier, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    identifier,
    password,
  });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response;
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
