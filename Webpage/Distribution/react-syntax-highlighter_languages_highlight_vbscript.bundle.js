(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_vbscript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  return {\n    aliases: ['vbs'],\n    case_insensitive: true,\n    keywords: {\n      keyword:\n        'call class const dim do loop erase execute executeglobal exit for each next function ' +\n        'if then else on error option explicit new private property let get public randomize ' +\n        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +\n        'class_initialize class_terminate default preserve in me byval byref step resume goto',\n      built_in:\n        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +\n        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +\n        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +\n        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +\n        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +\n        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +\n        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +\n        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +\n        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +\n        'chrw regexp server response request cstr err',\n      literal:\n        'true false null nothing empty'\n    },\n    illegal: '//',\n    contains: [\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '\"\"'}]}),\n      hljs.COMMENT(\n        /'/,\n        /$/,\n        {\n          relevance: 0\n        }\n      ),\n      hljs.C_NUMBER_MODE\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy92YnNjcmlwdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Zic2NyaXB0LmpzP2I5NzkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWyd2YnMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnY2FsbCBjbGFzcyBjb25zdCBkaW0gZG8gbG9vcCBlcmFzZSBleGVjdXRlIGV4ZWN1dGVnbG9iYWwgZXhpdCBmb3IgZWFjaCBuZXh0IGZ1bmN0aW9uICcgK1xuICAgICAgICAnaWYgdGhlbiBlbHNlIG9uIGVycm9yIG9wdGlvbiBleHBsaWNpdCBuZXcgcHJpdmF0ZSBwcm9wZXJ0eSBsZXQgZ2V0IHB1YmxpYyByYW5kb21pemUgJyArXG4gICAgICAgICdyZWRpbSByZW0gc2VsZWN0IGNhc2Ugc2V0IHN0b3Agc3ViIHdoaWxlIHdlbmQgd2l0aCBlbmQgdG8gZWxzZWlmIGlzIG9yIHhvciBhbmQgbm90ICcgK1xuICAgICAgICAnY2xhc3NfaW5pdGlhbGl6ZSBjbGFzc190ZXJtaW5hdGUgZGVmYXVsdCBwcmVzZXJ2ZSBpbiBtZSBieXZhbCBieXJlZiBzdGVwIHJlc3VtZSBnb3RvJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnbGNhc2UgbW9udGggdmFydHlwZSBpbnN0cnJldiB1Ym91bmQgc2V0bG9jYWxlIGdldG9iamVjdCByZ2IgZ2V0cmVmIHN0cmluZyAnICtcbiAgICAgICAgJ3dlZWtkYXluYW1lIHJuZCBkYXRlYWRkIG1vbnRobmFtZSBub3cgZGF5IG1pbnV0ZSBpc2FycmF5IGNib29sIHJvdW5kIGZvcm1hdGN1cnJlbmN5ICcgK1xuICAgICAgICAnY29udmVyc2lvbnMgY3NuZyB0aW1ldmFsdWUgc2Vjb25kIHllYXIgc3BhY2UgYWJzIGNsbmcgdGltZXNlcmlhbCBmaXhzIGxlbiBhc2MgJyArXG4gICAgICAgICdpc2VtcHR5IG1hdGhzIGRhdGVzZXJpYWwgYXRuIHRpbWVyIGlzb2JqZWN0IGZpbHRlciB3ZWVrZGF5IGRhdGV2YWx1ZSBjY3VyIGlzZGF0ZSAnICtcbiAgICAgICAgJ2luc3RyIGRhdGVkaWZmIGZvcm1hdGRhdGV0aW1lIHJlcGxhY2UgaXNudWxsIHJpZ2h0IHNnbiBhcnJheSBzbnVtZXJpYyBsb2cgY2RibCBoZXggJyArXG4gICAgICAgICdjaHIgbGJvdW5kIG1zZ2JveCB1Y2FzZSBnZXRsb2NhbGUgY29zIGNkYXRlIGNieXRlIHJ0cmltIGpvaW4gaG91ciBvY3QgdHlwZW5hbWUgdHJpbSAnICtcbiAgICAgICAgJ3N0cmNvbXAgaW50IGNyZWF0ZW9iamVjdCBsb2FkcGljdHVyZSB0YW4gZm9ybWF0bnVtYmVyIG1pZCBzY3JpcHRlbmdpbmVidWlsZHZlcnNpb24gJyArXG4gICAgICAgICdzY3JpcHRlbmdpbmUgc3BsaXQgc2NyaXB0ZW5naW5lbWlub3J2ZXJzaW9uIGNpbnQgc2luIGRhdGVwYXJ0IGx0cmltIHNxciAnICtcbiAgICAgICAgJ3NjcmlwdGVuZ2luZW1ham9ydmVyc2lvbiB0aW1lIGRlcml2ZWQgZXZhbCBkYXRlIGZvcm1hdHBlcmNlbnQgZXhwIGlucHV0Ym94IGxlZnQgYXNjdyAnICtcbiAgICAgICAgJ2NocncgcmVnZXhwIHNlcnZlciByZXNwb25zZSByZXF1ZXN0IGNzdHIgZXJyJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlIG51bGwgbm90aGluZyBlbXB0eSdcbiAgICB9LFxuICAgIGlsbGVnYWw6ICcvLycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7Y29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC8nLyxcbiAgICAgICAgLyQvLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript.js\n");

/***/ })

}]);