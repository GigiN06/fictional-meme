export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', event => {
            if (event.key === 'ArrowDown' && this.keys.indexOf(event.key) === -1) {
                this.keys.push(event.key);
            }
        });
        window.addEventListener('keyup', event => {
            if (event.key === 'ArrowDown') {
                this.keys.splice(this.keys.indexOf(event.key), 1);
            }
            console.log(event.key, this.keys);
        });

    }
}