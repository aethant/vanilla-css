var child_process_1 = require('child_process');
var chai_1 = require('chai');
describe('build test', function () {
    // Ensure build has enough time to complete
    this.timeout(5000);
    it('will fail to build due to SnarkError', function (done) {
        child_process_1.exec('npm run build', {}, function (error, stdout, stderr) {
            chai_1.expect(stderr.toString().indexOf('SnarkError')).to.be.above(-1);
            done();
        });
    });
});
