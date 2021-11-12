import got from "got";
import buildRepoUrl from "./utils/buildRepoUrl";

async function getRepoList(username:string):Promise<Repository[]>{
    const url = buildRepoUrl(username)
    try {
        const response = await got(url, {
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "User-Agent": "Awesome-Octocat-App"
            }
        });

        const repoList:Repository[] = JSON.parse(response.body);

        return repoList;
    } catch (error) {
        console.error(error)
        return []
    }

}

export default getRepoList;