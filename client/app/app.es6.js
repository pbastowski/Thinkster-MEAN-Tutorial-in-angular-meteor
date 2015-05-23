angular.extend(window, angular2now);
angular2now.options({ controllerAs: 'vm'})

angular.module('flapper-news', ['angular-meteor', 'ui.router']);

@Component('flapper-news')
@View({ templateUrl: 'client/app/app.ng.html'})
class flapperNews {}

@Service('User')
@Inject(['$rootScope'])
class User {
    constructor($rootScope) {
        return $rootScope.currentUser;
    }
}

bootstrap(flapperNews);