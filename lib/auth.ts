import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    user: {
        additionalFields: {
            isOnboarded: {
                type: 'boolean',
                defaultValue: false,
                required: false,
            },
        },
    },
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }
    },
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    if (user.image) {
                        await db.collection('user').updateOne(
                            { id: user.id},
                            { $set: { isOnboarded: true }}
                        )

                    } else {
                    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email.split('@')[0])}&background=random`;
                    await db.collection("user").updateOne(
                        { id: user.id },
                        { $set: { image: defaultAvatar } }
                    );
                    }
             
                }
            }
        }
    }
});