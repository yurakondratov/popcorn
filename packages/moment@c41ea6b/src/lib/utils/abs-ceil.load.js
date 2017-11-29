montageDefine("c41ea6b","src/lib/utils/abs-ceil",{dependencies:[],factory:function(require,exports,module){export default function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

}})