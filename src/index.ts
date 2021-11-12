import fetchRepositoryData from "./fetchRepositoryData"
import getAllLanguages from "./utils/getAllLanguages"

const username = "bogdanned"

const repoList = fetchRepositoryData(username)

repoList.then(data => {
    const languageList = getAllLanguages(data)

    console.info(`
    --------------------------
    User: ${username}
    Repository number: ${data.length}
    Languages: ${languageList.join(",")}
    --------------------------
    `)
})