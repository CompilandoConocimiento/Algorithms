(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_delphi"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/delphi.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/delphi.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var KEYWORDS =\n    'exports register file shl array record property for mod while set ally label uses raise not ' +\n    'stored class safecall var interface or private static exit index inherited to else stdcall ' +\n    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +\n    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +\n    'destructor write message program with read initialization except default nil if case cdecl in ' +\n    'downto threadvar of try pascal const external constructor type public then implementation ' +\n    'finally published procedure absolute reintroduce operator as is abstract alias assembler ' +\n    'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' +\n    'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' +\n    'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' +\n    'specialize strict unaligned varargs ';\n  var COMMENT_MODES = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.COMMENT(/\\{/, /\\}/, {relevance: 0}),\n    hljs.COMMENT(/\\(\\*/, /\\*\\)/, {relevance: 10})\n  ];\n  var DIRECTIVE = {\n    className: 'meta',\n    variants: [\n      {begin: /\\{\\$/, end: /\\}/},\n      {begin: /\\(\\*\\$/, end: /\\*\\)/}\n    ]\n  };\n  var STRING = {\n    className: 'string',\n    begin: /'/, end: /'/,\n    contains: [{begin: /''/}]\n  };\n  var CHAR_STRING = {\n    className: 'string', begin: /(#\\d+)+/\n  };\n  var CLASS = {\n    begin: hljs.IDENT_RE + '\\\\s*=\\\\s*class\\\\s*\\\\(', returnBegin: true,\n    contains: [\n      hljs.TITLE_MODE\n    ]\n  };\n  var FUNCTION = {\n    className: 'function',\n    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,\n    keywords: 'function constructor|10 destructor|10 procedure|10',\n    contains: [\n      hljs.TITLE_MODE,\n      {\n        className: 'params',\n        begin: /\\(/, end: /\\)/,\n        keywords: KEYWORDS,\n        contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)\n      },\n      DIRECTIVE\n    ].concat(COMMENT_MODES)\n  };\n  return {\n    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],\n    case_insensitive: true,\n    keywords: KEYWORDS,\n    illegal: /\"|\\$[G-Zg-z]|\\/\\*|<\\/|\\|/,\n    contains: [\n      STRING, CHAR_STRING,\n      hljs.NUMBER_MODE,\n      CLASS,\n      FUNCTION,\n      DIRECTIVE\n    ].concat(COMMENT_MODES)\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kZWxwaGkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kZWxwaGkuanM/Y2QxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID1cbiAgICAnZXhwb3J0cyByZWdpc3RlciBmaWxlIHNobCBhcnJheSByZWNvcmQgcHJvcGVydHkgZm9yIG1vZCB3aGlsZSBzZXQgYWxseSBsYWJlbCB1c2VzIHJhaXNlIG5vdCAnICtcbiAgICAnc3RvcmVkIGNsYXNzIHNhZmVjYWxsIHZhciBpbnRlcmZhY2Ugb3IgcHJpdmF0ZSBzdGF0aWMgZXhpdCBpbmRleCBpbmhlcml0ZWQgdG8gZWxzZSBzdGRjYWxsICcgK1xuICAgICdvdmVycmlkZSBzaHIgYXNtIGZhciByZXNvdXJjZXN0cmluZyBmaW5hbGl6YXRpb24gcGFja2VkIHZpcnR1YWwgb3V0IGFuZCBwcm90ZWN0ZWQgbGlicmFyeSBkbyAnICtcbiAgICAneG9yd3JpdGUgZ290byBuZWFyIGZ1bmN0aW9uIGVuZCBkaXYgb3ZlcmxvYWQgb2JqZWN0IHVuaXQgYmVnaW4gc3RyaW5nIG9uIGlubGluZSByZXBlYXQgdW50aWwgJyArXG4gICAgJ2Rlc3RydWN0b3Igd3JpdGUgbWVzc2FnZSBwcm9ncmFtIHdpdGggcmVhZCBpbml0aWFsaXphdGlvbiBleGNlcHQgZGVmYXVsdCBuaWwgaWYgY2FzZSBjZGVjbCBpbiAnICtcbiAgICAnZG93bnRvIHRocmVhZHZhciBvZiB0cnkgcGFzY2FsIGNvbnN0IGV4dGVybmFsIGNvbnN0cnVjdG9yIHR5cGUgcHVibGljIHRoZW4gaW1wbGVtZW50YXRpb24gJyArXG4gICAgJ2ZpbmFsbHkgcHVibGlzaGVkIHByb2NlZHVyZSBhYnNvbHV0ZSByZWludHJvZHVjZSBvcGVyYXRvciBhcyBpcyBhYnN0cmFjdCBhbGlhcyBhc3NlbWJsZXIgJyArXG4gICAgJ2JpdHBhY2tlZCBicmVhayBjb250aW51ZSBjcHBkZWNsIGN2YXIgZW51bWVyYXRvciBleHBlcmltZW50YWwgcGxhdGZvcm0gZGVwcmVjYXRlZCAnICtcbiAgICAndW5pbXBsZW1lbnRlZCBkeW5hbWljIGV4cG9ydCBmYXIxNiBmb3J3YXJkIGdlbmVyaWMgaGVscGVyIGltcGxlbWVudHMgaW50ZXJydXB0IGlvY2hlY2tzICcgK1xuICAgICdsb2NhbCBuYW1lIG5vZGVmYXVsdCBub3JldHVybiBub3N0YWNrZnJhbWUgb2xkZnBjY2FsbCBvdGhlcndpc2Ugc2F2ZXJlZ2lzdGVycyBzb2Z0ZmxvYXQgJyArXG4gICAgJ3NwZWNpYWxpemUgc3RyaWN0IHVuYWxpZ25lZCB2YXJhcmdzICc7XG4gIHZhciBDT01NRU5UX01PREVTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoL1xcey8sIC9cXH0vLCB7cmVsZXZhbmNlOiAwfSksXG4gICAgaGxqcy5DT01NRU5UKC9cXChcXCovLCAvXFwqXFwpLywge3JlbGV2YW5jZTogMTB9KVxuICBdO1xuICB2YXIgRElSRUNUSVZFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXHtcXCQvLCBlbmQ6IC9cXH0vfSxcbiAgICAgIHtiZWdpbjogL1xcKFxcKlxcJC8sIGVuZDogL1xcKlxcKS99XG4gICAgXVxuICB9O1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8nLywgZW5kOiAvJy8sXG4gICAgY29udGFpbnM6IFt7YmVnaW46IC8nJy99XVxuICB9O1xuICB2YXIgQ0hBUl9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgYmVnaW46IC8oI1xcZCspKy9cbiAgfTtcbiAgdmFyIENMQVNTID0ge1xuICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcXFxzKj1cXFxccypjbGFzc1xcXFxzKlxcXFwoJywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuVElUTEVfTU9ERVxuICAgIF1cbiAgfTtcbiAgdmFyIEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3IgZGVzdHJ1Y3RvciBwcm9jZWR1cmUnLCBlbmQ6IC9bOjtdLyxcbiAgICBrZXl3b3JkczogJ2Z1bmN0aW9uIGNvbnN0cnVjdG9yfDEwIGRlc3RydWN0b3J8MTAgcHJvY2VkdXJlfDEwJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtTVFJJTkcsIENIQVJfU1RSSU5HLCBESVJFQ1RJVkVdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICAgICAgfSxcbiAgICAgIERJUkVDVElWRVxuICAgIF0uY29uY2F0KENPTU1FTlRfTU9ERVMpXG4gIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydkcHInLCAnZGZtJywgJ3BhcycsICdwYXNjYWwnLCAnZnJlZXBhc2NhbCcsICdsYXphcnVzJywgJ2xwcicsICdsZm0nXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvXCJ8XFwkW0ctWmctel18XFwvXFwqfDxcXC98XFx8LyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLCBDSEFSX1NUUklORyxcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBDTEFTUyxcbiAgICAgIEZVTkNUSU9OLFxuICAgICAgRElSRUNUSVZFXG4gICAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/delphi.js\n");

/***/ })

}]);