var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
console.log(new ListNode(10));
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        // console.log("Node: "+JSON.stringify(node));
        console.log(JSON.stringify(this.root));
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        console.log(JSON.stringify(this.root));
        this.length++;
    };
    LinkedList.prototype.insertAt = function (value, pos) {
        if (pos > -1 && pos < this.length && this.root) {
            var current = this.root;
            var index = 0;
            var previous = current;
            var node = new ListNode(value);
            if (pos === 0) {
                node.next = this.root;
                this.root = node;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        else {
            return false;
        }
    };
    LinkedList.prototype.removeAt = function (pos) {
        if (pos > -1 && pos < this.length && this.root) {
            var current = this.root;
            var previous = current;
            var index = 0;
            if (pos === 0) {
                this.root = current.next;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        }
        else {
            return null;
        }
    };
    LinkedList.prototype.getNumberOfElements = function () {
        return this.length;
    };
    LinkedList.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
var numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
console.log('--- NOW REMOVING INDEX 1 ---');
numberList.removeAt(1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
console.log('--- NOW INSERTING AT INDEX 1 ---');
numberList.insertAt(100, 1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
var nameList = new LinkedList();
