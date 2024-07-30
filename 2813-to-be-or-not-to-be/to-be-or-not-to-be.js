/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let toBe = function(v){
        if(val===v)
        return true
        else
        throw new Error("Not Equal")
    }
    let notToBe = function(v){
        if(val!==v)
        return true
        else
        throw new Error("Equal")
    }
    
    return {toBe,notToBe}
};


// expect(5).toBe(5);
// expect(5).notToBe(5); 
