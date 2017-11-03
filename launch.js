SystemJS.config({
  map: {
    'plugin-babel': 'assets/lib/plugin-babel.js',
    'systemjs-babel-build': 'assets/lib//systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'
});

// SystemJS.import('assets/scripts/logger.js');
SystemJS.import('assets/scripts/atomic.js');