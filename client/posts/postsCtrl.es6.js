@State({name: 'posts', url: '/posts/{id}'})
@Component('posts')
@View({templateUrl: 'client/posts/posts.ng.html'})
@Inject(['Posts', '$stateParams', 'User'])
class PostsCtrl {
    constructor(Posts, $stateParams, User) {
        var that = this;

        window.p = Posts;
        that.post = Posts.find($stateParams.id);

        that.addComment = function () {
            if (that.body === '') { return; }
            if (!that.post.comments)
                that.post.comments = [];
            that.post.comments.push({
                body:    that.body,
                author:  User.emails[0].address,
                upvotes: 0
            });
            that.body = '';
        };

        that.incrementUpvotes = function (comment) {
            comment.upvotes++;
        };
    }
}