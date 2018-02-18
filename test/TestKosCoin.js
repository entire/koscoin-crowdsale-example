const KosCoin = artifacts.require("KosCoin");

// function `contract()` cleans the slate and deploys your contracts afresh
contract('KosCoin', function() {
    it('should initialise the storedValue correctly', function(done){
    
        KosCoin.deployed().then(function(instance) {
    
            // Now that the contract is deployed, let's access the state variable
            instance.storedValue().then(function(data){ 
                assert.equal(Number(data.toString(10)), 2110, 'Initial amount was not set correctly');
                done();
            });
        });
    });

    it('should increment storedValue correctly', function(done){
        KosCoin.deployed().then(function(instance) {
            instance.storedValue().then(function(oldValue){
                instance.add(2).then(function(){
                    instance.storedValue().then(function(newValue){
                        assert.equal(Number(oldValue.toString(10)) + 2, Number(newValue.toString(10)), 'Number wasn\'t incremented correctly');
                        done();
                    });
                });
            });
        });
    });
    
    it('should decrement storedValue correctly', function(done){
        KosCoin.deployed().then(function(instance) {
            instance.storedValue().then(function(oldValue){
                instance.subtract(15).then(function(){
                    instance.storedValue().then(function(newValue){
                        assert.equal(Number(oldValue.toString(10)) - 15, Number(newValue.toString(10)), 'Number wasn\'t decremented correctly');
                        done();
                    });
                });
            });
        });
    });

    it('should multiply storedValue correctly', function(done){
        KosCoin.deployed().then(function(instance) {
            instance.storedValue().then(function(oldValue){
                instance.multiply(10).then(function(){
                    instance.storedValue().then(function(newValue){
                        assert.equal(Number(oldValue.toString(10)) * 10, Number(newValue.toString(10)), 'Number wasn\'t multiplied correctly');
                        done();
                    });
                });
            });
        });
    });

    it('should divide storedValue correctly', function(done){
        KosCoin.deployed().then(function(instance) {
            instance.storedValue().then(function(oldValue){
                instance.divide(2).then(function(){
                    instance.storedValue().then(function(newValue){
                        assert.equal(Math.floor(Number(oldValue.toString(10))/2), Number(newValue.toString(10)), 'Number wasn\'t divided correctly');
                        done();
                    });
                });
            });
        });
    });

});