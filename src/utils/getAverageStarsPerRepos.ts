function getAverageStarsPerRepos(repoList: Repository[]):number{
    const sumStarts = repoList.reduce((acc:number, repo:Repository) => acc + repo.stargazers_count, 0);
    
    return sumStarts / repoList.length;
}

export default getAverageStarsPerRepos;