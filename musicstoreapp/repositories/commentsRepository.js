module.exports = {
    mongoClient: null,
    app: null,
    init: function (app, mongoClient) {
        this. mongoClient= mongoClient;
        this.app = app;
    }, insertComment: async function (comment) {
            try {
                const client = await this.mongoClient.connect(this.app.get('connectionStrings'));
                const database = client.db("musicStore");
                const collectionName = 'comments';
                const commentsCollection = database.collection(collectionName);
                const result = await commentsCollection.insertOne(comment);
                return result.insertedId;
            } catch (error) {
                throw (error);
            }
        }, getComments: async function (filter, options) {
        try {
            const client = await this.mongoClient.connect(this.app.get('connectionStrings'));
            const database = client.db("musicStore");
            const collectionName = 'comments';
            const commentsCollection = database.collection(collectionName);
            const comments = await commentsCollection.find(filter, options).toArray();
            return comments;
        } catch (error) {
            throw (error);
        }
    }
};