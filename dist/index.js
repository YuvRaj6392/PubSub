"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManager_1 = require("./PubSubManager");
let count = 0;
setInterval(() => {
    PubSubManager_1.PubSubManager.getInstance().subscribe(count++, "APPL");
}, 5000);
let unsub = 0;
setInterval(() => {
    PubSubManager_1.PubSubManager.getInstance().unsubscribe(unsub++, "APPL");
}, 20000);
