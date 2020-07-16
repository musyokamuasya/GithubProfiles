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
                    <li class="list-group-item">Site: ${user.blog}</li>
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

    clearProfile() {
            this.profile.innerHTML = '';
        }
        //     Show alert
    showAlert(message, className) {
        //     Clear previous alert
        this.clearAlert();
        //     Create a div with text and place before searchbar
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.search-container');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        // Remove after 2500 ms
        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }
    clearAlert() {
        const alert = document.querySelector('.alert');
        //     If there is an alert, don't show any more
        if (alert) {
            alert.remove();
        }
    }
}