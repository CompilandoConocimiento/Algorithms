(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_llvm"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/llvm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/llvm.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var identifier = '([-a-zA-Z$._][\\\\w\\\\-$.]*)';\n  return {\n    //lexemes: '[.%]?' + hljs.IDENT_RE,\n    keywords:\n      'begin end true false declare define global ' +\n      'constant private linker_private internal ' +\n      'available_externally linkonce linkonce_odr weak ' +\n      'weak_odr appending dllimport dllexport common ' +\n      'default hidden protected extern_weak external ' +\n      'thread_local zeroinitializer undef null to tail ' +\n      'target triple datalayout volatile nuw nsw nnan ' +\n      'ninf nsz arcp fast exact inbounds align ' +\n      'addrspace section alias module asm sideeffect ' +\n      'gc dbg linker_private_weak attributes blockaddress ' +\n      'initialexec localdynamic localexec prefix unnamed_addr ' +\n      'ccc fastcc coldcc x86_stdcallcc x86_fastcallcc ' +\n      'arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ' +\n      'ptx_kernel intel_ocl_bicc msp430_intrcc spir_func ' +\n      'spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc ' +\n      'cc c signext zeroext inreg sret nounwind ' +\n      'noreturn noalias nocapture byval nest readnone ' +\n      'readonly inlinehint noinline alwaysinline optsize ssp ' +\n      'sspreq noredzone noimplicitfloat naked builtin cold ' +\n      'nobuiltin noduplicate nonlazybind optnone returns_twice ' +\n      'sanitize_address sanitize_memory sanitize_thread sspstrong ' +\n      'uwtable returned type opaque eq ne slt sgt ' +\n      'sle sge ult ugt ule uge oeq one olt ogt ' +\n      'ole oge ord uno ueq une x acq_rel acquire ' +\n      'alignstack atomic catch cleanup filter inteldialect ' +\n      'max min monotonic nand personality release seq_cst ' +\n      'singlethread umax umin unordered xchg add fadd ' +\n      'sub fsub mul fmul udiv sdiv fdiv urem srem ' +\n      'frem shl lshr ashr and or xor icmp fcmp ' +\n      'phi call trunc zext sext fptrunc fpext uitofp ' +\n      'sitofp fptoui fptosi inttoptr ptrtoint bitcast ' +\n      'addrspacecast select va_arg ret br switch invoke ' +\n      'unwind unreachable indirectbr landingpad resume ' +\n      'malloc alloca free load store getelementptr ' +\n      'extractelement insertelement shufflevector getresult ' +\n      'extractvalue insertvalue atomicrmw cmpxchg fence ' +\n      'argmemonly double',\n    contains: [\n      {\n        className: 'keyword',\n        begin: 'i\\\\d+'\n      },\n      hljs.COMMENT(\n        ';', '\\\\n', {relevance: 0}\n      ),\n      // Double quote string\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'string',\n        variants: [\n          // Double-quoted string\n          { begin: '\"', end: '[^\\\\\\\\]\"' },\n        ],\n        relevance: 0\n      },\n      {\n        className: 'title',\n        variants: [\n          { begin: '@' + identifier },\n          { begin: '@\\\\d+' },\n          { begin: '!' + identifier },\n          { begin: '!\\\\d+' + identifier }\n        ]\n      },\n      {\n        className: 'symbol',\n        variants: [\n          { begin: '%' + identifier },\n          { begin: '%\\\\d+' },\n          { begin: '#\\\\d+' },\n        ]\n      },\n      {\n        className: 'number',\n        variants: [\n            { begin: '0[xX][a-fA-F0-9]+' },\n            { begin: '-?\\\\d+(?:[.]\\\\d+)?(?:[eE][-+]?\\\\d+(?:[.]\\\\d+)?)?' }\n        ],\n        relevance: 0\n      },\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sbHZtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGx2bS5qcz9hYzYyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgaWRlbnRpZmllciA9ICcoWy1hLXpBLVokLl9dW1xcXFx3XFxcXC0kLl0qKSc7XG4gIHJldHVybiB7XG4gICAgLy9sZXhlbWVzOiAnWy4lXT8nICsgaGxqcy5JREVOVF9SRSxcbiAgICBrZXl3b3JkczpcbiAgICAgICdiZWdpbiBlbmQgdHJ1ZSBmYWxzZSBkZWNsYXJlIGRlZmluZSBnbG9iYWwgJyArXG4gICAgICAnY29uc3RhbnQgcHJpdmF0ZSBsaW5rZXJfcHJpdmF0ZSBpbnRlcm5hbCAnICtcbiAgICAgICdhdmFpbGFibGVfZXh0ZXJuYWxseSBsaW5rb25jZSBsaW5rb25jZV9vZHIgd2VhayAnICtcbiAgICAgICd3ZWFrX29kciBhcHBlbmRpbmcgZGxsaW1wb3J0IGRsbGV4cG9ydCBjb21tb24gJyArXG4gICAgICAnZGVmYXVsdCBoaWRkZW4gcHJvdGVjdGVkIGV4dGVybl93ZWFrIGV4dGVybmFsICcgK1xuICAgICAgJ3RocmVhZF9sb2NhbCB6ZXJvaW5pdGlhbGl6ZXIgdW5kZWYgbnVsbCB0byB0YWlsICcgK1xuICAgICAgJ3RhcmdldCB0cmlwbGUgZGF0YWxheW91dCB2b2xhdGlsZSBudXcgbnN3IG5uYW4gJyArXG4gICAgICAnbmluZiBuc3ogYXJjcCBmYXN0IGV4YWN0IGluYm91bmRzIGFsaWduICcgK1xuICAgICAgJ2FkZHJzcGFjZSBzZWN0aW9uIGFsaWFzIG1vZHVsZSBhc20gc2lkZWVmZmVjdCAnICtcbiAgICAgICdnYyBkYmcgbGlua2VyX3ByaXZhdGVfd2VhayBhdHRyaWJ1dGVzIGJsb2NrYWRkcmVzcyAnICtcbiAgICAgICdpbml0aWFsZXhlYyBsb2NhbGR5bmFtaWMgbG9jYWxleGVjIHByZWZpeCB1bm5hbWVkX2FkZHIgJyArXG4gICAgICAnY2NjIGZhc3RjYyBjb2xkY2MgeDg2X3N0ZGNhbGxjYyB4ODZfZmFzdGNhbGxjYyAnICtcbiAgICAgICdhcm1fYXBjc2NjIGFybV9hYXBjc2NjIGFybV9hYXBjc192ZnBjYyBwdHhfZGV2aWNlICcgK1xuICAgICAgJ3B0eF9rZXJuZWwgaW50ZWxfb2NsX2JpY2MgbXNwNDMwX2ludHJjYyBzcGlyX2Z1bmMgJyArXG4gICAgICAnc3Bpcl9rZXJuZWwgeDg2XzY0X3N5c3ZjYyB4ODZfNjRfd2luNjRjYyB4ODZfdGhpc2NhbGxjYyAnICtcbiAgICAgICdjYyBjIHNpZ25leHQgemVyb2V4dCBpbnJlZyBzcmV0IG5vdW53aW5kICcgK1xuICAgICAgJ25vcmV0dXJuIG5vYWxpYXMgbm9jYXB0dXJlIGJ5dmFsIG5lc3QgcmVhZG5vbmUgJyArXG4gICAgICAncmVhZG9ubHkgaW5saW5laGludCBub2lubGluZSBhbHdheXNpbmxpbmUgb3B0c2l6ZSBzc3AgJyArXG4gICAgICAnc3NwcmVxIG5vcmVkem9uZSBub2ltcGxpY2l0ZmxvYXQgbmFrZWQgYnVpbHRpbiBjb2xkICcgK1xuICAgICAgJ25vYnVpbHRpbiBub2R1cGxpY2F0ZSBub25sYXp5YmluZCBvcHRub25lIHJldHVybnNfdHdpY2UgJyArXG4gICAgICAnc2FuaXRpemVfYWRkcmVzcyBzYW5pdGl6ZV9tZW1vcnkgc2FuaXRpemVfdGhyZWFkIHNzcHN0cm9uZyAnICtcbiAgICAgICd1d3RhYmxlIHJldHVybmVkIHR5cGUgb3BhcXVlIGVxIG5lIHNsdCBzZ3QgJyArXG4gICAgICAnc2xlIHNnZSB1bHQgdWd0IHVsZSB1Z2Ugb2VxIG9uZSBvbHQgb2d0ICcgK1xuICAgICAgJ29sZSBvZ2Ugb3JkIHVubyB1ZXEgdW5lIHggYWNxX3JlbCBhY3F1aXJlICcgK1xuICAgICAgJ2FsaWduc3RhY2sgYXRvbWljIGNhdGNoIGNsZWFudXAgZmlsdGVyIGludGVsZGlhbGVjdCAnICtcbiAgICAgICdtYXggbWluIG1vbm90b25pYyBuYW5kIHBlcnNvbmFsaXR5IHJlbGVhc2Ugc2VxX2NzdCAnICtcbiAgICAgICdzaW5nbGV0aHJlYWQgdW1heCB1bWluIHVub3JkZXJlZCB4Y2hnIGFkZCBmYWRkICcgK1xuICAgICAgJ3N1YiBmc3ViIG11bCBmbXVsIHVkaXYgc2RpdiBmZGl2IHVyZW0gc3JlbSAnICtcbiAgICAgICdmcmVtIHNobCBsc2hyIGFzaHIgYW5kIG9yIHhvciBpY21wIGZjbXAgJyArXG4gICAgICAncGhpIGNhbGwgdHJ1bmMgemV4dCBzZXh0IGZwdHJ1bmMgZnBleHQgdWl0b2ZwICcgK1xuICAgICAgJ3NpdG9mcCBmcHRvdWkgZnB0b3NpIGludHRvcHRyIHB0cnRvaW50IGJpdGNhc3QgJyArXG4gICAgICAnYWRkcnNwYWNlY2FzdCBzZWxlY3QgdmFfYXJnIHJldCBiciBzd2l0Y2ggaW52b2tlICcgK1xuICAgICAgJ3Vud2luZCB1bnJlYWNoYWJsZSBpbmRpcmVjdGJyIGxhbmRpbmdwYWQgcmVzdW1lICcgK1xuICAgICAgJ21hbGxvYyBhbGxvY2EgZnJlZSBsb2FkIHN0b3JlIGdldGVsZW1lbnRwdHIgJyArXG4gICAgICAnZXh0cmFjdGVsZW1lbnQgaW5zZXJ0ZWxlbWVudCBzaHVmZmxldmVjdG9yIGdldHJlc3VsdCAnICtcbiAgICAgICdleHRyYWN0dmFsdWUgaW5zZXJ0dmFsdWUgYXRvbWljcm13IGNtcHhjaGcgZmVuY2UgJyArXG4gICAgICAnYXJnbWVtb25seSBkb3VibGUnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogJ2lcXFxcZCsnXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnOycsICdcXFxcbicsIHtyZWxldmFuY2U6IDB9XG4gICAgICApLFxuICAgICAgLy8gRG91YmxlIHF1b3RlIHN0cmluZ1xuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAvLyBEb3VibGUtcXVvdGVkIHN0cmluZ1xuICAgICAgICAgIHsgYmVnaW46ICdcIicsIGVuZDogJ1teXFxcXFxcXFxdXCInIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46ICdAJyArIGlkZW50aWZpZXIgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnQFxcXFxkKycgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnIScgKyBpZGVudGlmaWVyIH0sXG4gICAgICAgICAgeyBiZWdpbjogJyFcXFxcZCsnICsgaWRlbnRpZmllciB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgeyBiZWdpbjogJyUnICsgaWRlbnRpZmllciB9LFxuICAgICAgICAgIHsgYmVnaW46ICclXFxcXGQrJyB9LFxuICAgICAgICAgIHsgYmVnaW46ICcjXFxcXGQrJyB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogJzBbeFhdW2EtZkEtRjAtOV0rJyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJy0/XFxcXGQrKD86Wy5dXFxcXGQrKT8oPzpbZUVdWy0rXT9cXFxcZCsoPzpbLl1cXFxcZCspPyk/JyB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/llvm.js\n");

/***/ })

}]);