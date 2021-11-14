function getAllLanguages(repoList: Repository[]):string[]{
    if(repoList.length === 0) return [];
    const languages = repoList.reduce((acc:string[], repo:Repository) => [...acc, repo.language], []);
    return languages
}


export default getAllLanguages;