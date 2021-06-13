import moment from 'moment';
import jwt_decode from 'jwt-decode';

const TOKEN_DATA = '__MEDDYJWTUSRID';

export const isSignedIn = () => {
  let token = getUserFromTokenData();
  const now = moment();
  if (token && moment(token.exp).isBefore(now)) {
    return true;
  }
};

export const getTokenData = () => {
  try {
    return JSON.parse(sessionStorage.getItem(TOKEN_DATA));
  } catch (err) {
    console.error(err);
  }
};

export const getUserFromTokenData = () => {
  const savedToken = sessionStorage.getItem(TOKEN_DATA);
  let decodedUserData = null;
  if (savedToken) {
    const token = JSON.parse(savedToken);

    decodedUserData = jwt_decode(token);
    decodedUserData.SystemRoles = JSON.parse(decodedUserData.SystemRolesJson);
  }

  return decodedUserData;
};

export const saveTokenData = (tokenData) => {
  try {
    sessionStorage.setItem(TOKEN_DATA, JSON.stringify(tokenData));
  } catch (err) {
    console.error(err);
  }
};

export const purgeTokenData = () => {
  sessionStorage.removeItem(TOKEN_DATA);
};

export default {
  isSignedIn,
  getUserFromTokenData,
  saveTokenData,
  purgeTokenData,
  getTokenData,
};
