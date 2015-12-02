var child_process_1 = require('child_process');
var chai_1 = require('chai');
describe('build test', function () {
    // Ensure build has enough time to complete
    this.timeout(10000);
    it('will fail to build due to SnarkError', function (done) {
        child_process_1.exec('npm run build', {}, function (error, stdout, stderr) {
            var concatOutput = stdout.toString() + stderr.toString();
            chai_1.expect(error).to.exist;
            chai_1.expect(concatOutput.indexOf('SnarkError')).to.be.above(-1);
            done();
        });
    });
});
