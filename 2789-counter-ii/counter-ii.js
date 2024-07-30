/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let sv=init
    
    var  increment = function(){
        return ++sv
    }
    var reset = function(){
        sv=init
        return sv
    }
    var decrement = function(){
        return --sv
    }
    return {increment,decrement,reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */