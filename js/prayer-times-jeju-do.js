var abc = 123;

jQuery(document).ready(function(){

	var salah_time = {

		"January-Part-1": {},
		"January-Part-2": {},
		"January-Part-3": {},
		
		"February-Part-1": {},
		"February-Part-2": {},
		"February-Part-3": {},

		"March-Part-1": {},
		"March-Part-2": {},
		"March-Part-3": {},

		"April-Part-1": {
			"fajr":"5:20 AM", "zohr": "1:30 PM", "asr":"5:45 PM", "maghrib":"7:15 PM", "isha":"9:00 PM"
		},
		"April-Part-2": {
			"fajr":"5:20 AM", "zohr": "1:30 PM", "asr":"5:45 PM", "maghrib":"7:15 PM", "isha":"9:00 PM"
		},
		"April-Part-3": {
			"fajr":"5:20 AM", "zohr": "1:30 PM", "asr":"5:45 PM", "maghrib":"7:15 PM", "isha":"9:00 PM"
		},

		"May-Part-1": {
			"fajr":"5:20 AM", "zohr": "1:30 PM", "asr":"5:45 PM", "maghrib":"7:15 PM", "isha":"9:00 PM"
		},
		"May-Part-2": {
			"fajr":"5:20 AM", "zohr": "1:30 PM", "asr":"5:45 PM", "maghrib":"7:15 PM", "isha":"9:00 PM"
		},
		"May-Part-3": {
			"fajr":"5:20 AM", "zohr": "1:30 PM", "asr":"5:45 PM", "maghrib":"7:15 PM", "isha":"9:00 PM"
		},

		"June-Part-1": {},
		"June-Part-2": {},
		"June-Part-3": {},

		"July-Part-1": {},
		"July-Part-2": {},
		"July-Part-3": {},

		"August-Part-1": {},
		"August-Part-2": {},
		"August-Part-3": {},

		"September-Part-1": {},
		"September-Part-2": {},
		"September-Part-3": {},

		"October-Part-1": {},
		"October-Part-2": {},
		"October-Part-3": {},

		"November-Part-1": {},
		"November-Part-2": {},
		"November-Part-3": {},

		"December-Part-1": {},
		"December-Part-2": {},
		"December-Part-3": {},

	};

	var nowDate = new Date();
	var nowDay = nowDate.getDate();
	var nowMonth = nowDate.getMonthName();
	var nowyear = nowDate.getFullYear();

	var key = "";
	key += nowMonth + "-";

	if(nowDay>=1 && nowDay<=10) {
		key += "Part-1";
	}
	else if(nowDay>=11 && nowDay<=20) {
		key += "Part-2";
	}
	else if(nowDay>=21 && nowDay<=31) {
		key += "Part-3";
	}

	jQuery("span#fajr-time").text(salah_time[key]["fajr"]);
	jQuery("span#zohr-time").text(salah_time[key]["zohr"]);
	jQuery("span#asr-time").text(salah_time[key]["asr"]);
	jQuery("span#maghrib-time").text(salah_time[key]["maghrib"]);
	jQuery("span#isha-time").text(salah_time[key]["isha"]);

});