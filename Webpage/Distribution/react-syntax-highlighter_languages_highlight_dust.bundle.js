(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';\n  return {\n    aliases: ['dst'],\n    case_insensitive: true,\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'template-tag',\n        begin: /\\{[#\\/]/, end: /\\}/, illegal: /;/,\n        contains: [\n          {\n            className: 'name',\n            begin: /[a-zA-Z\\.-]+/,\n            starts: {\n              endsWithParent: true, relevance: 0,\n              contains: [\n                hljs.QUOTE_STRING_MODE\n              ]\n            }\n          }\n        ]\n      },\n      {\n        className: 'template-variable',\n        begin: /\\{/, end: /\\}/, illegal: /;/,\n        keywords: EXPRESSION_KEYWORDS\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kdXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHVzdC5qcz8wOTAwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgRVhQUkVTU0lPTl9LRVlXT1JEUyA9ICdpZiBlcSBuZSBsdCBsdGUgZ3QgZ3RlIHNlbGVjdCBkZWZhdWx0IG1hdGggc2VwJztcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2RzdCddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXRhZycsXG4gICAgICAgIGJlZ2luOiAvXFx7WyNcXC9dLywgZW5kOiAvXFx9LywgaWxsZWdhbDogLzsvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgYmVnaW46IC9bYS16QS1aXFwuLV0rLyxcbiAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSwgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xcey8sIGVuZDogL1xcfS8sIGlsbGVnYWw6IC87LyxcbiAgICAgICAga2V5d29yZHM6IEVYUFJFU1NJT05fS0VZV09SRFNcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js\n");

/***/ })

}]);