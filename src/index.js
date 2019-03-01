import Fingerprint2 from 'fingerprintjs2';
import 'babel-polyfill';

let fingerprintReport = async function (params) {
    return new Promise((resolve, reject) => {
        Fingerprint2.get({
            excludes: {                             // 排除的参数
                adBlock: true,                      // 是否安装adBlock插件
                enumerateDevices: true,             // 请求可用媒体输入和输出设备的列表
                availableScreenResolution: true,    // 返回屏幕分辨率
                userAgent: true,                    // navigator.userAgent
                platform: true,                     // 返回表示浏览器平台的字符串
                hasLiedBrowser: true,               // 返回用户是否改变了浏览器
                hasLiedOs: true,                    // 返回用户是否改变了操作系统
                plugins: true,                      // 返回浏览器安装的插件列表
            }
        }, function (components) {
            let murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31)
            let obj = {};

            obj.fp = murmur;
            if(params === 'details') {
                obj.components = components;
            }
            resolve(obj);
        })
    })
}

export default {
    get: function (params) {
        return fingerprintReport(params);
    },
    init: async function (params) {

        // 在初始页面加载时使用，避免生成不同指纹
        await new Promise((resolve) => {
            if (window.requestIdleCallback) {
                requestIdleCallback(resolve);
            } else {
                setTimeout(resolve, 500);
            }
        })
        return fingerprintReport(params);
    }
}