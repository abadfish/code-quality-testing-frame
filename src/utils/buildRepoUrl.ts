function buildRepoUrl(username: string): string{
  if(username.length === 0) return null;
  return `https://api.github.com/users/${username}/repos`
}

export default buildRepoUrl;
