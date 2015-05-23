var Posts = new Mongo.Collection("posts");

if (Meteor.isClient) {
    @Service('Posts')
    @Inject(['$meteor'])
    class PostsService {
        constructor($meteor) {
            this.find = (id) => {
                if (id)
                    return $meteor.object(Posts, id);
                else
                    return $meteor.collection(Posts);
            };
        }
    }
}

Posts.allow({
    insert: function (userId, post) {
        return userId && post.owner === userId;
    },
    update: function (userId, post, fields, modifier) {
        if (userId !== post.owner)
            return false;

        return true;
    },
    remove: function (userId, post) {
        if (userId !== post.owner)
            return false;

        return true;
    }
});