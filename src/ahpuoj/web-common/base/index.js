import {server} from '@/web-common/const';

let Base = {};
Base.install = function(Vue, options) {
  Vue.prototype.imgUrl = function(relativeUrl) {
    return server + relativeUrl;
  };
  Vue.prototype.engNum = function(num) {
    let engNum = '';
    while (num) {
      engNum = String.fromCharCode(64 + (num % 26)) + engNum;
      num = Math.floor(num / 26);
    }
    return engNum;
  };
  Vue.prototype.secToTimeStr = function(sec) {
    let res = '';
    let days = Math.floor(sec / (24 * 3600));
    let left = sec % (24 * 3600);
    let hours = Math.floor(left / 3600);
    left = left % 3600;
    let minutes = Math.floor(left / 60);
    left = left % 60;
    let seconds = Math.round(left);

    if (days > 0) {
      res += days + 'd ';
    }
    res +=
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0');
    return res;
  };
};

export default Base;
