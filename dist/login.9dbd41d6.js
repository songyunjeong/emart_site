parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yZtF":[function(require,module,exports) {
function e(){null==window.open("../login.html","_blank","width=500, height=480, top=150, left=100")&&alert("팝업이 차단되었습니다. 팝업차단을 해제하고 새로고침 하십시오.")}$(function(){var e="",a="",l=0;$(".btn").click(function(){for(var r=1;;r++){e=$("#user_id").val(),a=$("#user_pw").val();var t=5-++l;if("emart"==e&&"1234"==a){alert(e+"님 환영합니다."),window.close();break}if("emart"==e){5===l?(alert("계정보호 되었습니다. 고객센터에 문의하세요."),window.close()):alert("비밀번호가 틀렸습니다. "+t+"회 남음. (5회 오류 시 계정보호 처리됨.)");break}alert("정보가 없습니다."),$("#user_id").val("").focus(),$("#user_pw").val("");break}})});
},{}]},{},["yZtF"], null)
//# sourceMappingURL=/login.9dbd41d6.js.map