"use strict";

var _siteContent;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var siteContent = (_siteContent = {
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
  }
}, _defineProperty(_siteContent, "title", "Play"), _defineProperty(_siteContent, "timeframes", {
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
}), _defineProperty(_siteContent, "title", "Study"), _defineProperty(_siteContent, "timeframes", {
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
}), _defineProperty(_siteContent, "title", "Exercise"), _defineProperty(_siteContent, "timeframes", {
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
}), _defineProperty(_siteContent, "title", "Social"), _defineProperty(_siteContent, "timeframes", {
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
}), _defineProperty(_siteContent, "title", "Self Care"), _defineProperty(_siteContent, "timeframes", {
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
}), _siteContent); // View Report Types

var reportType = document.querySelectorAll('a');
reportType[0].textContent = siteContent['report']['daily'];
reportType[1].textContent = siteContent['report']['weekly'];
reportType[2].textContent = siteContent['report']['monthly']; // title of report

var workHours = document.getElementsByClassName('hours')[0];
workHours.textContent = 'Work';
var playHours = document.getElementsByClassName('hours')[1];
playHours.textContent = 'Play';
var studyHours = document.getElementsByClassName('hours')[2];
studyHours.textContent = 'Study';
var exerciseHours = document.getElementsByClassName('hours')[3];
exerciseHours.textContent = 'Exercise';
var socialHours = document.getElementsByClassName('hours')[4];
socialHours.textContent = 'Social';
var selfCareHours = document.getElementsByClassName('hours')[5];
selfCareHours.textContent = 'Self-Care'; // current hours

var workCurrentHours = document.getElementsByClassName('currentTimeframe');
workHours.textContent = siteContent['timeframes']['daily']['current']; // const playCurrentHours = document.getElementsByClassName('currentTimeframe')[1]
// playHours.textContent = 'Play';
// const studyCurrentHours = document.getElementsByClassName('currentTimeframe')[2]
// studyHours.textContent = 'Study';
// const exerciseCurrentHours = document.getElementsByClassName('hours')[3]
// exerciseHours.textContent = 'Exercise';
// const socialCurrentHours = document.getElementsByClassName('currentTimeframe')[4]
// socialHours.textContent = 'Social';
// const selfCareCurrentHours = document.getElementsByClassName('currentTimeframe')[5]
// selfCareHours.textContent = 'Self-Care';

var push = document.querySelector('h1').onClick = displayInfo;

function displayInfo() {
  document.getElementsByClassName('currentTimeframe').innerHTML = siteContent['timeframes']['daily']['current'];
}