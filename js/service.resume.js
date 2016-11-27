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

		phoneNumber: '(425) 894-5116',

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
			"HTML4/5",
            "CSS",
            "SQL",
            "Python",
            "PHP",
			"AngularJS",
            "jQuery",
            "Bootstrap/Foundation",
            "Jasmine/Karma",
            "Git/Github",
            "TDD",
            "PhotoShop",
            "SEO",
            "Relational Databases"
		],


		// Work Experience

		jobs : [
        	{
				company : 'Front End Developer',
				jobName : 'Freelancer',
                jobUrl: 'https://ruthgendro.github.io/',
				dates: '09/16 - Present',
				location : 'Remote',
				highlights : [
					'Design and developed custom websites/apps, utilizing the various language, frameworks, and libraries listed above.',
					'Focused on producing minimalistic and responsive design, with clean and semantic code.',
                    'Strategically manage multiple projects, despite competing priorities.',
                    'Optimize all web pages for SEO and cross-browser compatibility.'
				]
			},
			{
				company : 'Blue Heron',
				jobName : 'Lead/Event Coordinator',
                jobUrl: '',
				dates: '04/16 - Present',
				location : 'Carnation, Wa',
				highlights : [
					'Plan and coordinate events for up to 200 people, paying attention to details about menu, decor, room layout, and other special requests.',
                    'Continually strive for efficiency in a fast-paced environment with competing priorities.',
                    'Deliver excellent customer experiences as both a lead/coordinator, anticipating needs whenever possible.',
					'Contributes to team effort by being cross-trained, and working in different positions depending on need.',
					'Train new employees and bring them up to company standards.'
				]
			},
            {
				company : '6igma Health',
				jobName : 'Developer Intern',
                jobUrl: '',
				dates: '09/15 - 03/16',
				location : 'Remote',
				highlights : [
					'Developed consumer web application interfaces utilizing HTML, CSS, JS, and AngularJS.',
					'Performed testing on front end interfaces to perfect intuitive user experiences, enhance visual design, ensure accessibility, and optimize performance.',
                    'Improved the usability and functionality of pre-designed UI templates through Jasmine/Karma.'
				]
			},
            {
				company : "Hugo's",
				jobName : 'Server',
                jobUrl: '',
				dates: '06/13 - 04/16',
				location : 'Redmond, WA',
				highlights : [
					'Created great customer experiences, and listened closely to feedback.',
					'Effectively worked alone, and completed tasks that a bigger business would have hired up to 7 people for (e.g., bartender, server, manager, expeditor, etc.)'
				]
			},
            {
				company : 'Steelhead Diner',
				jobName : 'Floor Manager',
                jobUrl: '',
				dates: '04/12 - 06/13',
				location : 'Seattle, WA',
				highlights : [
					'Prepped staff in a daily pre-shift meeting, working with the chef to talk about specials and events going on that day.',
					'Provided highly personalized guest oriented dining experience.',
                    'Worked with different teammate on a daily basis, as we worked in pairs during a shift, and both teammates had to communicate and work together effectively.',
                    'Trained across multiple positions, serving as back-up for FOH staff as needed.'
				]
			}
		],


        // Projects

		projectsHeader : '<h4>Front End Development Freelancing</h4>' +
						 '<h5>Project History</h5>',

		projectsFooter : '',

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
					//'Created a custom map application for keeping track of personal fishing data.',
					'Implemented Google Maps API and Foursquare API using AJAX requests, which retrieves relevant data.',
                    'Displays map with markers for all the lakes visited, including a listview, each linked to the correct marker.',
					'Customized map styling and customized markers, which emphasizes the water and various marker locations.'
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
					'Implementing changes that will increase SEO and overall optimization.',
					'Improving online web presence, and aiming for at least 50% increase in web traffic.'
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

        jobsHeader : '',
		jobsFooter : '',


		// Education
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
