# Keyboard.js

### <em style="color:lightblue">Simulate and detect keypresses with my library</em>

---

Create a new _Keyboard_ instance:

```js
var kb = new Keyboard(element)
```

For detecting <em style="color:lightblue">keydown</em> and <em style="color:lightblue">keyup</em> events, <em style="color:lightblue">element</em> is the element you want to detect an event on, this defaults to `document`. This can be changed via `Keyboard.element`

### Example:

```js
var kb = new Keyboard(document.querySelector("#element"));
kb.keydown("a", () => console.log("a"))
```

The <em style="color:lightblue">keydown</em> and <em style="color:lightblue">keyup</em> methods take in a key to listen for and a callback to execute once the key is pressed.

## <a id="keydown">_Keydown()_</a>

The first argument for <em style="color:lightblue">keydown</em> is nullable and takes in a string or an array of strings:

For the callback, if you want to provide a callback as an inline function, you need to use an anonymous function; `function() {}` or `() => {}` to invoke the callback on a key event.

Else you will get an error: `please provide a function as a callback` or the argument will be executed on the browser parsing it. The same goes for `keyup`, `press`, and `release`

## <a id="keyup">_keyup()_</a>

The same rules _(modifiers)_ apply to this method as well. Only difference is that it detects _keyup_ events.
Also nullable

### Bad example

```js
kb.keydown("a", console.log("a"))❌
// the console.log statement is not wrapped in a function
// doesn't work
```

### Good example

```js
kb.keydown("a", () => console.log("a"))✔️
// the console.log statement is not wrapped in a function
// works
```

This works too, more conventional method.

```js
kb.keydown("a", callback)✔️
// remember not to use () for specifying a callback

function callback() {
    console.log("a")
}
```

---

## <a id="press">_press()_</a>

This method takes in a target element; this could be a `<textarea>` or just a `<div>`, etc.

The second argument is for modifiers; `ctrl`, `alt`, `shift`
these must be specified like so in an array:

```js
kb.keydown("a", ["ctrl", "..."])
```

If no modifiers are specified, the second argument defaults to the callback with this nifty bit:

```js
if (typeof arguments[1] == "array") {
  modifiers = arguments[1]
}
if (typeof arguments[1] == "function") {
  callback = arguments[1]
}
if (typeof arguments[2] == "array") {
  modifiers = arguments[2]
}
if (typeof arguments[2] == "function") {
  callback = arguments[2]
}
```

## <a id="release">_release()_</a>

Same things apply to this method.