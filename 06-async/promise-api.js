const pResolve = Promise.resolve({id: 1});
const pReject = Promise.reject({id: 2, name: 'err'});

pResolve.then(res => {
    console.log('res:::', res);
});
pReject.catch(err => {
    console.log('err:::', err);
});
