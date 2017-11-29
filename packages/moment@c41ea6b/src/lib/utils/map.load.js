montageDefine("c41ea6b","src/lib/utils/map",{dependencies:[],factory:function(require,exports,module){export default function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

}})