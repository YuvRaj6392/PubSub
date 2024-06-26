"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubSubManager = void 0;
const redis_1 = require("redis");
class PubSubManager {
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
        this.redisClient.connect();
        this.subscriptions = new Map();
    }
    static getInstance() {
        if (!PubSubManager.instance) {
            return (PubSubManager.instance = new PubSubManager());
        }
        return PubSubManager.instance;
    }
    sayHello() {
        console.log("hello");
    }
}
exports.pubSubManager = PubSubManager.getInstance();
