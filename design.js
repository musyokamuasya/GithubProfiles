// Contains the dynamically generated UI classes

class Design {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn mb-4 btn-block btn-primary">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
    
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company || 'None'}</li>
                    <li class="list-group-item">Site: <a href="\`${user.company}\`"></a></li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Joined: ${user.created_at}</li>
                </ul>
            </div>
    
        </div>
    </div>
    <h4 class="heading mb-3">Public Repos</h4>
    <div id="repos"></div>
        `;
    }
}