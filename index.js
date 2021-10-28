const siteContent = {
	"report": {
		"daily": 'Daily',
		"weekly": 'Weekly',
		"monthly": 'Monthly',
	},

	"timeframesWork": {
	    "title": 'Work',        
		"daily": {
			"current": 5,
			"previous": 'Last Week - 7 hrs',
		},
		"weekly": {
			"current": 32,
			"previous": 'Last Week - 36 hrs',
		},
		"monthly": {
			"current": 103,
			"previous": 'Last Week - 128 hrs',
		},
	},
	"timeframesPlay": {
        "title": 'Play',
		"daily": {
			"current": 1,
			"previous": 'Last Week - 2 hrs',
		},
		"weekly": {
			"current": 10,
			"previous": 'Last Week - 8 hrs',
		},
		"monthly": {
			"current": 23,
			"previous": "Last Week - 29 hrs",
		},
	},
	"timeframesStudy": {
        "title": 'Study',
		"daily": {
			"current": 0,
			"previous": 'Last Week - 1 hr',
		},
		"weekly": {
			"current": 4,
			"previous": 'Last Week - 7 hrs',
		},
		"monthly": {
			"current": 13,
			"previous": 'Last Week - 19 hrs',
		},
	},
	"timeframesExercise": {
        "title": 'Exercise',
		"daily": {
			"current": 1,
			"previous": 'Last Week - 1 hr',
		},
		"weekly": {
			"current": 4,
			"previous": 'Last Week - 5 hrs',
		},
		"monthly": {
			"current": 11,
			"previous": 'Last Week - 18 hrs',
		},
	},	
	"timeframesSocial": {
        "title": 'Social',
		"daily": {
			"current": 1,
			"previous": 'Last Week - 3 hrs',
		},
		"weekly": {
			"current": 5,
			"previous": 'Last Week - 10 hrs',
		},
		"monthly": {
			"current": 21,
			"previous": 'Last Week - 23 hrs',
		},
	},	
	"timeframesSelfCare": {
        "title": 'Self Care',
		"daily": {
			"current": 0,
			"previous": 'Last Week - 1 hr',
		},
		"weekly": {
			"current": 2,
			"previous": 'Last Week - 2 hrs',
		},
		"monthly": {
			"current": 7,
			"previous": 'Last Week - 11 hrs',
		},
	},
};

// View Report Types
const reportType = document.querySelectorAll('a');
reportType[0].textContent = siteContent['report']['daily'];
reportType[1].textContent = siteContent['report']['weekly'];
reportType[2].textContent = siteContent['report']['monthly'];

// title of report
const reportTitle = document.querySelectorAll('.headerMenu p')
reportTitle[0].textContent = siteContent['timeframesWork']['title'];
reportTitle[1].textContent = siteContent['timeframesPlay']['title'];
reportTitle[2].textContent = siteContent['timeframesStudy']['title'];
reportTitle[3].textContent = siteContent['timeframesExercise']['title'];
reportTitle[4].textContent = siteContent['timeframesSocial']['title'];
reportTitle[5].textContent = siteContent['timeframesSelfCare']['title'];

// current hours
const workCurrentHours = document.querySelectorAll('.summary h1')
workCurrentHours[0].textContent = siteContent['timeframesWork']['daily']['current'];
workCurrentHours[1].textContent = siteContent['timeframesPlay']['daily']['current'];
workCurrentHours[2].textContent = siteContent['timeframesStudy']['daily']['current'];
workCurrentHours[3].textContent = siteContent['timeframesExercise']['daily']['current'];
workCurrentHours[4].textContent = siteContent['timeframesSocial']['daily']['current'];
workCurrentHours[5].textContent = siteContent['timeframesSelfCare']['daily']['current'];

// previous hours
const previousHours = document.querySelectorAll('.summary p')
previousHours[1].textContent = siteContent['timeframesWork']['daily']['previous'];
previousHours[2].textContent = siteContent['timeframesPlay']['daily']['previous'];
previousHours[3].textContent = siteContent['timeframesStudy']['daily']['previous'];
previousHours[4].textContent = siteContent['timeframesExercise']['daily']['previous'];
previousHours[5].textContent = siteContent['timeframesSocial']['daily']['previous'];
previousHours[6].textContent = siteContent['timeframesSelfCare']['daily']['previous'];

// const push = (document.querySelector('h1').onClick = displayInfo);

// function displayInfo() {
// 	document.getElementsByClassName('currentTimeframe').innerHTML =
// 		siteContent['timeframes']['daily']['current'];
// }
