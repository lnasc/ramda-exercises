module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/*.spec.js', ignore: true }
    ],

    tests: [
      'src/*.spec.js',
      'src/**/*.spec.js'
    ],

    env: {
      type: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
