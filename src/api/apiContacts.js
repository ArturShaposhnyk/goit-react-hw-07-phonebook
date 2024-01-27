import axios from 'axios';

axios.defaults.baseURL = 'https://65ac4de7fcd1c9dcffc7c92d.mockapi.io/';

export const getAllContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContactApi = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactApi = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
