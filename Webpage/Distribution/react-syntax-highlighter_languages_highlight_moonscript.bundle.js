(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_moonscript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/moonscript.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/moonscript.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var KEYWORDS = {\n    keyword:\n      // Moonscript keywords\n      'if then not for in while do return else elseif break continue switch and or ' +\n      'unless when class extends super local import export from using',\n    literal:\n      'true false nil',\n    built_in:\n      '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +\n      'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +\n      'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +\n      'io math os package string table'\n  };\n  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';\n  var SUBST = {\n    className: 'subst',\n    begin: /#\\{/, end: /}/,\n    keywords: KEYWORDS\n  };\n  var EXPRESSIONS = [\n    hljs.inherit(hljs.C_NUMBER_MODE,\n      {starts: {end: '(\\\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp\n    {\n      className: 'string',\n      variants: [\n        {\n          begin: /'/, end: /'/,\n          contains: [hljs.BACKSLASH_ESCAPE]\n        },\n        {\n          begin: /\"/, end: /\"/,\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST]\n        }\n      ]\n    },\n    {\n      className: 'built_in',\n      begin: '@__' + hljs.IDENT_RE\n    },\n    {\n      begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript\n    },\n    {\n      begin: hljs.IDENT_RE + '\\\\\\\\' + hljs.IDENT_RE // inst\\method\n    }\n  ];\n  SUBST.contains = EXPRESSIONS;\n\n  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});\n  var PARAMS_RE = '(\\\\(.*\\\\))?\\\\s*\\\\B[-=]>';\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\([^\\\\(]', returnBegin: true,\n    /* We need another contained nameless mode to not have every nested\n    pair of parens to be called \"params\" */\n    contains: [{\n      begin: /\\(/, end: /\\)/,\n      keywords: KEYWORDS,\n      contains: ['self'].concat(EXPRESSIONS)\n    }]\n  };\n\n  return {\n    aliases: ['moon'],\n    keywords: KEYWORDS,\n    illegal: /\\/\\*/,\n    contains: EXPRESSIONS.concat([\n      hljs.COMMENT('--', '$'),\n      {\n        className: 'function',  // function: -> =>\n        begin: '^\\\\s*' + JS_IDENT_RE + '\\\\s*=\\\\s*' + PARAMS_RE, end: '[-=]>',\n        returnBegin: true,\n        contains: [TITLE, PARAMS]\n      },\n      {\n        begin: /[\\(,:=]\\s*/, // anonymous function start\n        relevance: 0,\n        contains: [\n          {\n            className: 'function',\n            begin: PARAMS_RE, end: '[-=]>',\n            returnBegin: true,\n            contains: [PARAMS]\n          }\n        ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class',\n        end: '$',\n        illegal: /[:=\"\\[\\]]/,\n        contains: [\n          {\n            beginKeywords: 'extends',\n            endsWithParent: true,\n            illegal: /[:=\"\\[\\]]/,\n            contains: [TITLE]\n          },\n          TITLE\n        ]\n      },\n      {\n        className: 'name',    // table\n        begin: JS_IDENT_RE + ':', end: ':',\n        returnBegin: true, returnEnd: true,\n        relevance: 0\n      }\n    ])\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tb29uc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9vbnNjcmlwdC5qcz9lZmJjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgIC8vIE1vb25zY3JpcHQga2V5d29yZHNcbiAgICAgICdpZiB0aGVuIG5vdCBmb3IgaW4gd2hpbGUgZG8gcmV0dXJuIGVsc2UgZWxzZWlmIGJyZWFrIGNvbnRpbnVlIHN3aXRjaCBhbmQgb3IgJyArXG4gICAgICAndW5sZXNzIHdoZW4gY2xhc3MgZXh0ZW5kcyBzdXBlciBsb2NhbCBpbXBvcnQgZXhwb3J0IGZyb20gdXNpbmcnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBuaWwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ19HIF9WRVJTSU9OIGFzc2VydCBjb2xsZWN0Z2FyYmFnZSBkb2ZpbGUgZXJyb3IgZ2V0ZmVudiBnZXRtZXRhdGFibGUgaXBhaXJzIGxvYWQgJyArXG4gICAgICAnbG9hZGZpbGUgbG9hZHN0cmluZyBtb2R1bGUgbmV4dCBwYWlycyBwY2FsbCBwcmludCByYXdlcXVhbCByYXdnZXQgcmF3c2V0IHJlcXVpcmUgJyArXG4gICAgICAnc2VsZWN0IHNldGZlbnYgc2V0bWV0YXRhYmxlIHRvbnVtYmVyIHRvc3RyaW5nIHR5cGUgdW5wYWNrIHhwY2FsbCBjb3JvdXRpbmUgZGVidWcgJyArXG4gICAgICAnaW8gbWF0aCBvcyBwYWNrYWdlIHN0cmluZyB0YWJsZSdcbiAgfTtcbiAgdmFyIEpTX0lERU5UX1JFID0gJ1tBLVphLXokX11bMC05QS1aYS16JF9dKic7XG4gIHZhciBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC8jXFx7LywgZW5kOiAvfS8sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTXG4gIH07XG4gIHZhciBFWFBSRVNTSU9OUyA9IFtcbiAgICBobGpzLmluaGVyaXQoaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge3N0YXJ0czoge2VuZDogJyhcXFxccyovKT8nLCByZWxldmFuY2U6IDB9fSksIC8vIGEgbnVtYmVyIHRyaWVzIHRvIGVhdCB0aGUgZm9sbG93aW5nIHNsYXNoIHRvIHByZXZlbnQgdHJlYXRpbmcgaXQgYXMgYSByZWdleHBcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvJy8sIGVuZDogLycvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC9cIi8sIGVuZDogL1wiLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgIGJlZ2luOiAnQF9fJyArIGhsanMuSURFTlRfUkVcbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAnQCcgKyBobGpzLklERU5UX1JFIC8vIHJlbGV2YW5jZSBib29zdGVyIG9uIHBhciB3aXRoIENvZmZlZVNjcmlwdFxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnXFxcXFxcXFwnICsgaGxqcy5JREVOVF9SRSAvLyBpbnN0XFxtZXRob2RcbiAgICB9XG4gIF07XG4gIFNVQlNULmNvbnRhaW5zID0gRVhQUkVTU0lPTlM7XG5cbiAgdmFyIFRJVExFID0gaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiBKU19JREVOVF9SRX0pO1xuICB2YXIgUEFSQU1TX1JFID0gJyhcXFxcKC4qXFxcXCkpP1xcXFxzKlxcXFxCWy09XT4nO1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKFteXFxcXChdJywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgLyogV2UgbmVlZCBhbm90aGVyIGNvbnRhaW5lZCBuYW1lbGVzcyBtb2RlIHRvIG5vdCBoYXZlIGV2ZXJ5IG5lc3RlZFxuICAgIHBhaXIgb2YgcGFyZW5zIHRvIGJlIGNhbGxlZCBcInBhcmFtc1wiICovXG4gICAgY29udGFpbnM6IFt7XG4gICAgICBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sXG4gICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICBjb250YWluczogWydzZWxmJ10uY29uY2F0KEVYUFJFU1NJT05TKVxuICAgIH1dXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ21vb24nXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05TLmNvbmNhdChbXG4gICAgICBobGpzLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLCAgLy8gZnVuY3Rpb246IC0+ID0+XG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKicgKyBKU19JREVOVF9SRSArICdcXFxccyo9XFxcXHMqJyArIFBBUkFNU19SRSwgZW5kOiAnWy09XT4nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtUSVRMRSwgUEFSQU1TXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9bXFwoLDo9XVxccyovLCAvLyBhbm9ueW1vdXMgZnVuY3Rpb24gc3RhcnRcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luOiBQQVJBTVNfUkUsIGVuZDogJ1stPV0+JyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFtQQVJBTVNdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcycsXG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGlsbGVnYWw6IC9bOj1cIlxcW1xcXV0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtUSVRMRV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFRJVExFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLCAgICAvLyB0YWJsZVxuICAgICAgICBiZWdpbjogSlNfSURFTlRfUkUgKyAnOicsIGVuZDogJzonLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSwgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdKVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/moonscript.js\n");

/***/ })

}]);