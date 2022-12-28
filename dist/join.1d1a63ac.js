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
})({"js/join.js":[function(require,module,exports) {
// id pw change_event
var userIdCk = document.getElementById('user_id');
var userPwCk = document.getElementById('user_pw');
var userPwCkRe = document.getElementById('user_pw_re');
userIdCk.addEventListener('change', checkId);
userPwCk.addEventListener('change', checkPw);
userPwCkRe.addEventListener('change', checkPwRe);
function checkId() {
  if (userIdCk.value.length < 6 || userIdCk.value.length > 15) {
    document.querySelector('.id_message').textContent = '6~15자로 입력하세요.';
  } else {
    document.querySelector('.id_message').textContent = '사용가능한 아이디입니다.';
  }
}
function checkPw() {
  if (userPwCk.value.length < 4) {
    document.querySelector('.pw_message').textContent = '4자 이상 입력하세요.';
  } else {
    document.querySelector('.pw_message').textContent = '사용가능한 비밀번호입니다.';
  }
}
function checkPwRe() {
  if (userPwCk.value != 0 && userPwCkRe.value != 0) {
    if (userPwCk.value == userPwCkRe.value) {
      document.querySelector('.pw_re_message').textContent = '비밀번호가 일치합니다.';
    } else {
      document.querySelector('.pw_re_message').textContent = '비밀번호가 다릅니다.';
    }
  } else {
    document.querySelector('.pw_re_message').textContent = '';
  }
}
setInterval(checkId, 1);
setInterval(checkPw, 1);
setInterval(checkPwRe, 1);

// #id_check_btn click_event (아이디 중복확인 버튼)
var userId = '';
var idData = '';
var userPw = '';
var userPwRe = '';
$('#id_chk_btn').click(function () {
  userId = $('#user_id').val();
  idData = new Array('greencomputer', 'redcomputer', 'bluecomputer', 'yellowcomputer', 'blackcomputer');
  for (var i in idData) {
    if (userId == idData[i]) {
      alert('사용할 수 없는 아이디 입니다.');
      $('#user_id').val('').focus();
      break;
    } else if (i == 4) {
      alert('사용가능한 아이디입니다.');
      $('#user_pw').focus();
    }
  }
});

// tel change_event
var telFirst = document.getElementById('tel_first');
var telMid = document.getElementById('tel_mid');
var telLast = document.getElementById('tel_last');
telFirst.addEventListener('keyup', moveTel1);
telMid.addEventListener('keyup', moveTel2);
function moveTel1() {
  if (telFirst.value.length == 3) {
    telMid.focus();
  }
}
function moveTel2() {
  if (telMid.value.length == 4) {
    telLast.focus();
  }
}

// mail change_event
$('#mail_select').change(function () {
  $('#mail_site').val($('#mail_select').val());
});

// like_food_info click_event (관심 카테고리 FOOD)
var likeFoodNo = document.getElementById('like_food_no');
likeFoodNo.addEventListener('click', function () {
  for (var i = 1; i <= 16; i++) {
    var likeFood = document.getElementById('like_food' + i);
    if (likeFoodNo.checked) {
      likeFood.checked = false;
    } else {
      likeFoodNo.checked = true;
    }
  }
});
var _loop = function _loop(i) {
  var likeFood = document.getElementById('like_food' + i);
  likeFood.addEventListener('click', function () {
    if (likeFood.checked) {
      likeFoodNo.checked = false;
    } else if (document.getElementById('like_food1').checked == false && document.getElementById('like_food2').checked == false && document.getElementById('like_food3').checked == false && document.getElementById('like_food4').checked == false && document.getElementById('like_food5').checked == false && document.getElementById('like_food6').checked == false && document.getElementById('like_food7').checked == false && document.getElementById('like_food8').checked == false && document.getElementById('like_food9').checked == false && document.getElementById('like_food10').checked == false && document.getElementById('like_food11').checked == false && document.getElementById('like_food12').checked == false && document.getElementById('like_food13').checked == false && document.getElementById('like_food14').checked == false && document.getElementById('like_food15').checked == false && document.getElementById('like_food16').checked == false) {
      likeFoodNo.checked = true;
    }
  });
};
for (var i = 1; i <= 16; i++) {
  _loop(i);
}

// like_life_info click_event (관심 카테고리 LIFE)
var likeLifeNo = document.getElementById('like_life_no');
likeLifeNo.addEventListener('click', function () {
  for (var _i = 1; _i <= 13; _i++) {
    var likeLife = document.getElementById('like_life' + _i);
    if (likeLifeNo.checked) {
      likeLife.checked = false;
    } else {
      likeLifeNo.checked = true;
    }
  }
});
var _loop2 = function _loop2(_i2) {
  var likeLife = document.getElementById('like_life' + _i2);
  likeLife.addEventListener('click', function () {
    if (likeLife.checked) {
      likeLifeNo.checked = false;
    } else if (document.getElementById('like_life1').checked == false && document.getElementById('like_life2').checked == false && document.getElementById('like_life3').checked == false && document.getElementById('like_life4').checked == false && document.getElementById('like_life5').checked == false && document.getElementById('like_life6').checked == false && document.getElementById('like_life7').checked == false && document.getElementById('like_life8').checked == false && document.getElementById('like_life9').checked == false && document.getElementById('like_life10').checked == false && document.getElementById('like_life11').checked == false && document.getElementById('like_life12').checked == false && document.getElementById('like_life13').checked == false) {
      likeLifeNo.checked = true;
    }
  });
};
for (var _i2 = 1; _i2 <= 13; _i2++) {
  _loop2(_i2);
}

// #all_chk #chk click_event (가입 약관 동의)
var allChk = document.getElementById('all_chk');
var chk1 = document.getElementById('chk1');
var chk2 = document.getElementById('chk2');
var chk3 = document.getElementById('chk3');
allChk.addEventListener('click', function () {
  if (allChk.checked) {
    chk1.checked = true;
    chk2.checked = true;
    chk3.checked = true;
  } else {
    chk1.checked = false;
    chk2.checked = false;
    chk3.checked = false;
  }
});
chk1.addEventListener('click', function () {
  if (chk1.checked == false) {
    allChk.checked = false;
  } else if (chk2.checked && chk3.checked) {
    allChk.checked = true;
  }
});
chk2.addEventListener('click', function () {
  if (chk2.checked == false) {
    allChk.checked = false;
  } else if (chk1.checked && chk3.checked) {
    allChk.checked = true;
  }
});
chk3.addEventListener('click', function () {
  if (chk3.checked == false) {
    allChk.checked = false;
  } else if (chk1.checked && chk2.checked) {
    allChk.checked = true;
  }
});

//.join_btn click_event (회원가입 버튼)
$('.join_btn').click(function () {
  alert('회원가입 되었습니다.');
  window.close();
  window.open('../index.html');
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/join.js"], null)
//# sourceMappingURL=/join.1d1a63ac.js.map