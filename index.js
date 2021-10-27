const siteContent = {
    "report": {
        "daily": 'Daily',
        "weekly": 'Weekly',
        "monthly": 'Monthly'
    },
    "title": "Work",
    "timeframes": {
        "daily": {
            "current": 5,
            "previous": 7
        },
        "weekly": {
            "current": 32,
            "previous": 36
        },
        "monthly": {
            "current": 103,
            "previous": 128
        }
    },
    "title": "Play",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 2
        },
        "weekly": {
            "current": 10,
            "previous": 8
        },
        "monthly": {
            "current": 23,
            "previous": 29
        }
    },
    "title": "Study",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 7
        },
        "monthly": {
            "current": 13,
            "previous": 19
        }
    },
    "title": "Exercise",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 5
        },
        "monthly": {
            "current": 11,
            "previous": 18
        }
    },
    "title": "Social",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 3
        },
        "weekly": {
            "current": 5,
            "previous": 10
        },
        "monthly": {
            "current": 21,
            "previous": 23
        }
    },
    "title": "Self Care",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 2,
            "previous": 2
        },
        "monthly": {
            "current": 7,
            "previous": 11
        }
    },
};

// View Report Types
const reportType = document.querySelectorAll('a')
reportType[0].textContent = siteContent['report']['daily']
reportType[1].textContent = siteContent['report']['weekly']
reportType[2].textContent = siteContent['report']['monthly']

// title of report
const workHours = document.getElementsByClassName('hours')[0]
workHours.textContent = 'Work';
const playHours = document.getElementsByClassName('hours')[1]
playHours.textContent = 'Play';
const studyHours = document.getElementsByClassName('hours')[2]
studyHours.textContent = 'Study';
const exerciseHours = document.getElementsByClassName('hours')[3]
exerciseHours.textContent = 'Exercise';
const socialHours = document.getElementsByClassName('hours')[4]
socialHours.textContent = 'Social';
const selfCareHours = document.getElementsByClassName('hours')[5]
selfCareHours.textContent = 'Self-Care';


// current hours
const workCurrentHours = document.getElementsByClassName('currentTimeframe')[0]
workHours.textContent = siteContent['timeframes'][3]['daily']['current'];
const playCurrentHours = document.getElementsByClassName('currentTimeframe')[1]
playHours.textContent = 'Play';
const studyCurrentHours = document.getElementsByClassName('currentTimeframe')[2]
studyHours.textContent = 'Study';
const exerciseCurrentHours = document.getElementsByClassName('hours')[3]
exerciseHours.textContent = 'Exercise';
const socialCurrentHours = document.getElementsByClassName('currentTimeframe')[4]
socialHours.textContent = 'Social';
const selfCareCurrentHours = document.getElementsByClassName('currentTimeframe')[5]
selfCareHours.textContent = 'Self-Care';


const push = document.querySelector('h1').onClick = displayInfo;

function displayInfo() {
    document.getElementsByClassName('currentTimeframe').innerHTML = siteContent['timeframes']['daily']['current']
}
