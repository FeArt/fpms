'use strict';

var env = require('./../../env.json');

module.exports = {
	port: 443,
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + env.DB_USERNAME + ':' + env.DB_PASSWORD +
        '@localhost/fpms',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
                'public/lib/bootstrap-additions/dist/bootstrap-additions.min.css',
                'public/lib/angular-motion/dist/angular-motion.min.css',
				'public/lib/datatables/media/css/jquery.dataTables.min.css',
                'public/lib/datatables-responsive/css/dataTables.responsive.css',
                'public/lib/font-awesome/css/font-awesome.min.css'
			],
			js: [
                'public/lib/jquery/dist/jquery.min.js',
                'public/lib/datatables/media/js/jquery.dataTables.min.js',
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/lib/angular-datatables/dist/angular-datatables.min.js',
                'public/lib/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js',
                'public/lib/datatables-responsive/js/dataTables.responsive.js',
                'public/lib/angular-strap/dist/angular-strap.min.js',
                'public/lib/angular-strap/dist/angular-strap.tpl.min.js',
                'public/lib/angular-i18n/angular-locale_zh-cn.js',
                'public/lib/highcharts/highcharts.js',
                'public/lib/highcharts/highcharts-more.js',
                'public/lib/highcharts/modules/exporting.js',
                'public/lib/highcharts-ng/dist/highcharts-ng.min.js',
                'public/lib/ng-clip/dest/ng-clip.min.js',
                'public/lib/zeroclipboard/dist/ZeroClipboard.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	}
};
