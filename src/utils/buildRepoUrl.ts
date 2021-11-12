function buildRepoUrl(username: string): string{
    return `https://api.github.com/users/${username}/repos`
}

export default buildRepoUrl;
