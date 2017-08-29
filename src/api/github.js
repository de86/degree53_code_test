import axios from 'axios'

export const config = {
    getReposUrl: 'https://api.github.com/search/repositories?q=',
    getReadmeUrl: 'https://api.github.com/repos'
}

// Gets an array of Repos given a string to search for.
// Succes and error handlers required
export const getRepos = (searchString, successHandler, errorHandler) => {
    axios.get(`${config.getReposUrl}${searchString}`)
        .then((response) => {
            successHandler(response.data.items)
        })
        .catch((err) => {
            errorHandler(err)
        })
}

// Gets raw readme URL from given repo name and owner. First stage of
// of getting readme text.
// Succes and error handlers required
export const getReadme = (owner, repoName, successHandler, errorHandler) => {
    axios.get(`${config.getReadmeUrl}/${owner}/${repoName}/readme`)
        .then((response) => {
            getReadmeText(response.data.download_url, successHandler, errorHandler)
        })
        .catch((err) => {
            errorHandler(err)
        })
}

// Gets raw readme text from a given readme URL. Second stage of getting readme
// text. Used by getReadme.
// Succes and error handlers required
const getReadmeText = (readmeRawUrl, successHandler, errorHandler) => {
    axios.get(readmeRawUrl)
        .then((response) => {
            successHandler(response.data)
        })
        .catch((err) => {
            errorHandler(err)
        })
}
