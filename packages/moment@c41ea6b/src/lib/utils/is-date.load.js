montageDefine("c41ea6b","src/lib/utils/is-date",{dependencies:[],factory:function(require,exports,module){export default function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

}})