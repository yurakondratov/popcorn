montageDefine("79d2794","package.json",{exports:{name:"montage",version:"17.0.11",description:"Build your next application with a browser based platform that really gets the web.",license:"BSD-3-Clause",repository:{type:"git",url:"git+https://github.com/montagejs/montage.git"},main:"core/core",engines:{node:"4.8.4",npm:"2.15.11"},production:!0,dependencies:{bluebird:"~3.5.0",collections:"~5.0.x",frb:"~4.0.x",htmlparser2:"~3.0.5","q-io":"^1.13.3",mr:"^17.0.9","weak-map":"^1.0.5",xhr2:"^0.1.4","lodash.kebabcase":"^4.1.1","lodash.camelcase":"^4.3.0","lodash.trim":"^4.5.1","lodash.snakecase":"^4.1.1","proxy-polyfill":"~0.1.7"},devDependencies:{concurrently:"^3.4.0","http-server":"^0.10.0","jasmine-console-reporter":"^1.2.7","jasmine-core":"^2.5.2",jshint:"^2.9.5",karma:"^1.5.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.0.1","karma-ie-launcher":"^1.0.0","karma-jasmine":"^1.1.0","karma-phantomjs-launcher":"^1.0.2","karma-safari-launcher":"^1.0.0","montage-testing":"git://github.com/montagejs/montage-testing.git#master","mop-integration":"git://github.com/montagejs/mop-integration.git#master",mr:"git://github.com/montagejs/mr.git#master",open:"0.0.5"},scripts:{test:"node test/run-node.js",jsdoc:"jsdoc -c jsdoc.json",integration:"MONTAGE_VERSION=${MONTAGE_VERSION:=./} MOP_VERSION=${MOP_VERSION:=#master} node node_modules/mop-integration/integration",lint:"jshint .","test:karma":"karma start --no-auto-watch --single-run","test:karma-travis":"karma start --no-auto-watch --single-run --browsers=Chrome_travis_ci","test:karma-firefox":"karma start --no-auto-watch --single-run --browsers=Firefox","test:karma-chrome":"karma start --no-auto-watch --single-run --browsers=Chrome","test:karma-debug":"karma start --auto-watch --no-single-run --browsers=PhantomJS_debug","test:karma-dev":"karma start --auto-watch --no-single-run --capture","test:jasmine":'concurrently "http-server -p 8085" "open http://localhost:8085/test/run.html"'},exclude:["report","doc","test","tools"],gitHead:"545466367dbcdff7c8bac3827afdf24796fdb7ab",readmeFilename:"README.md",bugs:{url:"https://github.com/montagejs/montage/issues"},homepage:"https://github.com/montagejs/montage#readme",_id:"montage@17.0.11",_shasum:"6cb26d84a9202dc90469b1d7c669963cb44c16c0",_from:"montagejs/montage#master",_resolved:"git://github.com/montagejs/montage.git#545466367dbcdff7c8bac3827afdf24796fdb7ab",redirects:{montage:"core/core"},mappings:{mr:{name:"mr",hash:"e7e4884",location:"../mr@e7e4884/"},bluebird:{name:"bluebird",hash:"2b669b9",location:"../bluebird@2b669b9/"},collections:{name:"collections",hash:"681fd63",location:"../collections@681fd63/"},frb:{name:"frb",hash:"afa97d9",location:"../frb@afa97d9/"},htmlparser2:{name:"htmlparser2",hash:"d27b149",location:"../htmlparser2@d27b149/"},"q-io":{name:"q-io",hash:"2950c1f",location:"../q-io@2950c1f/"},"weak-map":{name:"weak-map",hash:"752cb37",location:"../weak-map@752cb37/"},xhr2:{name:"xhr2",hash:"ee896a8",location:"../xhr2@ee896a8/"},"lodash.kebabcase":{name:"lodash.kebabcase",hash:"eac26a0",location:"../lodash.kebabcase@eac26a0/"},"lodash.camelcase":{name:"lodash.camelcase",hash:"d6bc368",location:"../lodash.camelcase@d6bc368/"},"lodash.trim":{name:"lodash.trim",hash:"5ba426f",location:"../lodash.trim@5ba426f/"},"lodash.snakecase":{name:"lodash.snakecase",hash:"ecd696b",location:"../lodash.snakecase@ecd696b/"},"proxy-polyfill":{name:"proxy-polyfill",hash:"60d4cfd",location:"../proxy-polyfill@60d4cfd/"}},hash:"79d2794",useScriptInjection:!0}});