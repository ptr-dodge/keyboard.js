# Keyboard.js
<em style="color:lightblue">Simulate and detect key events with the Keyboard class.</em>

## Usage
```js
import Keyboard from './Keyboard.js'
```

Start by creating a new instance of the Keyboard class:
```js
var kb = new Keyboard(document.querySelector("#element"))
```
Create a new Keyboard instance, providing an optional element — the DOM element you want to detect an event on. If not provided, it defaults to `document`, it is also accessible through `keyboard.element`.

## Keydown and Keyup
To detect keydown and keyup events, use the keydown and keyup methods respectively:
```js
kb.keydown("a", (event) => console.log("a key is pressed"));
kb.keyup("a", (event) => console.log("a key is released"));
```

## Create keypresses
To simulate a keypress event, use the press method:
```js
kb.press("a", {}, () => console.log("simulated a keypress event of a"));
```

## Key releases
To simulate a key release event, use the release method:
```js
kb.release("a", {}, () => console.log("simulated a key release event of a"));
```

## Keymap
To map a set of keys to their respective callbacks upon an event (type), use the keymap method:

```js
var keyArr = ["a", "d", "w", "s"];
var callbackArr = [
  () => console.log("left"),
  () => console.log("right"),
  () => console.log("up"),
  () => console.log("down")
];

kb.keymap(keyArr, "keydown", callbackArr);
```

## Functions
Most functions take a key, modifiers and callback argument. key is the key you want to listen for or simulate, modifiers is an object which can contain ctrl, alt and shift properties and callback is the function you want to execute on this key event.

## Examples
```js
var kb = new Keyboard();
kb.keydown(["a", "b"], () => console.log("a or b is pressed"));

kb.keyup("c", { ctrl: true }, () => console.log("ctrl+c is released"));

kb.press("d", {ctrl: true, shift: true}, () => console.log("Simulated ctrl+shift+d press event"));

kb.release("e", {alt: true}, () => console.log("Simulated alt+e release event"));
```

```js
var keys = ["f", "g"];
var callbacks = [
  () => console.log("f is pressed"),
  () => console.log("g is pressed")
];
kb.keymap(keys, "keydown", callbacks);
```