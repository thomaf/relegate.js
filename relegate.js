/**
 * return a function executing in the good scope
 */
function relegate(callbackContext, callback) {
	var a = Array.prototype.slice.call(arguments, 2);
	var _fn = function () {
		var args = Array.prototype.slice.call(arguments, 0);
		return callback.apply(callbackContext, Array.prototype.concat.call(a, args));
	}
	_fn.a = arguments;
	return _fn;
}
