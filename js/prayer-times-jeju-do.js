jQuery(document).ready(function(){

	var salah_time = {

		/* January timings (2020) */
		"January-Part-1": {
			"fajr":"6:30 AM", "zohrOrJumma": "1:30 PM", "asr":"4:10 PM", "maghrib":"5:36 PM", "isha":"7:30 PM"
		},
		"January-Part-2": {
			"fajr":"6:30 AM", "zohrOrJumma": "1:30 PM", "asr":"4:20 PM", "maghrib":"5:46 PM", "isha":"7:30 PM"
		},
		"January-Part-3": {
			"fajr":"6:30 AM", "zohrOrJumma": "1:30 PM", "asr":"4:30 PM", "maghrib":"5:57 PM", "isha":"7:40 PM"
		},

		/* February timings (2020) */
		"February-Part-1": {
			"fajr":"6:30 AM", "zohrOrJumma": "1:30 PM", "asr":"4:40 PM", "maghrib":"6:08 PM", "isha":"7:50 PM"
		},
		"February-Part-2": {
			"fajr":"6:20 AM", "zohrOrJumma": "1:30 PM", "asr":"4:50 PM", "maghrib":"6:18 PM", "isha":"8:00 PM"
		},
		"February-Part-3": {
			"fajr":"6:10 AM", "zohrOrJumma": "1:30 PM", "asr":"5:00 PM", "maghrib":"6:27 PM", "isha":"8:10 PM"
		},

		/* March timings (2020) */
		"March-Part-1": {
			"fajr":"6:00 AM", "zohrOrJumma": "1:30 PM", "asr":"5:10 PM", "maghrib":"6:36 PM", "isha":"8:10 PM"
		},
		"March-Part-2": {
			"fajr":"5:40 AM", "zohrOrJumma": "1:30 PM", "asr":"5:10 PM", "maghrib":"6:45 PM", "isha":"8:20 PM"
		},
		"March-Part-3": {
			"fajr":"5:30 AM", "zohrOrJumma": "1:30 PM", "asr":"5:20 PM", "maghrib":"6:54 PM", "isha":"8:30 PM"
		},




		/**********************************************************************************************/
		/*                (UP -> January-March, 2020) - (DOWN -> April-December, 2019)                */
		/**********************************************************************************************/




		/* April timings (2019) */
		"April-Part-1": {
			"fajr":"5:20 AM", "zohrOrJumma": "1:30 PM", "asr":"5:20 PM", "maghrib":"7:02 PM", "isha":"8:40 PM"
		},
		"April-Part-2": {
			"fajr":"5:00 AM", "zohrOrJumma": "1:30 PM", "asr":"5:30 PM", "maghrib":"7:11 PM", "isha":"8:50 PM"
		},
		"April-Part-3": {
			"fajr":"4:40 AM", "zohrOrJumma": "1:30 PM", "asr":"5:30 PM", "maghrib":"7:19 PM", "isha":"9:10 PM"
		},

		/* May timings (2019) */
		"May-Part-1": {
			"fajr":"4:20 AM", "zohrOrJumma": "1:30 PM", "asr":"5:40 PM", "maghrib":"7:28 PM", "isha":"9:20 PM"
		},
		"May-Part-2": {
			"fajr":"4:10 AM", "zohrOrJumma": "1:30 PM", "asr":"5:40 PM", "maghrib":"7:36 PM", "isha":"9:30 PM"
		},
		"May-Part-3": {
			"fajr":"4:00 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:44 PM", "isha":"9:40 PM"
		},

		/* June timings (2019) */
		"June-Part-1": {
			"fajr":"3:50 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:50 PM", "isha":"9:50 PM"
		},
		"June-Part-2": {
			"fajr":"3:40 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:54 PM", "isha":"9:50 PM"
		},
		"June-Part-3": {
			"fajr":"3:45 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:55 PM", "isha":"10:00 PM"
		},

		/* July timings (2019) */
		"July-Part-1": {
			"fajr":"3:50 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:55 PM", "isha":"9:50 PM"
		},
		"July-Part-2": {
			"fajr":"4:00 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:53 PM", "isha":"9:50 PM"
		},
		"July-Part-3": {
			"fajr":"4:10 AM", "zohrOrJumma": "1:30 PM", "asr":"5:50 PM", "maghrib":"7:48 PM", "isha":"9:40 PM"
		},

		/* August timings (2019) */
		"August-Part-1": {
			"fajr":"4:20 AM", "zohrOrJumma": "1:30 PM", "asr":"5:40 PM", "maghrib":"7:39 PM", "isha":"9:30 PM"
		},
		"August-Part-2": {
			"fajr":"4:30 AM", "zohrOrJumma": "1:30 PM", "asr":"5:40 PM", "maghrib":"7:29 PM", "isha":"9:10 PM"
		},
		"August-Part-3": {
			"fajr":"4:40 AM", "zohrOrJumma": "1:30 PM", "asr":"5:30 PM", "maghrib":"7:17 PM", "isha":"9:00 PM"
		},

		/* September timings (2019) */
		"September-Part-1": {
			"fajr":"4:50 AM", "zohrOrJumma": "1:30 PM", "asr":"5:20 PM", "maghrib":"7:02 PM", "isha":"8:40 PM"
		},
		"September-Part-2": {
			"fajr":"5:00 AM", "zohrOrJumma": "1:30 PM", "asr":"5:10 PM", "maghrib":"6:47 PM", "isha":"8:20 PM"
		},
		"September-Part-3": {
			"fajr":"5:10 AM", "zohrOrJumma": "1:30 PM", "asr":"5:00 PM", "maghrib":"6:32 PM", "isha":"8:00 PM"
		},

		/* October timings (2019) */
		"October-Part-1": {
			"fajr":"5:20 AM", "zohrOrJumma": "1:30 PM", "asr":"4:50 PM", "maghrib":"6:17 PM", "isha":"7:50 PM"
		},
		"October-Part-2": {
			"fajr":"5:30 AM", "zohrOrJumma": "1:30 PM", "asr":"4:30 PM", "maghrib":"6:03 PM", "isha":"7:40 PM"
		},
		"October-Part-3": {
			"fajr":"5:40 AM", "zohrOrJumma": "1:30 PM", "asr":"4:20 PM", "maghrib":"5:50 PM", "isha":"7:30 PM"
		},

		/* November timings (2019) */
		"November-Part-1": {
			"fajr":"5:50 AM", "zohrOrJumma": "1:30 PM", "asr":"4:10 PM", "maghrib":"5:37 PM", "isha":"7:20 PM"
		},
		"November-Part-2": {
			"fajr":"6:00 AM", "zohrOrJumma": "1:30 PM", "asr":"4:00 PM", "maghrib":"5:28 PM", "isha":"7:10 PM"
		},
		"November-Part-3": {
			"fajr":"6:10 AM", "zohrOrJumma": "1:30 PM", "asr":"3:50 PM", "maghrib":"5:22 PM", "isha":"7:10 PM"
		},

		/* December timings (2019) */
		"December-Part-1": {
			"fajr":"6:10 AM", "zohrOrJumma": "1:30 PM", "asr":"3:50 PM", "maghrib":"5:18 PM", "isha":"7:10 PM"
		},
		"December-Part-2": {
			"fajr":"6:20 AM", "zohrOrJumma": "1:30 PM", "asr":"3:50 PM", "maghrib":"5:21 PM", "isha":"7:10 PM"
		},
		"December-Part-3": {
			"fajr":"6:30 AM", "zohrOrJumma": "1:30 PM", "asr":"4:00 PM", "maghrib":"5:28 PM", "isha":"7:20 PM"
		},

	};

	var sysDate = new Date();
	var nowDateStr = sysDate.toLocaleString("en-US", {timeZone: "Asia/Seoul"});
	
	var nowDate = new Date(nowDateStr);
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
	jQuery("span#zohr-time, span#jumma-time").text(salah_time[key]["zohrOrJumma"]);
	jQuery("span#asr-time").text(salah_time[key]["asr"]);
	jQuery("span#maghrib-time").text(salah_time[key]["maghrib"]);
	jQuery("span#isha-time").text(salah_time[key]["isha"]);

});