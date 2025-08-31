import PocketBase from 'pocketbase';
import 'dotenv/config';

if (!process.env.PB_URL) {
    throw new Error("PB_URL environment variable is not set");
}

const pb = new PocketBase(process.env.PB_URL);
pb.autoCancellation(false);
if (process.env.PB_ADMIN_TOKEN)
    pb.authStore.save(process.env.PB_ADMIN_TOKEN);
else
    throw new Error("PB_ADMIN_TOKEN environment variable is not set");

export default pb;