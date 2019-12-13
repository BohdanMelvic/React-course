import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-query-app.firebaseio.com/'
})