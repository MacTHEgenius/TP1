exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./e2e/**/*.js'],
    capabilities: {'browserName': 'firefox'},
    baseUrl: 'http://localhost:9000'
}
