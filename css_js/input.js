export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', event => {
            if ((event.key === 'ArrowUp' ||
                    event.key === 'ArrowDown' ||
                    event.key === 'ArrowLeft' ||
                    event.key === 'ArrowRight') && this.keys.indexOf(event.key) === -1) {
                this.keys.push(event.key);
            }
        });
        window.addEventListener('keyup', event => {
            if (event.key === 'ArrowUp' ||
                event.key === 'ArrowDown' ||
                event.key === 'ArrowLeft' ||
                event.key === 'ArrowRight') {
                this.keys.splice(this.keys.indexOf(event.key), 1)
            }
        })
    }
}