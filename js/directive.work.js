(function () {
	'use strict';

	window.angular.module("resume").directive('resumeWork', function () {
		var linker = function (scope, element, attr) {

		};

		return {
			restrict: 'AE',
			link: linker,
			template:   '<table class="table">' +
							'<tr>' +
								'<td class="text-info"><h4>{{job.jobName}} ({{job.company}})</h4></td>' +
								'<td class="text-right text-info">' +
									'{{job.location}}' +
									'<br>' +
									'{{job.dates}}' +
								'</td>' +
							'</tr>' +
						'</table>' +
						'<ul>' +
							'<li ng-repeat="highlight in job.highlights" ng-bind-html="highlight"></li>' +
						'</ul>',
			scope: {
				job: '='
			}
		};
	});
}).call();