// Contains the server API from github

class Github {
    constructor() {
            this.client_id = '23a924576c4a2594772d';
            this.client_secret = '4a616b0ac38c3aa03dfcd09852d4c4c51af5427f';
            this.repos_count = 8;
            this.repos_sort = 'created: asc';
        }
        //     Get the user's profile
    async getUser(user) {
        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Repos, sort by is and limit by ${repos_count}
        const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Get profile json data
        const profile = await userProfile.json();
        const repos = await userRepos.json();
        return { profile, repos };
    }
}