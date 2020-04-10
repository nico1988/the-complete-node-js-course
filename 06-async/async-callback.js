// 异步
// callback
// promise
// async await
console.log('before');
const user = getUser(1,function (res) {
    console.log('res:::', res);
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
