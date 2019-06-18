(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_excel"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/excel.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/excel.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  return {\n    aliases: ['xlsx', 'xls'],\n    case_insensitive: true,\n    lexemes: /[a-zA-Z][\\w\\.]*/,\n    // built-in functions imported from https://web.archive.org/web/20160513042710/https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188\n    keywords: {\n        built_in: 'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'\n    },\n    contains: [\n      {\n        /* matches a beginning equal sign found in Excel formula examples */ \n        begin: /^=/,\n        end: /[^=]/, returnEnd: true, illegal: /=/, /* only allow single equal sign at front of line */\n        relevance: 10\n      },\n      /* technically, there can be more than 2 letters in column names, but this prevents conflict with some keywords */\n      {\n        /* matches a reference to a single cell */\n        className: 'symbol',\n        begin: /\\b[A-Z]{1,2}\\d+\\b/,\n        end: /[^\\d]/, excludeEnd: true,\n        relevance: 0\n      },\n      {\n        /* matches a reference to a range of cells */\n        className: 'symbol',\n        begin: /[A-Z]{0,2}\\d*:[A-Z]{0,2}\\d*/,\n        relevance: 0\n      },\n      hljs.BACKSLASH_ESCAPE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'number',\n        begin: hljs.NUMBER_RE + '(%)?',\n        relevance: 0\n      },\n      /* Excel formula comments are done by putting the comment in a function call to N() */\n      hljs.COMMENT(/\\bN\\(/,/\\)/,\n      {\n        excludeBegin: true,\n        excludeEnd: true,\n        illegal: /\\n/\n      })\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9leGNlbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2V4Y2VsLmpzP2ExNTEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWyd4bHN4JywgJ3hscyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgbGV4ZW1lczogL1thLXpBLVpdW1xcd1xcLl0qLyxcbiAgICAvLyBidWlsdC1pbiBmdW5jdGlvbnMgaW1wb3J0ZWQgZnJvbSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNjA1MTMwNDI3MTAvaHR0cHM6Ly9zdXBwb3J0Lm9mZmljZS5jb20vZW4tdXMvYXJ0aWNsZS9FeGNlbC1mdW5jdGlvbnMtYWxwaGFiZXRpY2FsLWIzOTQ0NTcyLTI1NWQtNGVmYi1iYjk2LWM2ZDkwMDMzZTE4OFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAgIGJ1aWx0X2luOiAnQUJTIEFDQ1JJTlQgQUNDUklOVE0gQUNPUyBBQ09TSCBBQ09UIEFDT1RIIEFHR1JFR0FURSBBRERSRVNTIEFNT1JERUdSQyBBTU9STElOQyBBTkQgQVJBQklDIEFSRUFTIEFTQyBBU0lOIEFTSU5IIEFUQU4gQVRBTjIgQVRBTkggQVZFREVWIEFWRVJBR0UgQVZFUkFHRUEgQVZFUkFHRUlGIEFWRVJBR0VJRlMgQkFIVFRFWFQgQkFTRSBCRVNTRUxJIEJFU1NFTEogQkVTU0VMSyBCRVNTRUxZIEJFVEFESVNUIEJFVEEuRElTVCBCRVRBSU5WIEJFVEEuSU5WIEJJTjJERUMgQklOMkhFWCBCSU4yT0NUIEJJTk9NRElTVCBCSU5PTS5ESVNUIEJJTk9NLkRJU1QuUkFOR0UgQklOT00uSU5WIEJJVEFORCBCSVRMU0hJRlQgQklUT1IgQklUUlNISUZUIEJJVFhPUiBDQUxMIENFSUxJTkcgQ0VJTElORy5NQVRIIENFSUxJTkcuUFJFQ0lTRSBDRUxMIENIQVIgQ0hJRElTVCBDSElJTlYgQ0hJVEVTVCBDSElTUS5ESVNUIENISVNRLkRJU1QuUlQgQ0hJU1EuSU5WIENISVNRLklOVi5SVCBDSElTUS5URVNUIENIT09TRSBDTEVBTiBDT0RFIENPTFVNTiBDT0xVTU5TIENPTUJJTiBDT01CSU5BIENPTVBMRVggQ09OQ0FUIENPTkNBVEVOQVRFIENPTkZJREVOQ0UgQ09ORklERU5DRS5OT1JNIENPTkZJREVOQ0UuVCBDT05WRVJUIENPUlJFTCBDT1MgQ09TSCBDT1QgQ09USCBDT1VOVCBDT1VOVEEgQ09VTlRCTEFOSyBDT1VOVElGIENPVU5USUZTIENPVVBEQVlCUyBDT1VQREFZUyBDT1VQREFZU05DIENPVVBOQ0QgQ09VUE5VTSBDT1VQUENEIENPVkFSIENPVkFSSUFOQ0UuUCBDT1ZBUklBTkNFLlMgQ1JJVEJJTk9NIENTQyBDU0NIIENVQkVLUElNRU1CRVIgQ1VCRU1FTUJFUiBDVUJFTUVNQkVSUFJPUEVSVFkgQ1VCRVJBTktFRE1FTUJFUiBDVUJFU0VUIENVQkVTRVRDT1VOVCBDVUJFVkFMVUUgQ1VNSVBNVCBDVU1QUklOQyBEQVRFIERBVEVESUYgREFURVZBTFVFIERBVkVSQUdFIERBWSBEQVlTIERBWVMzNjAgREIgREJDUyBEQ09VTlQgRENPVU5UQSBEREIgREVDMkJJTiBERUMySEVYIERFQzJPQ1QgREVDSU1BTCBERUdSRUVTIERFTFRBIERFVlNRIERHRVQgRElTQyBETUFYIERNSU4gRE9MTEFSIERPTExBUkRFIERPTExBUkZSIERQUk9EVUNUIERTVERFViBEU1RERVZQIERTVU0gRFVSQVRJT04gRFZBUiBEVkFSUCBFREFURSBFRkZFQ1QgRU5DT0RFVVJMIEVPTU9OVEggRVJGIEVSRi5QUkVDSVNFIEVSRkMgRVJGQy5QUkVDSVNFIEVSUk9SLlRZUEUgRVVST0NPTlZFUlQgRVZFTiBFWEFDVCBFWFAgRVhQT04uRElTVCBFWFBPTkRJU1QgRkFDVCBGQUNURE9VQkxFIEZBTFNFfDAgRi5ESVNUIEZESVNUIEYuRElTVC5SVCBGSUxURVJYTUwgRklORCBGSU5EQiBGLklOViBGLklOVi5SVCBGSU5WIEZJU0hFUiBGSVNIRVJJTlYgRklYRUQgRkxPT1IgRkxPT1IuTUFUSCBGTE9PUi5QUkVDSVNFIEZPUkVDQVNUIEZPUkVDQVNULkVUUyBGT1JFQ0FTVC5FVFMuQ09ORklOVCBGT1JFQ0FTVC5FVFMuU0VBU09OQUxJVFkgRk9SRUNBU1QuRVRTLlNUQVQgRk9SRUNBU1QuTElORUFSIEZPUk1VTEFURVhUIEZSRVFVRU5DWSBGLlRFU1QgRlRFU1QgRlYgRlZTQ0hFRFVMRSBHQU1NQSBHQU1NQS5ESVNUIEdBTU1BRElTVCBHQU1NQS5JTlYgR0FNTUFJTlYgR0FNTUFMTiBHQU1NQUxOLlBSRUNJU0UgR0FVU1MgR0NEIEdFT01FQU4gR0VTVEVQIEdFVFBJVk9UREFUQSBHUk9XVEggSEFSTUVBTiBIRVgyQklOIEhFWDJERUMgSEVYMk9DVCBITE9PS1VQIEhPVVIgSFlQRVJMSU5LIEhZUEdFT00uRElTVCBIWVBHRU9NRElTVCBJRnwwIElGRVJST1IgSUZOQSBJRlMgSU1BQlMgSU1BR0lOQVJZIElNQVJHVU1FTlQgSU1DT05KVUdBVEUgSU1DT1MgSU1DT1NIIElNQ09UIElNQ1NDIElNQ1NDSCBJTURJViBJTUVYUCBJTUxOIElNTE9HMTAgSU1MT0cyIElNUE9XRVIgSU1QUk9EVUNUIElNUkVBTCBJTVNFQyBJTVNFQ0ggSU1TSU4gSU1TSU5IIElNU1FSVCBJTVNVQiBJTVNVTSBJTVRBTiBJTkRFWCBJTkRJUkVDVCBJTkZPIElOVCBJTlRFUkNFUFQgSU5UUkFURSBJUE1UIElSUiBJU0JMQU5LIElTRVJSIElTRVJST1IgSVNFVkVOIElTRk9STVVMQSBJU0xPR0lDQUwgSVNOQSBJU05PTlRFWFQgSVNOVU1CRVIgSVNPREQgSVNSRUYgSVNURVhUIElTTy5DRUlMSU5HIElTT1dFRUtOVU0gSVNQTVQgSklTIEtVUlQgTEFSR0UgTENNIExFRlQgTEVGVEIgTEVOIExFTkIgTElORVNUIExOIExPRyBMT0cxMCBMT0dFU1QgTE9HSU5WIExPR05PUk0uRElTVCBMT0dOT1JNRElTVCBMT0dOT1JNLklOViBMT09LVVAgTE9XRVIgTUFUQ0ggTUFYIE1BWEEgTUFYSUZTIE1ERVRFUk0gTURVUkFUSU9OIE1FRElBTiBNSUQgTUlEQnMgTUlOIE1JTklGUyBNSU5BIE1JTlVURSBNSU5WRVJTRSBNSVJSIE1NVUxUIE1PRCBNT0RFIE1PREUuTVVMVCBNT0RFLlNOR0wgTU9OVEggTVJPVU5EIE1VTFRJTk9NSUFMIE1VTklUIE4gTkEgTkVHQklOT00uRElTVCBORUdCSU5PTURJU1QgTkVUV09SS0RBWVMgTkVUV09SS0RBWVMuSU5UTCBOT01JTkFMIE5PUk0uRElTVCBOT1JNRElTVCBOT1JNSU5WIE5PUk0uSU5WIE5PUk0uUy5ESVNUIE5PUk1TRElTVCBOT1JNLlMuSU5WIE5PUk1TSU5WIE5PVCBOT1cgTlBFUiBOUFYgTlVNQkVSVkFMVUUgT0NUMkJJTiBPQ1QyREVDIE9DVDJIRVggT0REIE9EREZQUklDRSBPRERGWUlFTEQgT0RETFBSSUNFIE9ERExZSUVMRCBPRkZTRVQgT1IgUERVUkFUSU9OIFBFQVJTT04gUEVSQ0VOVElMRS5FWEMgUEVSQ0VOVElMRS5JTkMgUEVSQ0VOVElMRSBQRVJDRU5UUkFOSy5FWEMgUEVSQ0VOVFJBTksuSU5DIFBFUkNFTlRSQU5LIFBFUk1VVCBQRVJNVVRBVElPTkEgUEhJIFBIT05FVElDIFBJIFBNVCBQT0lTU09OLkRJU1QgUE9JU1NPTiBQT1dFUiBQUE1UIFBSSUNFIFBSSUNFRElTQyBQUklDRU1BVCBQUk9CIFBST0RVQ1QgUFJPUEVSIFBWIFFVQVJUSUxFIFFVQVJUSUxFLkVYQyBRVUFSVElMRS5JTkMgUVVPVElFTlQgUkFESUFOUyBSQU5EIFJBTkRCRVRXRUVOIFJBTksuQVZHIFJBTksuRVEgUkFOSyBSQVRFIFJFQ0VJVkVEIFJFR0lTVEVSLklEIFJFUExBQ0UgUkVQTEFDRUIgUkVQVCBSSUdIVCBSSUdIVEIgUk9NQU4gUk9VTkQgUk9VTkRET1dOIFJPVU5EVVAgUk9XIFJPV1MgUlJJIFJTUSBSVEQgU0VBUkNIIFNFQVJDSEIgU0VDIFNFQ0ggU0VDT05EIFNFUklFU1NVTSBTSEVFVCBTSEVFVFMgU0lHTiBTSU4gU0lOSCBTS0VXIFNLRVcuUCBTTE4gU0xPUEUgU01BTEwgU1FMLlJFUVVFU1QgU1FSVCBTUVJUUEkgU1RBTkRBUkRJWkUgU1RERVYgU1RERVYuUCBTVERFVi5TIFNUREVWQSBTVERFVlAgU1RERVZQQSBTVEVZWCBTVUJTVElUVVRFIFNVQlRPVEFMIFNVTSBTVU1JRiBTVU1JRlMgU1VNUFJPRFVDVCBTVU1TUSBTVU1YMk1ZMiBTVU1YMlBZMiBTVU1YTVkyIFNXSVRDSCBTWUQgVCBUQU4gVEFOSCBUQklMTEVRIFRCSUxMUFJJQ0UgVEJJTExZSUVMRCBULkRJU1QgVC5ESVNULjJUIFQuRElTVC5SVCBURElTVCBURVhUIFRFWFRKT0lOIFRJTUUgVElNRVZBTFVFIFQuSU5WIFQuSU5WLjJUIFRJTlYgVE9EQVkgVFJBTlNQT1NFIFRSRU5EIFRSSU0gVFJJTU1FQU4gVFJVRXwwIFRSVU5DIFQuVEVTVCBUVEVTVCBUWVBFIFVOSUNIQVIgVU5JQ09ERSBVUFBFUiBWQUxVRSBWQVIgVkFSLlAgVkFSLlMgVkFSQSBWQVJQIFZBUlBBIFZEQiBWTE9PS1VQIFdFQlNFUlZJQ0UgV0VFS0RBWSBXRUVLTlVNIFdFSUJVTEwgV0VJQlVMTC5ESVNUIFdPUktEQVkgV09SS0RBWS5JTlRMIFhJUlIgWE5QViBYT1IgWUVBUiBZRUFSRlJBQyBZSUVMRCBZSUVMRERJU0MgWUlFTERNQVQgWi5URVNUIFpURVNUJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLyogbWF0Y2hlcyBhIGJlZ2lubmluZyBlcXVhbCBzaWduIGZvdW5kIGluIEV4Y2VsIGZvcm11bGEgZXhhbXBsZXMgKi8gXG4gICAgICAgIGJlZ2luOiAvXj0vLFxuICAgICAgICBlbmQ6IC9bXj1dLywgcmV0dXJuRW5kOiB0cnVlLCBpbGxlZ2FsOiAvPS8sIC8qIG9ubHkgYWxsb3cgc2luZ2xlIGVxdWFsIHNpZ24gYXQgZnJvbnQgb2YgbGluZSAqL1xuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLyogdGVjaG5pY2FsbHksIHRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gMiBsZXR0ZXJzIGluIGNvbHVtbiBuYW1lcywgYnV0IHRoaXMgcHJldmVudHMgY29uZmxpY3Qgd2l0aCBzb21lIGtleXdvcmRzICovXG4gICAgICB7XG4gICAgICAgIC8qIG1hdGNoZXMgYSByZWZlcmVuY2UgdG8gYSBzaW5nbGUgY2VsbCAqL1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogL1xcYltBLVpdezEsMn1cXGQrXFxiLyxcbiAgICAgICAgZW5kOiAvW15cXGRdLywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvKiBtYXRjaGVzIGEgcmVmZXJlbmNlIHRvIGEgcmFuZ2Ugb2YgY2VsbHMgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46IC9bQS1aXXswLDJ9XFxkKjpbQS1aXXswLDJ9XFxkKi8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBobGpzLk5VTUJFUl9SRSArICcoJSk/JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgLyogRXhjZWwgZm9ybXVsYSBjb21tZW50cyBhcmUgZG9uZSBieSBwdXR0aW5nIHRoZSBjb21tZW50IGluIGEgZnVuY3Rpb24gY2FsbCB0byBOKCkgKi9cbiAgICAgIGhsanMuQ09NTUVOVCgvXFxiTlxcKC8sL1xcKS8sXG4gICAgICB7XG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1xcbi9cbiAgICAgIH0pXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/excel.js\n");

/***/ })

}]);