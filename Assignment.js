

class processLRU {
    threads = [];
    capacity;
    constructor(capacity){
        this.capacity=capacity;
    }
    input(newThread) {
            console.log("Input: ",newThread)
            if(this.threads[0]===undefined){
                this.threads.push(newThread);
                console.log("Inserted: ",this.threads)
            }else if(this.threads.includes(newThread)){
                const indexOfNewThread = this.threads.indexOf(newThread);
                const splicedElement = this.threads.splice(indexOfNewThread,1);
                this.threads.push(splicedElement[0]);
            }else if(this.threads.length === this.capacity){
                this.threads.shift();
                this.threads.push(newThread);
            }else {
                this.threads.push(newThread);
            }
    console.log("Finally the list: ",this.threads)
}
}

const obj = new processLRU(5);
obj.input(3);
obj.input(4);
obj.input(5);
obj.input(6);
obj.input(7);
obj.input(5);
