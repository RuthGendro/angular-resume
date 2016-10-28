(function() {
	"use strict";

	var _ = window._;
	var myResume = {
		//Enter your name here
		name : 'Ruth Gendro',

		//Enter your address here
		address : {
			street1: '',
			street2: '',
			city: 'Duvall',
			state: 'WA',
			zip: '98019'
		},

		phoneNumber: '425 894 5116',

		email: 'ruth.gendro@gmail.com',

		github: 'github.com/ruthgendro',

        githubUrl: 'https://github.com/RuthGendro',

		blog: null,

		//Enter your objective here
		objective : "<p>To utilize my year of experience as a top-notch front end developer as well as enjoyment of learning " +
					"to help companies solve difficult and interesting problems and stay on the cutting edge of technology innovation.</p>" +
					'<strong class="text-muted">Active TS Clearance</strong>',

		//Enter your comma separated skills here.  Any skills you enter will appear at the
		//front of the skills list.  Other skills from your tags and skillsUsed in projects
		//will be added at the end
		skills : [
			"JavaScript",
			"HTML5/CSS",
			"AngularJS"
		],

		projectsHeader : '<h4>Front End Development Freelancing</h4>' +
						 '<h5>Project History</h5>',

		projectsFooter : '',

		//List your projects below
		projects : [
        	{
				company : 'Personal Project',
				projectName : 'Fishing Data Map',
                projectUrl: 'https://ruthgendro.github.io/neighborhood-map/',
				dates: '10/16',
				skillsUsed : [
					'JavaScript',
					'Knockout',
                    'API Services'
				],
				highlights : [
					'Created a custom map application for keeping track of personal fishing data',
					'Utilizes Google Maps API and Foursquare API, with customized map styling to make water stand out',
                    'Shows map with markers for all the lakes visited, including a list view, each of which is linked to the correct marker',
					'Customized markers, which highlight upon mouseover, and when clicked, it bounces and an info window opens to show Foursquare and fishing data'
				]
			},
			{
				company : 'Wild Wings Studio',
				projectName : 'Wild Wings Studio Website',
                projectUrl: 'https://ruthgendro.github.io/WingsWildlifeStudio/',
				dates: '09/16 - Present',
				skillsUsed : [
					'JavaScript',
					'Bootstrap',
                    'SEO'
				],
				highlights : [
					'Custom, responsive website utilizing HTML, CSS, JavaScript, jQuery, Bootstrap, and hosted on GitHub Pages.',
					'Aim to increase web traffic by at least 25%',
					'Optimizing SEO, want to increase the average page ranking (across a variety of related terms) from an average of 3 or 4 pages to page 1.'
				]
			},
            {
				company : 'Personal Project',
				projectName : 'Portfolio',
                projectUrl: 'https://ruthgendro.github.io/',
				dates: '09/16 - Present',
				skillsUsed : [
					'JavaScript',
					'Bootstrap',
                    'AngularJS',
                    'SEO'
				],
				highlights : [
					'Designed a personal portfolio site, utilizing the skills listed above, as well as Angular to make a single page website (AngularJS development currently in progress.)',
					'Will increase page optimization to 90+',
                    'Includes a dynamic AngularJS resume'
				]
			},
            {
				company : 'Personal Project',
				projectName : 'Arcade Game',
                projectUrl: 'https://ruthgendro.github.io/arcade-game/',
				dates: '09/16',
				skillsUsed : [
					'JavaScript',
					'Object Oriented Programming',
                    'HTML5 Canvas'
				],
				highlights : [
					'Created a simple frogger game using Object Oriented Javascript',
					'Includes Javscript object.prototype for inheritance, switch statements, for loops, and if/else statements',
                    'Includes several classes, which holds various player and enemy functionality'
				]
			}



		],

		//List your education here
		education : [
			{
				degree : 'BA in Chemistry & Biochemistry',
				school : "University of Washington",
				gradDate : 'March 2015',
				comments : ''
			},
        	{
				degree : 'AS Track 2 - Transfer/Running Start',
				school : "Bellevue College",
				gradDate : 'December 2008',
				comments : '- Earned most of the AA while still in high school, then spent 1 quarter to finish.'
			}
		]
	};

	window.angular.module("resume").factory('ResumeService', ['$q', function ($q) {
		function getResume() {
			var defer = $q.defer();
			//if later you want to use REST inject $http and change this
			setTimeout(function () {
				var skills = {};
				//build the skills list from the tags and skills listed in the projects

				//rapidly de-dup skills
				_.each(myResume.projects, function (project) {
					_.each(project.skillsUsed, function (aSkill) {
						skills[aSkill] = (skills[aSkill] || 0) + 1;
					});
					if (project.tags) {
						_.each(project.tags, function (aTag) {
							skills[aTag] = true;
						});
					}
				});

				//now remove ones that we want at the top of the skills list
				_.each(myResume.skills, function (aPredefinedSkill) {
					skills[aPredefinedSkill] = false;
				});

				//attach the leftovers to the skills list and build activeSkills list
				myResume.activeSkills = {};
				_.each(Object.keys(skills), function (aSkill) {
					if (skills.hasOwnProperty(aSkill)) {
						if (skills[aSkill]) {
							myResume.skills.push(aSkill);
						}
						myResume.activeSkills[aSkill] = true;
					}
				});

				defer.resolve(myResume);
			}, 0);
			return defer.promise;
		}

		function toggleSkillActive(skill) {
			if (skill) {
				myResume.activeSkills[skill] = !myResume.activeSkills[skill];
			}
		}

		function containsActiveSkills (skillSet) {
			return _.reduce(skillSet, function(memo, skill) {
				return memo || myResume.activeSkills[skill];
			}, false);
		}

		function skillIsActive (skill) {
			return myResume.activeSkills[skill] === true;
		}

		return {
			getResume : getResume,
			toggleSkillActive: toggleSkillActive,
			skillIsActive: skillIsActive,
			containsActiveSkills: containsActiveSkills
		};
	}]);
}).call();
