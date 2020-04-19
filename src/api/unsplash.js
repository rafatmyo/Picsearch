import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID aLtIdyWrZMblxcsA9Hho14-AVHdAzP_5dF58fhxEpbo'
  }
});