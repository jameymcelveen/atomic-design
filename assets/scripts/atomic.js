import logger from './logger.js';

var Atomic = window['Atomic'] || {

  ScriptType: 'text/atomic',
  LogLevel: { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 },

};


(function(){
  var log, _findScripts;

  log = logger();
  log('logger loaded...');
  _findScripts = function () {
    var i, scripts, atomicElements;

    scripts = [];
    atomicElements = document.querySelectorAll('script[type="' + Atomic.ScriptType + '"]');
    log.debug('atomicElements.length: ' + atomicElements.length);
    for(i=0;i<atomicElements.length;i++) {
      //atomicElements[i].onload = elementLoaded;
      log.debug('atomicElements[' + i + ']: ' + JSON.stringify(atomicElements[i]));
      scripts.push(atomicElements[i].src);
    }
    return scripts;
  };

  Atomic.logLevel = Atomic.LogLevel.TRACE;
  Atomic.init = function() {
    var i, script, scripts;
    scripts = _findScripts() || [];
    script = '';
    log.trace('init');
    for(i=0;i<scripts.length;i++){
      script = scripts[i];
      log(script.src);
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
    Atomic.init();
  });
}());

function elementLoaded(e) {
  console.log('loaded');
}

// /**
//  * logger
//  * Creates and returns a logger
//  * @returns {log}
//  */
// function logger() {
//   var LogLevel = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 };
//   function log(m, level) {
//     level = level || LogLevel.INFO;
//     switch (level) {
//       case LogLevel.TRACE: console.trace('TRACE: ' + m); break;
//       case LogLevel.DEBUG: console.debug('DEBUG: ' + m); break;
//       case LogLevel.INFO:  console.log  ('INFO: '  + m); break;
//       case LogLevel.WARN:  console.warn ('WARN: '  + m); break;
//       case LogLevel.ERROR: console.error('ERROR: ' + m); break;
//     }
//   }
//   log.trace = function(m) { log(m, LogLevel.TRACE)};
//   log.debug = function(m) { log(m, LogLevel.DEBUG)};
//   log.info  = function(m) { log(m, LogLevel.INFO)};
//   log.warn  = function(m) { log(m, LogLevel.WARN)};
//   log.error = function(m) { log(m, LogLevel.ERROR)};
//   return log;
// }