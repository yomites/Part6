import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNewAnecdote = async (content) => {
  const getId = () => (100000 * Math.random()).toFixed(0)
  const object = { content, id: getId(), votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateVote = async (id, newObject) => {
  console.log('Id12', id)
  const obj = {...newObject, votes: newObject.votes + 1}
  const response = await axios.put(`${baseUrl}/${id}`, obj)
  return response.data
}

export default { getAll, createNewAnecdote, updateVote }