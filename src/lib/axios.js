
import Axios from 'axios';
export default Axios.create({
  baseURL: 'https://gen-server.wjg.jp/fuck_fish',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});
