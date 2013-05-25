/**
 * Module dependencies
 */
var Emitter = require("emitter");

/**
 * Global timer
 */
var emitter = new Emitter;

/**
 * Keep a reference for the interval
 */
var interval;

/**
 * Subscribe to time updates
 *
 * @param {Function} fn
 * @api public
 */
exports.on = function(fn) {
  emitter.on("tick", fn);
};

/**
 * Unsubscribe from time updates
 *
 * @param {Function} fn
 * @api public
 */
exports.off = function(fn) {
  emitter.off("tick", fn);
};

/**
 * Start the global timer
 *
 * @api public
 */
exports.start = function() {
  function emit () {
    emitter.emit("tick", Math.floor(Date.now()/1000));
  };
  // Emit the time right now
  emit();
  // Start an interval
  interval = setInterval(emit, 1000);
};

/**
 * Stop the global timer
 *
 * @api public
 */
exports.stop = function() {
  if(interval) clearInterval(interval);
  interval = null;
};
