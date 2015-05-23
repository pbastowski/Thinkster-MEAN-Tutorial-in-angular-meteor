@State({name: 'home', url: '/home', defaultRoute: true})
@Component('home')
@View({templateUrl: 'client/home/home.ng.html'})
@Inject(['Posts', 'User'])
class homeCtrl {
    constructor(Posts, User) {
        var self = this;

        self.posts = Posts.find();

        self.addPost = function () {
            if (self.title === '') { return; }
            if (!User) { return; }
            self.posts.push({
                owner:   User._id,
                title:   self.title,
                link:    self.link,
                upvotes: 0
            });
            self.title = '';
            self.link = '';
        };

        self.incrementUpvotes = function (post) {
            post.upvotes++;
        };

    }
}