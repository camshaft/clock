clock [![Build Status](https://travis-ci.org/CamShaft/clock.png?branch=master)](https://travis-ci.org/CamShaft/clock)
=====

Clock emitter component

Installation
------------

```sh
$ component install CamShaft/clock
```

```sh
$ npm install CamShaft/clock
```

API
---

### clock.start()

Start emitting time events

### clock.stop()

Stop emitting time events

### clock.on(fn)

Register a callback to be called every second. It receives the current time as a timestamp:

```js
var clock = require("clock");

clock.on(function(time) {
  console.log("Current time", time);
})
```

### clock.off(fn)

Unregister a callback

Tests
-----

```sh
npm install --dev
npm test
```
