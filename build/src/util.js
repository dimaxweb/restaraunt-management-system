"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomArrayItems = void 0;
function randomArrayItems(arr) {
    let numberOfItems = Math.floor(Math.random() * arr.length);
    let randomItems = [];
    for (let i = 0; i < numberOfItems; i++) {
        randomItems[i] = arr[Math.floor(Math.random() * arr.length)];
    }
    return randomItems;
}
exports.randomArrayItems = randomArrayItems;
//# sourceMappingURL=util.js.map