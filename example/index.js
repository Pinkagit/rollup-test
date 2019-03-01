import bundle from '../src/index';

window.onload = function () {
    bundle.init('details').then(v => {
        console.log(v)
    })
}
