import axios from 'axios'
const baseUrl = '/api/users'

const getUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const signupUser = async (credentials) => {
  await axios.post(baseUrl, credentials)
}

export default { getUsers, signupUser }
