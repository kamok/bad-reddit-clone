app.controller('mainCtrl', function($scope) {
	$scope.posts = [
	{title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
	];

	$scope.addPost = function () {
		if(!$scope.title || $scope.title === "") { return ; }
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		});
		$scope.title = "";
		$scope.link = "";
	};

	$scope.upvote = function (post) {
		post.upvotes += 1;
	}
});