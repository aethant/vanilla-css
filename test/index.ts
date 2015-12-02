import { exec } from 'child_process';
import { expect } from 'chai';

describe('build test', function() {
    // Ensure build has enough time to complete
    this.timeout(10000);

    it('will fail to build due to SnarkError', done => {
        exec('npm run build', {}, (error, stdout, stderr) => {
            var concatOutput = stdout.toString() + stderr.toString();
            expect(error).to.exist;
            expect(concatOutput.indexOf('SnarkError')).to.be.above(-1);
            done();
        });

    });

});
