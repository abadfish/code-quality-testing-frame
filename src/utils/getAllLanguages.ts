function getAllLanguages(repoList: Repository[]):string[]{
    const languages = repoList.reduce((acc:string[], repo:Repository) => [...acc, repo.language], []);
    return languages
}


export default getAllLanguages;