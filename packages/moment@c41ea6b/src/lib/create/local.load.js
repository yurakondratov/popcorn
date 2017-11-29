montageDefine("c41ea6b","src/lib/create/local",{dependencies:[],factory:function(require,exports,module){import { createLocalOrUTC } from './from-anything';

export function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

}})