module.exports = '<div class="navbar-header">' +
	'<button type="button" class="navbar-toggle" ng-click="isCollapsed = !isCollapsed">' +
		'<span class="icon-bar"></span>' +
		'<span class="icon-bar"></span>' +
		'<span class="icon-bar"></span>' +
	'</button>' +
	'<a class="navbar-brand" href="#/dashboard" ng-click="appController.displayHome()">Tvrbo Admin</a>' +
'</div>' +
'<ul class="nav navbar-top-links navbar-right hidden-xs">' +
	'<li>' +
		'<a href="https://www.tvrbo.pro">' +
			'<i class="fa fa-globe fa-lg"></i>&nbsp;Tvrbo' +
		'</a>' +
	'</li>' +
	// '<!--<li uib-dropdown>' +
	// 	'<a uib-dropdown-toggle href="#" aria-expanded="true" ng-controller="username">' +
	// 		'<i class="fa fa-user fa-lg"></i>&nbsp;{{ username }}&nbsp;<i class="fa fa-caret-down"></i>' +
	// 	'</a>' +
	// 	'<ul class="dropdown-menu dropdown-user" role="menu">' +
	// 		'<li><a href="#" onclick="logout()"><i class="fa fa-sign-out fa-fw"></i> Logout</a></li>' +
	// 	'</ul>' +
	// '</li>-->' +
	'</ul>';
