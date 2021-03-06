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
 * Get the current time
 *
 * @api private
 */
function currentTime() {
  return Math.floor(Date.now()/1000);
};

/**
 * Emit time updates
 *
 * @api private
 */
function emit() {
  emitter.emit("tick", currentTime());
};

/**
 * Subscribe to time updates
 *
 * @param {Function} fn
 * @api public
 */
exports.on = function(fn) {
  // Register the listener
  emitter.on("tick", fn);

  // Give it a value
  fn(currentTime());
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
  // Check if we've already started
  if (interval) return;

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
  if (interval) clearInterval(interval);
  interval = null;
};
