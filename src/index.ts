import { PubSubManager } from "./PubSubManager";
let count = 0;
setInterval(() => {
  PubSubManager.getInstance().subscribe(count++, "APPL");
}, 5000);

let unsub = 0;
setInterval(() => {
  PubSubManager.getInstance().unsubscribe(unsub++, "APPL");
}, 20000);
