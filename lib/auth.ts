import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { use } from "react";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
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
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    const defaultAvater = `https://ui-avater.com/api/?name=${encodeURIComponent(user.name || user.email.split('@')[0])}&background=random`;
                    await db.collection("user").updateOne(
                        { _id: user.id },
                        { $set: { image: defaultAvater}}
                    )
                }
            }
        }
    }
})