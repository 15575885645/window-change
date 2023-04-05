//跨窗口共享数据
import { set, get } from './actions';

function StorageDataChange(key) {
    window.addEventListener('storage', (event) => {
        
    })
}

function needToString(data) {
    return Object.prototype.toString.call(data) === "[object Object]" || Object.prototype.toString.call(data) == "[object Array]"
}

function init({
    key,
    onStorageDataChange,
}) {
    const initData = get(key);
    if (initData) {
        const data = needToString(data) ? JSON.stringify(initData) : initData;
        StorageDataChange(data);
        onStorageDataChange(data);
    } else {
        StorageDataChange("");
        onStorageDataChange("");
    }
}


function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
}

 //打开A页面 实时同步数据 并且渲染 或者 做一些初始化操作
 //A页面操作影响B页面.