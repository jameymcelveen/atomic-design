/**
 * logger
 * Creates and returns a logger
 * @returns {log}
 */
function logger() {
  logger.level = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 };
  function log(m, level) {
    level = level || logger.level.INFO;
    switch (level) {
      case logger.level.TRACE: console.trace('TRACE: ' + m); break;
      case logger.level.DEBUG: console.debug('DEBUG: ' + m); break;
      case logger.level.INFO:  console.log  ('INFO: '  + m); break;
      case logger.level.WARN:  console.warn ('WARN: '  + m); break;
      case logger.level.ERROR: console.error('ERROR: ' + m); break;
    }
  }
  log.trace = function(m) { log(m, logger.level.TRACE) };
  log.debug = function(m) { log(m, logger.level.DEBUG) };
  log.info  = function(m) { log(m, logger.level.INFO ) };
  log.warn  = function(m) { log(m, logger.level.WARN ) };
  log.error = function(m) { log(m, logger.level.ERROR) };
  return log;
}


//export default logger;