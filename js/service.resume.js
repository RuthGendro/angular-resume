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
			"AngularJS",
			"Asynchronous Development"
		],

		projectsHeader : '<h4>Front End Development Freelancing</h4>' +
						 '<h5>Project History</h5>',

		projectsFooter : '',

		//List your projects below
		projects : [
			{
				company : 'Wild Wings Studio',
				projectName : 'Wild Wings Studio Website',
				dates: '09/16 - Present',
				skillsUsed : [
					'JavaScript',
					'Bootstrap',
                    'SEO'
				],
				tags : [
					'SEO',
					'Responsive Design'
				],
				highlights : [
					'',
					'',
					'',
					''
				]
			},



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
