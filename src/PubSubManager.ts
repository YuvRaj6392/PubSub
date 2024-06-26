import { createClient, RedisClientType } from "redis";

class PubSubManager {
  private static instance: PubSubManager;
  private redisClient: RedisClientType;
  private subscriptions: Map<string, string[]>;

  constructor() {
    this.redisClient = createClient();
    this.redisClient.connect();
    this.subscriptions = new Map();
  }

  public static getInstance():PubSubManager {
    if (!PubSubManager.instance) {
      return (PubSubManager.instance = new PubSubManager());
    }
    return PubSubManager.instance;
  }

  sayHello() {
    console.log("hello");
  }
}

export const pubSubManager=PubSubManager.getInstance();
