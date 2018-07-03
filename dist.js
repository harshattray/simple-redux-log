'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @Author: harsha
 * @Date:   2018-07-03T23:24:51+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-07-03T23:25:44+05:30
 */
var logger = function logger(store) {
	return function (next) {
		return function (action) {
			console.group(action.type);
			console.log('The action: ', action);
			var returnValue = next(action);
			console.log('The new State: ', store.getState());
			console.groupEnd();
			return returnValue;
		};
	};
};

exports.default = logger;
