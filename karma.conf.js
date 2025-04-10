module.exports = function(config) {
  config.set({
    // Base path that will be used to resolve all patterns (e.g., files, exclude)
    basePath: '',

    // Frameworks to use
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // List of files / patterns to load in the browser
    files: [],

    // List of files / patterns to exclude
    exclude: [],

    // Preprocess matching files before serving them to the browser
    preprocessors: {},

    // Test results reporter to use
    reporters: ['progress', 'kjhtml'],

    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Level of logging
    logLevel: config.LOG_INFO,

    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    singleRun: false,

    // Concurrency level
    concurrency: Infinity,

    // Angular CLI configuration
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    // Custom launcher for ChromeHeadless
    customLaunchers: {
      ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

    // Angular CLI configuration
    angularCli: {
      environment: 'dev'
    }
  });
};
