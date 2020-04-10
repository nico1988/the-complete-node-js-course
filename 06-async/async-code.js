console.log('before');
const user = getUser(1);
console.log('after');

function getUser(id) {
    setTimeout(function () {
        console.log('reading user from db:::');
        return {
            id: id,
            userName: 'nico1988'
        }
    }, 1000);
}
