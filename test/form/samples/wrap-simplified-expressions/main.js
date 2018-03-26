const wrapper = {
	foo() {
		console.log(this);
	}
};

// Indirectly called member expressions set the callee's context to global "this"
(true && wrapper.foo)();
(true && (true && wrapper.foo))();

// Only callees of call expressions should be wrapped
console.log(true && wrapper.foo);

// Indirectly invoked eval is executed in the global scope
function testEval() {
	console.log((true && eval)('this'));
}

testEval.call('test');
