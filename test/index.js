/// <reference path="../src/typings/node/node.d.ts" />
/// <reference path="../src/typings/mocha/mocha.d.ts" />
/// <reference path="../src/typings/chai/chai.d.ts" />

const exec = require('child_process').exec
const expect = require('chai').expect; 

describe('build test', function() {
    // Ensure build has enough time to complete
    this.timeout(5000);
    
    it('will fail to build due to SnarkError', done => {
       exec('npm run build', {}, (error, stdout, stderr) => {
          expect(stderr.indexOf('SnarkError')).to.be.above(-1);
          done();
       });
        
    });
    
});
