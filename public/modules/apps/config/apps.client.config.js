'use strict';

// Configuring the Articles module
angular.module('apps').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '我的应用', 'apps', 'dropdown', '/apps(/create)?', 'false', ['user']);
		Menus.addSubMenuItem('topbar', 'apps', '应用列表', 'apps');
		Menus.addSubMenuItem('topbar', 'apps', '添加应用', 'apps/create');

		Menus.addMenuItem('topbar', '应用列表', 'apps', 'item', '/apps', 'false', ['admin']);
	}
]);
