export default class Keyboard {
    constructor(element = document) {
        this.key = "";
        this.element = element;
    }

    keyEvent(type, keys, callback = () => {}) {
        if (!Array.isArray(keys)) {
            keys = [keys];
        }

        if (typeof callback !== 'function') {
            console.error("Please provide a function as a callback");
            return;
        }

        this.element.addEventListener(type, (e) => {
            if (keys.includes(e.key)) {
                callback(e);
            }
        });
    }

    keydown(keys, callback) {
        this.keyEvent('keydown', keys, callback);
    }

    keyup(keys, callback) {
        this.keyEvent('keyup', keys, callback);
    }

    trigger(type, key, modifiers = {}, callback = () => {}) {
        if (typeof callback !== 'function') {
            console.error("Please provide a function as a callback");
            return;
        }

        const eventInit = {
            key: key,
            ctrlKey: modifiers.ctrl || false,
            shiftKey: modifiers.shift || false,
            altKey: modifiers.alt || false,
            target: this.element,
            repeat: false
        };

        const event = new KeyboardEvent(type, eventInit);
        this.element.dispatchEvent(event);
        callback();
    }

    press(key, modifiers, callback) {
        this.trigger('keydown', key, modifiers, callback);
    }

    release(key, modifiers, callback) {
        this.trigger('keyup', key, modifiers, callback);
    }

    keymap(keys, type, callbacks) {
        if (!Array.isArray(keys)) {
            keys = [keys];
        }

        if (!Array.isArray(callbacks)) {
            callbacks = [callbacks];
        }

        keys.forEach((key, index) => {
            let callback = callbacks[index] || (() => {});
            if (type == "keydown") this.keydown(key, callback);
            if (type == "keyup") this.keyup(key, callback);
        });
    }
}
