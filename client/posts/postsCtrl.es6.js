@State({name: 'posts', url: '/posts/{id}'})
@Component('posts')
@View({templateUrl: 'client/posts/posts.ng.html'})
@Inject(['$meteor', '$stateParams', '$rootScope'])
class PostsCtrl {
    constructor($meteor, $stateParams, $rootScope) {
        var that = this;
        that.post = $meteor.object(Posts, $stateParams.id);

        that.addComment = function () {
            if (that.body === '') { return; }
            if (!that.post.comments)
                that.post.comments = [];
            that.post.comments.push({
                body:    that.body,
                author:  $rootScope.currentUser.emails[0].address,
                upvotes: 0
            });
            that.body = '';
        };

        that.incrementUpvotes = function (comment) {
            comment.upvotes++;
        };
    }
}
