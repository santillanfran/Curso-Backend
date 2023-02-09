import mongoose from "mongoose";
import config from '../config.js'

mongoose.connect(config.mongoDB.URL, config.mongoDB.options);

class MongoClass {
    constructor(collectionName, docSchema) {
        this.collection = mongoose.model(collectionName, docSchema);
    }

    //OK
    async getAll() {
        try {
            const allItems = await this.collection.find({});
            return allItems;
        } catch (err) {
            throw new Error(err);
        }
    }

    async create(obj) {
        try {
            const newItem = await this.collection.create(obj);
            return newItem;

        } catch (err) {
            throw new Error(err);
        }
    }
    //NO
    async getItem(id) {
        try {
            const findItemId = await this.collection.findById(id)
            return findItemId

        } catch (err) {
            throw new Error(err);
        }

    }

    async update(id, obj) {
        try {
            let updateId = await this.collection.findOneAndUpdate(id, obj)
            return updateId
        } catch (err) {
            throw new Error(err);
        }

    }

    async deleteById(id) {
        try {
            const deleteItem = await this.collection.findByIdAndDelete(id)
            return deleteItem

        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteAll() {
        try {
            const deleteAll = await this.collection.deleteMany({})
            return deleteAll

        } catch (err) {
            throw new Error(err);
        }
    }

}


export default MongoClass;