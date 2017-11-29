montageDefine("c41ea6b","src/lib/utils/defaults",{dependencies:[],factory:function(require,exports,module){// Pick the first defined of two or three arguments.
export default function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

}})