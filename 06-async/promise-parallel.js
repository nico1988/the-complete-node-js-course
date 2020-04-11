const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async 1:::')
        resolve({id: 1});
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async 2:::')
        resolve({id: 1, name: 'nico'});
    }, 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async 2:::')
        reject({id: 3, name: 'nico'});
    }, 1000);
});

Promise.all([p1, p2]).then(res => {
    console.log('async operation comming:::');
    console.log('res:::', res); // 这里返回的resolve在一个数组里边
});

Promise.all([p1, p2, p3]).then(res => {
    console.log('async operation comming:::');
    console.log('res:::', res); // 这里返回的resolve在一个数组里边
}).catch(err => {
    console.log('err:::', err);
});

Promise.race([p1, p2]).then(res => {
    console.log('async operation comming:::');
    console.log('res:::', res); // 这里返回的resolve在一个数组里边
}).catch(err => {
    console.log('err:::', err);
});
