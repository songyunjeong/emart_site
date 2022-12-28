// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sub_food/js/fruit_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var applePear = [{
  id: 'product01',
  link: '../detail_food_fruit/apple.html',
  img: './images/fruit_01.jpg',
  imgOn: './images/fruit_01_on.jpg',
  logo: '이마트몰',
  delivery: '',
  fresh: '신선보장',
  emartFresh: 'E-MART FRESH',
  name: '유명산지 사과 4~11입/봉 (1.8kg)',
  price: '10,800',
  won: '원',
  sale: '12,800',
  saleWon: '원'
}, {
  id: 'product02',
  link: '#!',
  img: './images/fruit_02.jpg',
  imgOn: './images/fruit_02_on.jpg',
  logo: '이마트몰',
  delivery: '',
  fresh: '신선보장',
  emartFresh: '',
  name: '저탄소인증 사과 1.4kg/봉',
  price: '7,980',
  won: '원',
  sale: '',
  saleWon: ''
}, {
  id: 'product03',
  link: '#!',
  img: './images/fruit_03.jpg',
  imgOn: './images/fruit_03_on.jpg',
  logo: '이마트몰',
  delivery: '새벽배송',
  fresh: '신선보장',
  emartFresh: '',
  name: '[당도선별] 유명산지 청송 햇 홍로사과 1.5kg (봉)',
  price: '9,800',
  won: '원',
  sale: '12,800',
  saleWon: '원'
}, {
  id: 'product04',
  link: '#!',
  img: './images/fruit_04.jpg',
  imgOn: './images/fruit_04_on.jpg',
  logo: '이마트몰',
  delivery: '',
  fresh: '신선보장',
  emartFresh: '',
  name: 'GAP 죽장사과 4~6입/봉 (1.3kg내외)',
  price: '5,980',
  won: '원',
  sale: '',
  saleWon: ''
}, {
  id: 'product05',
  link: '#!',
  img: './images/fruit_05.jpg',
  imgOn: './images/fruit_05_on.jpg',
  logo: '이마트몰',
  delivery: '새벽배송',
  fresh: '신선보장',
  emartFresh: '',
  name: '못생겨도 맛좋은 보조개 햇 홍로사과 3kg (봉)',
  price: '12,800',
  won: '원',
  sale: '14,800',
  saleWon: '원'
}, {
  id: 'product06',
  link: '#!',
  img: './images/fruit_06.jpg',
  imgOn: './images/fruit_06_on.jpg',
  logo: '이마트몰',
  delivery: '',
  fresh: '신선보장',
  emartFresh: '친환경 자연주의',
  name: '저탄소인증 세척사과 2kg/박스',
  price: '13,800',
  won: '원',
  sale: '',
  saleWon: ''
}, {
  id: 'product07',
  link: '#!',
  img: './images/fruit_07.jpg',
  imgOn: './images/fruit_07_on.jpg',
  logo: '이마트몰',
  delivery: '새벽배송',
  fresh: '신선보장',
  emartFresh: '',
  name: '[당도선별] 천안 신고배 3입 1.9kg (팩)',
  price: '12,800',
  won: '원',
  sale: '15,800',
  saleWon: '원'
}, {
  id: 'product08',
  link: '#!',
  img: './images/fruit_08.jpg',
  imgOn: './images/fruit_08_on.jpg',
  logo: '이마트몰',
  delivery: '',
  fresh: '신선보장',
  emartFresh: '친환경 자연주의',
  name: '저탄소인증 배3~4입/봉 (1.8kg내외)',
  price: '9,980',
  won: '원',
  sale: '',
  saleWon: ''
}];
var _default = applePear;
exports.default = _default;
},{}],"sub_food/js/fruit.js":[function(require,module,exports) {
"use strict";

var _fruit_data = _interopRequireDefault(require("./fruit_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var productBox = document.querySelector('.product_box');
var _loop = function _loop(i) {
  var productLi = document.createElement('li');
  productLi.setAttribute('class', 'product');
  var productLink = document.createElement('a');
  productLink.setAttribute('href', _fruit_data.default[i].link);
  productLi.appendChild(productLink);
  var img = document.createElement('div');
  var imgImg = document.createElement('img');
  img.setAttribute('class', 'img');
  img.appendChild(imgImg);
  imgImg.setAttribute('src', _fruit_data.default[i].img);
  productLink.appendChild(img);
  var text = document.createElement('ul');
  text.setAttribute('class', 'text');
  productLi.appendChild(text);
  var emartLi = document.createElement('li');
  var emartLiText = document.createTextNode(_fruit_data.default[i].logo);
  emartLi.setAttribute('class', 'emart_mall');
  emartLi.appendChild(emartLiText);
  text.appendChild(emartLi);
  if (_fruit_data.default[i].delivery != 0) {
    var deliveryLi = document.createElement('li');
    var deliveryLiText = document.createTextNode(_fruit_data.default[i].delivery);
    deliveryLi.setAttribute('class', 'delivery');
    deliveryLi.appendChild(deliveryLiText);
    text.appendChild(deliveryLi);
  }
  var freshLi = document.createElement('li');
  var freshLiText = document.createTextNode(_fruit_data.default[i].fresh);
  freshLi.setAttribute('class', 'fresh');
  freshLi.appendChild(freshLiText);
  text.appendChild(freshLi);
  var emartFreshLi = document.createElement('li');
  var emartFreshLiText = document.createTextNode(_fruit_data.default[i].emartFresh);
  emartFreshLi.setAttribute('class', 'emart_fresh');
  emartFreshLi.appendChild(emartFreshLiText);
  text.appendChild(emartFreshLi);
  var nameLi = document.createElement('li');
  var nameLiText = document.createTextNode(_fruit_data.default[i].name);
  nameLi.appendChild(nameLiText);
  text.appendChild(nameLi);
  var priceLi = document.createElement('li');
  var priceLiText = document.createTextNode(_fruit_data.default[i].price);
  priceLi.setAttribute('class', 'price');
  priceLi.appendChild(priceLiText);
  text.appendChild(priceLi);
  var wonLi = document.createElement('li');
  var wonLiText = document.createTextNode(_fruit_data.default[i].won);
  wonLi.setAttribute('class', 'won');
  wonLi.appendChild(wonLiText);
  text.appendChild(wonLi);
  var saleLi = document.createElement('li');
  var saleLiText = document.createTextNode(_fruit_data.default[i].sale);
  saleLi.setAttribute('class', 'sale');
  saleLi.appendChild(saleLiText);
  text.appendChild(saleLi);
  var saleWonLi = document.createElement('li');
  var saleWonLiText = document.createTextNode(_fruit_data.default[i].saleWon);
  saleWonLi.setAttribute('class', 'sale_won');
  saleWonLi.appendChild(saleWonLiText);
  text.appendChild(saleWonLi);
  productBox.appendChild(productLi);
  imgImg.addEventListener('mouseover', function () {
    imgImg.setAttribute('src', _fruit_data.default[i].imgOn);
  });
  imgImg.addEventListener('mouseout', function () {
    imgImg.setAttribute('src', _fruit_data.default[i].img);
  });
};
for (var i = 0; i < _fruit_data.default.length; i++) {
  _loop(i);
}
},{"./fruit_data.js":"sub_food/js/fruit_data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55963" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","sub_food/js/fruit.js"], null)
//# sourceMappingURL=/fruit.3b8c3817.js.map