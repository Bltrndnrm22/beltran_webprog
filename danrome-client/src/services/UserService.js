import constants from '../constants';

const HOST = String(constants.HOST || '').replace(/\/$/, '');
const BASE_URL = `${HOST}/api/users`;

const request = async (path, options = {}) => {
  let response;

  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch {
    throw new Error(`Cannot connect to API at ${BASE_URL}. Check that danrome-server is running.`);
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'Request failed');
    error.response = { data, status: response.status };
    throw error;
  }

  return { data, status: response.status };
};

export const fetchUsers = () => request('/');
export const createUser = (user) =>
  request('/', { method: 'POST', body: JSON.stringify(user) });
export const signupUser = (user) =>
  request('/signup', { method: 'POST', body: JSON.stringify(user) });
export const updateUser = (id, user) =>
  request(`/${id}`, { method: 'PUT', body: JSON.stringify(user) });
export const deleteUser = (id) => request(`/${id}`, { method: 'DELETE' });
export const loginUser = (credentials) =>
  request('/login', { method: 'POST', body: JSON.stringify(credentials) });
