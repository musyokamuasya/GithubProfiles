// The application's main entry point

const github = new Github();
const design = new Design();

const searchUser = document.querySelector('#search-user');
searchUser.addEventListener('keyup', (e) => {
    // Get the text entered and search from github api
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                //     Show error message & Persist the current user
                design.showAlert('User not found', 'alert alert-danger');
            } else {
                design.showProfile(data.profile);
            }
        });
    } else {
        //     Clear the profile data
        design.clearProfile();
    }
});