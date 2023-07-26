import { Redis } from "@upstash/redis";
import { FormState } from "../components/Form";
import { REDIS_SITE_DATA_KEY } from "../utils/constants";

// See documentation at
// https://docs.upstash.com/redis/sdks/javascriptsdk/getstarted#basic-usage
const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
  retry: {
    retries: 5,
    backoff: (retryCount) => Math.exp(retryCount) * 50,
  },
});

export const fetchRedisFormState = async () => {
  const formData = await redis.get(REDIS_SITE_DATA_KEY);
  return formData ?? {};
};

export const persistRedisFormState = async (formState: FormState) => {
  return await redis.set(REDIS_SITE_DATA_KEY, JSON.stringify(formState));
};

export default redis;
