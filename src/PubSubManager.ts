import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private redisClient: RedisClientType;
  private subscriptions: Map<string, number[]>;
  private static instance: PubSubManager;

  constructor() {
    this.redisClient = createClient();
    this.redisClient.connect();
    this.subscriptions = new Map();
  }

  static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      return (PubSubManager.instance = new PubSubManager());
    }
    return PubSubManager.instance;
  }

  subscribe(userId: number, stock: string) {
    if (!this.subscriptions.has(stock)) {
      this.subscriptions.set(stock, []);
    }
    this.subscriptions.get(stock)?.push(userId);
    if (this.subscriptions.get(stock)?.length === 1) {
      this.redisClient.subscribe(stock, (message) => {
        this.handleMessage(stock, message);
      });
      console.log(`Subscribed to stock: ${stock}`);
    }
  }

  handleMessage(stock: string, message: string) {
    console.log(`Message received for stock: ${stock}:${message}`);
    this.subscriptions.get(stock)?.forEach((sub) => {
      console.log(`Data received by ${sub}`);
    });
  }

  unsubscribe(userId: number, stock: string) {
    this.subscriptions.set(
      stock,
      this.subscriptions.get(stock)?.filter((sub) => sub !== userId) || []
    );
    if (this.subscriptions.get(stock)?.length === 0) {
      this.redisClient.unsubscribe(stock);
      console.log(`Unsubscribed to stock: ${stock}`);
    }
  }

  // Cleanup on instance destruction
  public async disconnect() {
    await this.redisClient.quit();
  }
}
