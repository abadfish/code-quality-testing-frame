function getAverageStarsPerRepos(repoList: Repository[]):number{
    if(repoList.length === 0) return 0
    const sumStars = repoList.reduce((acc:number, repo:Repository) => acc + repo.stargazers_count, 0);
    
    return sumStars / repoList.length;
}

export default getAverageStarsPerRepos;