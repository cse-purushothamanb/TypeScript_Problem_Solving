class processLRU {
    threads = [];
    capacity;

    constructor(capacity) {
        this.capacity = capacity;
    }

    input(newThread) {
        console.log("Input: ", newThread);
        const existingIndex = this.#get(newThread);
        this.#process(newThread, existingIndex);
        console.log("Finally the list: ", this.threads);
    }

    #get(thread) {
        return this.threads.indexOf(thread);
    }

    #process(thread, existingIndex) {
        if (existingIndex !== -1) {
            const splicedElement = this.threads.splice(existingIndex, 1);
            this.threads.push(splicedElement[0]);
        } else if (this.threads.length === this.capacity) {
            this.threads.shift();
            this.threads.push(thread);
        } else {
            this.threads.push(thread);
        }
    }
}

const obj = new processLRU(4);
obj.input(5);
obj.input(6);
obj.input(7);
obj.input(8);
obj.input(9);
