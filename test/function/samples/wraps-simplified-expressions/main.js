const wrapper = {
	foo() {
		assert.notEqual(this, wrapper)
	}
};

// Indirectly called member expressions set the callee's context to global "this"
(true && wrapper.foo)();
(true && (true && wrapper.foo))();

// Indirectly invoked eval is executed in the global scope
function testEval() {
	assert.notEqual((true && eval)('this'), 'test');
}

testEval.call('test');
