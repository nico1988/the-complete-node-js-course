// 异步
// callback
// promise
// async await
console.log('before');
// const user = getUser(1,function (res) {
//     console.log('res:::', res);
//     getRepositories(function () {
//         console.log('getRepositories callback:::');
//         getCommits(function () {
//             console.log('getCommits callback:::');
//         })
//     })
// });
// console.log('after');
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories();
        const commits = await getCommits();
        console.log(commits);
    } catch (e) {
        console.log(e);
    }
}

displayCommits();

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
        }, 1000);
    })
}
