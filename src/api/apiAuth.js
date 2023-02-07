import axios from 'axios';

export const backend = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const registerUser = async body => {
  try {
    const { data } = await backend.post('/auth/sign-up', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const logInUser = async body => {
  try {
    const { data } = await backend.post('/auth/sign-in', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const logOutUser = async () => {
  try {
    const { data } = await backend.delete('/auth/sign-out');
    return data;
  } catch (error) {
    return error;
  }
};
