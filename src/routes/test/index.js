import { connectToDatabase } from "$lib/db"
import { ObjectID } from "mongodb"

export async function get(request) {
    try {
        const completed = request.url.searchParams.get('completed') === 'true' ? true : false
        const dbConnection = await connectToDatabase()
        const db = dbConnection.db
        const collection = db.collection('test')
        const test = await collection.find({completed}).toArray()
        return {
            status: 200,
            body: {test}
        }
    } catch(err) {
        return {
            status: 500,
            body: {error: 'A server error occurred'}
        }
    }
}

export async function post(request) {
    try {
        const dbConnection = await connectToDatabase()
        const db = dbConnection.db
        const collection = db.collection('test')
        await collection.insertOne(test)

        return {
            status: 200,
            body: {status: 'Success'}
        }
    } catch(err) {
        return {
            status: 500,
            body: {error: 'A server error occurred'}
        }
    }
}

export async function put(request) {
    
}

export async function del(request) {
    
}