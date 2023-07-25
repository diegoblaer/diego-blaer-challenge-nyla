import { Redis } from '@upstash/redis';

// See documentation at
// https://docs.upstash.com/redis/sdks/javascriptsdk/getstarted#basic-usage
const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

const REDIX_PREFIX = 't1';

export const fetchFormData = async (key: string) => {
  return await redis.get(`${REDIX_PREFIX}${key}`);
};

export const persistFormData = async (key: string, value: any) => {
  return await redis.set(`${REDIX_PREFIX}${key}`, value);
};
// NOTE: use your full_name as a key prefix when writing to Redis, to avoid collisions.

export default redis;
