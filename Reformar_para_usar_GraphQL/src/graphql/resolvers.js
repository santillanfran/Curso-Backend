const Task = require("../models/Task");

const resolvers = {
    Query: {
        hello: () => "Hello world",
        getAllTasks: async () => {
            const tasks = await Task.find();
            return tasks;
        },
        async getTask(_, { id }) {
            return await Task.findById(id);
        },
    },
    Mutation: {
        async createTask(parent, { task }, context, info) {
            const { title, description } = task;
            const newTask = new Task({ title, description });
            await newTask.save();
            return newTask;
        },
        async deleteTask(_, { id }) {
            await Task.findByIdAndDelete(id);
            return "Task Deleted";
        },
        async updateTask(_, { task, id }) {
            const taskUpdate = await Task.findByIdAndUpdate(id, {
                $set: task
            },
                { new: true });
            return taskUpdate;
        }
    },
};

module.exports = {
    resolvers,
};