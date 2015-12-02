import { exec } from 'child_process';
import { expect } from 'chai'; 

describe('build test', function() {
    // Ensure build has enough time to complete
    this.timeout(5000);
    
    it('will fail to build due to SnarkError', done => {
       exec('npm run build', {}, (error, stdout, stderr) => {
          expect(stderr.toString().indexOf('SnarkError')).to.be.above(-1);
          done();
       });
        
    });
    
});
