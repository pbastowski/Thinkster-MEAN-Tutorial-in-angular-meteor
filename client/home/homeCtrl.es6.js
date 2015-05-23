@State({name: 'home', url: '/home', defaultRoute: true})
@Component('home')
@View({templateUrl: 'client/home/home.ng.html'})
@Inject(['$meteor', '$rootScope'])
class homeCtrl {
    constructor($meteor, $rootScope) {
        var self = this;

        self.posts = $meteor.collection(Posts);

        self.addPost = function () {
            if (self.title === '') { return; }
            if (!$rootScope.currentUser) { return; }
            self.posts.push({
                owner:   $rootScope.currentUser._id,
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
