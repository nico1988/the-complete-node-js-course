// 异步
// callback
// promise
// async await
console.log('before');
const user = getUser(1,function (res) {
    console.log('res:::', res);
    getRepositories(function () {
        console.log('getRepositories callback:::');
        getCommits(function () {
            console.log('getCommits callback:::');
        })
    })
});
console.log('after');

function getUser(id, cb) {
    setTimeout(function () {
        console.log('reading user from db:::');
        cb({
            id: id,
            userName: 'nico1988'
        });
    }, 1000);
}
function getRepositories(cb) {
    setTimeout(function () {
        console.log('getRepositories:::');
        cb();
    }, 1000);
}
function getCommits(cb) {
    setTimeout(function () {
        console.log('getCommits:::');
        cb();
    }, 1000);
}
