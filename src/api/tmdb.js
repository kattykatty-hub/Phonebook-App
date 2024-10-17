// src/api/tmdb.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6710f760a85f4164ef302574.mockapi.io',
});

export const getContacts = () => instance.get('/contacts');
export const createContact = (contact) => instance.post('/contacts', contact);
export const removeContact = (id) => instance.delete(`/contacts/${id}`);
