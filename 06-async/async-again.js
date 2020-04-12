console.log('log before:::', new Date());

function getUser(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('reading user from db:::');
            const user = {
                id: id,
                userName: 'nico1988'
            };
            console.log('get user success:::', user);
            resolve(user);
        }, 1000);
    })
}

function getRepositories(userName) {
    return new Promise(function (resolve,reject) {
        console.log(`getting ${userName}'s repositories:::`);
        setTimeout(function () {
            let userRepos = {
                userName: userName,
                repos: ['blog', 'nodejs', 'java']
            };
            console.log('get userRepos success:::', userRepos);
            resolve(userRepos);
        })
    })
}

function getCommits(repo) {
    return new Promise(function (resolve, reject) {
        console.log(`getting ${repo.userName}'s repository - ${repo.repos[0]}'s commits`);
        setTimeout(function () {
            resolve('haha');
            // reject('aa');
        }, 1000);
    })
}


async function displayCommits() {
    const user = await getUser(1999);
    const repos = await getRepositories(user.userName);
    const commit = await getCommits(repos);
    console.log('commit:::', commit);
}

displayCommits();

console.log('this will not log after displayCommits :::', new Date());

