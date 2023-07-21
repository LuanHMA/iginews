import Stripe from "stripe";
import { version } from "../../package.json";

const key =
  "sk_test_51NW9OjFGhU8yelvRQxNNPIqzdSagxpcnQDA0GBeAWADzcrXw7ZodOUKdva3KFzSjUPu8V5WJg7S5EeCUzpmnIxh600qpljhBVv";

export const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "IGNEWS-LUANHMA",
    version,
  },
});
