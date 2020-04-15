console.log('log before:::', new Date());

function getUser(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('reading user from db:::');
            resolve({
                id: id,
                userName: 'nico1988'
            })
        }, 1000);
    })
}

function getRepositories(cb) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            console.log('getRepositories:::');
            resolve('blog');
        }, 1000);
    })
}

function getCommits(cb) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            console.log('getCommits:::');
            resolve('haha');
            // reject('aa');
        }, 1000);
    })
}


async function displayCommits() {
    const user = await getUser(1999);
    const repos = await getRepositories();
    const commit = await getCommits();
    console.log('commit:::', commit);
}

displayCommits();

console.log('this will not log after displayCommits :::', new Date());

