class Api {
  fetchItems = ({ query, after }) => {
    page = after
    if (!page) {
      page = 1
    }
    const url = `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=50&order=desc&sort=activity&tagged=${query}&site=stackoverflow`
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson
      })
  }
}

export default new Api()
