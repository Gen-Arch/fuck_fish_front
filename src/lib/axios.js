
import Axios from 'axios';
export default Axios.create({
  baseURL: 'http://localhost:4567/fuck_fish',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});
