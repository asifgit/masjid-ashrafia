jQuery(document).ready(function(){

	var salah_time = {

		/* January timings (2020) */
		"January": {
			"01": { "sehr":"06:09", "sunrise":"07:37", "zohrOrJumma":"12:37", "asr":"15:59", "maghrib":"17:38", "isha":"19:00" }, 
			"02": { "sehr":"06:10", "sunrise":"07:37", "zohrOrJumma":"12:38", "asr":"15:59", "maghrib":"17:39", "isha":"19:01" }, 
			"03": { "sehr":"06:10", "sunrise":"07:37", "zohrOrJumma":"12:38", "asr":"16:00", "maghrib":"17:39", "isha":"19:01" }, 
			"04": { "sehr":"06:10", "sunrise":"07:37", "zohrOrJumma":"12:39", "asr":"16:01", "maghrib":"17:40", "isha":"19:02" }, 
			"05": { "sehr":"06:10", "sunrise":"07:37", "zohrOrJumma":"12:39", "asr":"16:02", "maghrib":"17:41", "isha":"19:03" }, 
			"06": { "sehr":"06:10", "sunrise":"07:37", "zohrOrJumma":"12:39", "asr":"16:03", "maghrib":"17:42", "isha":"19:04" }, 
			"07": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:40", "asr":"16:03", "maghrib":"17:43", "isha":"19:04" }, 
			"08": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:40", "asr":"16:04", "maghrib":"17:43", "isha":"19:05" }, 
			"09": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:41", "asr":"16:05", "maghrib":"17:44", "isha":"19:06" }, 
			"10": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:41", "asr":"16:06", "maghrib":"17:45", "isha":"19:07" }, 
			"11": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:42", "asr":"16:07", "maghrib":"17:46", "isha":"19:07" }, 
			"12": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:42", "asr":"16:08", "maghrib":"17:47", "isha":"19:08" }, 
			"13": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:42", "asr":"16:09", "maghrib":"17:48", "isha":"19:09" }, 
			"14": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:43", "asr":"16:09", "maghrib":"17:49", "isha":"19:10" }, 
			"15": { "sehr":"06:11", "sunrise":"07:37", "zohrOrJumma":"12:43", "asr":"16:10", "maghrib":"17:50", "isha":"19:11" }, 
			"16": { "sehr":"06:11", "sunrise":"07:36", "zohrOrJumma":"12:43", "asr":"16:11", "maghrib":"17:51", "isha":"19:11" }, 
			"17": { "sehr":"06:10", "sunrise":"07:36", "zohrOrJumma":"12:44", "asr":"16:12", "maghrib":"17:51", "isha":"19:12" }, 
			"18": { "sehr":"06:10", "sunrise":"07:36", "zohrOrJumma":"12:44", "asr":"16:13", "maghrib":"17:52", "isha":"19:13" }, 
			"19": { "sehr":"06:10", "sunrise":"07:36", "zohrOrJumma":"12:44", "asr":"16:14", "maghrib":"17:53", "isha":"19:14" }, 
			"20": { "sehr":"06:10", "sunrise":"07:35", "zohrOrJumma":"12:45", "asr":"16:15", "maghrib":"17:54", "isha":"19:15" }, 
			"21": { "sehr":"06:10", "sunrise":"07:35", "zohrOrJumma":"12:45", "asr":"16:16", "maghrib":"17:55", "isha":"19:16" }, 
			"22": { "sehr":"06:09", "sunrise":"07:34", "zohrOrJumma":"12:45", "asr":"16:17", "maghrib":"17:56", "isha":"19:16" }, 
			"23": { "sehr":"06:09", "sunrise":"07:34", "zohrOrJumma":"12:46", "asr":"16:18", "maghrib":"17:57", "isha":"19:17" }, 
			"24": { "sehr":"06:09", "sunrise":"07:34", "zohrOrJumma":"12:46", "asr":"16:19", "maghrib":"17:58", "isha":"19:18" }, 
			"25": { "sehr":"06:08", "sunrise":"07:33", "zohrOrJumma":"12:46", "asr":"16:20", "maghrib":"17:59", "isha":"19:19" }, 
			"26": { "sehr":"06:08", "sunrise":"07:33", "zohrOrJumma":"12:46", "asr":"16:21", "maghrib":"18:00", "isha":"19:20" }, 
			"27": { "sehr":"06:08", "sunrise":"07:32", "zohrOrJumma":"12:47", "asr":"16:22", "maghrib":"18:01", "isha":"19:21" }, 
			"28": { "sehr":"06:07", "sunrise":"07:31", "zohrOrJumma":"12:47", "asr":"16:23", "maghrib":"18:02", "isha":"19:21" }, 
			"29": { "sehr":"06:07", "sunrise":"07:31", "zohrOrJumma":"12:47", "asr":"16:24", "maghrib":"18:03", "isha":"19:22" }, 
			"30": { "sehr":"06:06", "sunrise":"07:30", "zohrOrJumma":"12:47", "asr":"16:25", "maghrib":"18:04", "isha":"19:23" }, 
			"31": { "sehr":"06:06", "sunrise":"07:30", "zohrOrJumma":"12:47", "asr":"16:26", "maghrib":"18:05", "isha":"19:24" }, 
		},

		"February": {
			"01": { "sehr":"06:05", "sunrise":"07:29", "zohrOrJumma":"12:47", "asr":"16:26", "maghrib":"18:06", "isha":"19:25" },
			"02": { "sehr":"06:05", "sunrise":"07:28", "zohrOrJumma":"12:48", "asr":"16:27", "maghrib":"18:07", "isha":"19:26" },
			"03": { "sehr":"06:04", "sunrise":"07:27", "zohrOrJumma":"12:48", "asr":"16:28", "maghrib":"18:08", "isha":"19:26" },
			"04": { "sehr":"06:03", "sunrise":"07:27", "zohrOrJumma":"12:48", "asr":"16:29", "maghrib":"18:09", "isha":"19:27" },
			"05": { "sehr":"06:03", "sunrise":"07:26", "zohrOrJumma":"12:48", "asr":"16:30", "maghrib":"18:10", "isha":"19:28" },
			"06": { "sehr":"06:02", "sunrise":"07:25", "zohrOrJumma":"12:48", "asr":"16:31", "maghrib":"18:11", "isha":"19:29" },
			"07": { "sehr":"06:01", "sunrise":"07:24", "zohrOrJumma":"12:48", "asr":"16:32", "maghrib":"18:12", "isha":"19:30" },
			"08": { "sehr":"06:01", "sunrise":"07:23", "zohrOrJumma":"12:48", "asr":"16:33", "maghrib":"18:13", "isha":"19:31" },
			"09": { "sehr":"06:00", "sunrise":"07:23", "zohrOrJumma":"12:48", "asr":"16:34", "maghrib":"18:13", "isha":"19:31" },
			"10": { "sehr":"05:59", "sunrise":"07:22", "zohrOrJumma":"12:48", "asr":"16:35", "maghrib":"18:14", "isha":"19:32" },
			"11": { "sehr":"05:58", "sunrise":"07:21", "zohrOrJumma":"12:48", "asr":"16:36", "maghrib":"18:15", "isha":"19:33" },
			"12": { "sehr":"05:57", "sunrise":"07:20", "zohrOrJumma":"12:48", "asr":"16:36", "maghrib":"18:16", "isha":"19:34" },
			"13": { "sehr":"05:57", "sunrise":"07:19", "zohrOrJumma":"12:48", "asr":"16:37", "maghrib":"18:17", "isha":"19:35" },
			"14": { "sehr":"05:56", "sunrise":"07:18", "zohrOrJumma":"12:48", "asr":"16:38", "maghrib":"18:18", "isha":"19:36" },
			"15": { "sehr":"05:55", "sunrise":"07:17", "zohrOrJumma":"12:48", "asr":"16:39", "maghrib":"18:19", "isha":"19:36" },
			"16": { "sehr":"05:54", "sunrise":"07:16", "zohrOrJumma":"12:48", "asr":"16:40", "maghrib":"18:20", "isha":"19:37" },
			"17": { "sehr":"05:53", "sunrise":"07:15", "zohrOrJumma":"12:48", "asr":"16:41", "maghrib":"18:21", "isha":"19:38" },
			"18": { "sehr":"05:52", "sunrise":"07:14", "zohrOrJumma":"12:48", "asr":"16:41", "maghrib":"18:22", "isha":"19:39" },
			"19": { "sehr":"05:51", "sunrise":"07:13", "zohrOrJumma":"12:48", "asr":"16:42", "maghrib":"18:23", "isha":"19:40" },
			"20": { "sehr":"05:50", "sunrise":"07:12", "zohrOrJumma":"12:48", "asr":"16:43", "maghrib":"18:24", "isha":"19:40" },
			"21": { "sehr":"05:49", "sunrise":"07:11", "zohrOrJumma":"12:48", "asr":"16:44", "maghrib":"18:24", "isha":"19:41" },
			"22": { "sehr":"05:48", "sunrise":"07:10", "zohrOrJumma":"12:47", "asr":"16:45", "maghrib":"18:25", "isha":"19:42" },
			"23": { "sehr":"05:47", "sunrise":"07:08", "zohrOrJumma":"12:47", "asr":"16:45", "maghrib":"18:26", "isha":"19:43" },
			"24": { "sehr":"05:46", "sunrise":"07:07", "zohrOrJumma":"12:47", "asr":"16:46", "maghrib":"18:27", "isha":"19:44" },
			"25": { "sehr":"05:45", "sunrise":"07:06", "zohrOrJumma":"12:47", "asr":"16:47", "maghrib":"18:28", "isha":"19:44" },
			"26": { "sehr":"05:44", "sunrise":"07:05", "zohrOrJumma":"12:47", "asr":"16:48", "maghrib":"18:29", "isha":"19:45" },
			"27": { "sehr":"05:42", "sunrise":"07:04", "zohrOrJumma":"12:47", "asr":"16:48", "maghrib":"18:30", "isha":"19:46" },
			"28": { "sehr":"05:41", "sunrise":"07:03", "zohrOrJumma":"12:46", "asr":"16:49", "maghrib":"18:30", "isha":"19:47" },
			"29": { "sehr":"05:40", "sunrise":"07:01", "zohrOrJumma":"12:46", "asr":"16:50", "maghrib":"18:31", "isha":"19:48" },
		},

		"March": {
			"01": { "sehr":"05:39", "sunrise":"07:00", "zohrOrJumma":"12:46", "asr":"16:50", "maghrib":"18:32", "isha":"19:48" },
			"02": { "sehr":"05:38", "sunrise":"06:59", "zohrOrJumma":"12:46", "asr":"16:51", "maghrib":"18:33", "isha":"19:49" },
			"03": { "sehr":"05:37", "sunrise":"06:58", "zohrOrJumma":"12:46", "asr":"16:52", "maghrib":"18:34", "isha":"19:50" },
			"04": { "sehr":"05:35", "sunrise":"06:56", "zohrOrJumma":"12:45", "asr":"16:52", "maghrib":"18:34", "isha":"19:51" },
			"05": { "sehr":"05:34", "sunrise":"06:55", "zohrOrJumma":"12:45", "asr":"16:53", "maghrib":"18:35", "isha":"19:52" },
			"06": { "sehr":"05:33", "sunrise":"06:54", "zohrOrJumma":"12:45", "asr":"16:54", "maghrib":"18:36", "isha":"19:52" },
			"07": { "sehr":"05:32", "sunrise":"06:53", "zohrOrJumma":"12:45", "asr":"16:54", "maghrib":"18:37", "isha":"19:53" },
			"08": { "sehr":"05:30", "sunrise":"06:51", "zohrOrJumma":"12:45", "asr":"16:55", "maghrib":"18:38", "isha":"19:54" },
			"09": { "sehr":"05:29", "sunrise":"06:50", "zohrOrJumma":"12:44", "asr":"16:56", "maghrib":"18:38", "isha":"19:55" },
			"10": { "sehr":"05:28", "sunrise":"06:49", "zohrOrJumma":"12:44", "asr":"16:56", "maghrib":"18:39", "isha":"19:56" },
			"11": { "sehr":"05:26", "sunrise":"06:47", "zohrOrJumma":"12:44", "asr":"16:57", "maghrib":"18:40", "isha":"19:56" },
			"12": { "sehr":"05:25", "sunrise":"06:46", "zohrOrJumma":"12:43", "asr":"16:57", "maghrib":"18:41", "isha":"19:57" },
			"13": { "sehr":"05:24", "sunrise":"06:45", "zohrOrJumma":"12:43", "asr":"16:58", "maghrib":"18:42", "isha":"19:58" },
			"14": { "sehr":"05:22", "sunrise":"06:44", "zohrOrJumma":"12:43", "asr":"16:59", "maghrib":"18:42", "isha":"19:59" },
			"15": { "sehr":"05:21", "sunrise":"06:42", "zohrOrJumma":"12:43", "asr":"16:59", "maghrib":"18:43", "isha":"20:00" },
			"16": { "sehr":"05:19", "sunrise":"06:41", "zohrOrJumma":"12:42", "asr":"17:00", "maghrib":"18:44", "isha":"20:00" },
			"17": { "sehr":"05:18", "sunrise":"06:40", "zohrOrJumma":"12:42", "asr":"17:00", "maghrib":"18:45", "isha":"20:01" },
			"18": { "sehr":"05:17", "sunrise":"06:38", "zohrOrJumma":"12:42", "asr":"17:01", "maghrib":"18:45", "isha":"20:02" },
			"19": { "sehr":"05:15", "sunrise":"06:37", "zohrOrJumma":"12:42", "asr":"17:01", "maghrib":"18:46", "isha":"20:03" },
			"20": { "sehr":"05:14", "sunrise":"06:36", "zohrOrJumma":"12:41", "asr":"17:02", "maghrib":"18:47", "isha":"20:04" },
			"21": { "sehr":"05:12", "sunrise":"06:34", "zohrOrJumma":"12:41", "asr":"17:02", "maghrib":"18:48", "isha":"20:05" },
			"22": { "sehr":"05:11", "sunrise":"06:33", "zohrOrJumma":"12:41", "asr":"17:03", "maghrib":"18:48", "isha":"20:05" },
			"23": { "sehr":"05:10", "sunrise":"06:31", "zohrOrJumma":"12:40", "asr":"17:03", "maghrib":"18:49", "isha":"20:06" },
			"24": { "sehr":"05:08", "sunrise":"06:30", "zohrOrJumma":"12:40", "asr":"17:04", "maghrib":"18:50", "isha":"20:07" },
			"25": { "sehr":"05:07", "sunrise":"06:29", "zohrOrJumma":"12:40", "asr":"17:04", "maghrib":"18:51", "isha":"20:08" },
			"26": { "sehr":"05:05", "sunrise":"06:27", "zohrOrJumma":"12:39", "asr":"17:05", "maghrib":"18:51", "isha":"20:09" },
			"27": { "sehr":"05:04", "sunrise":"06:26", "zohrOrJumma":"12:39", "asr":"17:05", "maghrib":"18:52", "isha":"20:10" },
			"28": { "sehr":"05:02", "sunrise":"06:25", "zohrOrJumma":"12:39", "asr":"17:06", "maghrib":"18:53", "isha":"20:10" },
			"29": { "sehr":"05:01", "sunrise":"06:23", "zohrOrJumma":"12:39", "asr":"17:06", "maghrib":"18:54", "isha":"20:11" },
			"30": { "sehr":"04:59", "sunrise":"06:22", "zohrOrJumma":"12:38", "asr":"17:06", "maghrib":"18:54", "isha":"20:12" },
			"31": { "sehr":"04:58", "sunrise":"06:21", "zohrOrJumma":"12:38", "asr":"17:07", "maghrib":"18:55", "isha":"20:13" },
		},

		"April": {
			"01": { "sehr":"04:56", "sunrise":"06:19", "zohrOrJumma":"12:38", "asr":"17:07", "maghrib":"18:56", "isha":"20:14" },
			"02": { "sehr":"04:55", "sunrise":"06:18", "zohrOrJumma":"12:37", "asr":"17:08", "maghrib":"18:57", "isha":"20:15" },
			"03": { "sehr":"04:53", "sunrise":"06:17", "zohrOrJumma":"12:37", "asr":"17:08", "maghrib":"18:57", "isha":"20:16" },
			"04": { "sehr":"04:52", "sunrise":"06:15", "zohrOrJumma":"12:37", "asr":"17:09", "maghrib":"18:58", "isha":"20:17" },
			"05": { "sehr":"04:50", "sunrise":"06:14", "zohrOrJumma":"12:36", "asr":"17:09", "maghrib":"18:59", "isha":"20:17" },
			"06": { "sehr":"04:49", "sunrise":"06:13", "zohrOrJumma":"12:36", "asr":"17:09", "maghrib":"18:59", "isha":"20:18" },
			"07": { "sehr":"04:47", "sunrise":"06:12", "zohrOrJumma":"12:36", "asr":"17:10", "maghrib":"19:00", "isha":"20:19" },
			"08": { "sehr":"04:46", "sunrise":"06:10", "zohrOrJumma":"12:36", "asr":"17:10", "maghrib":"19:01", "isha":"20:20" },
			"09": { "sehr":"04:44", "sunrise":"06:09", "zohrOrJumma":"12:35", "asr":"17:11", "maghrib":"19:02", "isha":"20:21" },
			"10": { "sehr":"04:43", "sunrise":"06:08", "zohrOrJumma":"12:35", "asr":"17:11", "maghrib":"19:02", "isha":"20:22" },
			"11": { "sehr":"04:41", "sunrise":"06:06", "zohrOrJumma":"12:35", "asr":"17:11", "maghrib":"19:03", "isha":"20:23" },
			"12": { "sehr":"04:40", "sunrise":"06:05", "zohrOrJumma":"12:35", "asr":"17:12", "maghrib":"19:04", "isha":"20:24" },
			"13": { "sehr":"04:38", "sunrise":"06:04", "zohrOrJumma":"12:34", "asr":"17:12", "maghrib":"19:05", "isha":"20:25" },
			"14": { "sehr":"04:37", "sunrise":"06:03", "zohrOrJumma":"12:34", "asr":"17:13", "maghrib":"19:05", "isha":"20:26" },
			"15": { "sehr":"04:36", "sunrise":"06:01", "zohrOrJumma":"12:34", "asr":"17:13", "maghrib":"19:06", "isha":"20:27" },
			"16": { "sehr":"04:34", "sunrise":"06:00", "zohrOrJumma":"12:34", "asr":"17:13", "maghrib":"19:07", "isha":"20:28" },
			"17": { "sehr":"04:33", "sunrise":"05:59", "zohrOrJumma":"12:33", "asr":"17:14", "maghrib":"19:08", "isha":"20:29" },
			"18": { "sehr":"04:31", "sunrise":"05:58", "zohrOrJumma":"12:33", "asr":"17:14", "maghrib":"19:08", "isha":"20:30" },
			"19": { "sehr":"04:30", "sunrise":"05:57", "zohrOrJumma":"12:33", "asr":"17:14", "maghrib":"19:09", "isha":"20:31" },
			"20": { "sehr":"04:28", "sunrise":"05:55", "zohrOrJumma":"12:33", "asr":"17:15", "maghrib":"19:10", "isha":"20:32" },
			"21": { "sehr":"04:27", "sunrise":"05:54", "zohrOrJumma":"12:32", "asr":"17:15", "maghrib":"19:11", "isha":"20:33" },
			"22": { "sehr":"04:25", "sunrise":"05:53", "zohrOrJumma":"12:32", "asr":"17:16", "maghrib":"19:11", "isha":"20:34" },
			"23": { "sehr":"04:24", "sunrise":"05:52", "zohrOrJumma":"12:32", "asr":"17:16", "maghrib":"19:12", "isha":"20:35" },
			"24": { "sehr":"04:23", "sunrise":"05:51", "zohrOrJumma":"12:32", "asr":"17:16", "maghrib":"19:13", "isha":"20:36" },
			"25": { "sehr":"04:21", "sunrise":"05:50", "zohrOrJumma":"12:32", "asr":"17:17", "maghrib":"19:14", "isha":"20:37" },
			"26": { "sehr":"04:20", "sunrise":"05:49", "zohrOrJumma":"12:32", "asr":"17:17", "maghrib":"19:14", "isha":"20:38" },
			"27": { "sehr":"04:19", "sunrise":"05:48", "zohrOrJumma":"12:31", "asr":"17:17", "maghrib":"19:15", "isha":"20:39" },
			"28": { "sehr":"04:17", "sunrise":"05:47", "zohrOrJumma":"12:31", "asr":"17:18", "maghrib":"19:16", "isha":"20:40" },
			"29": { "sehr":"04:16", "sunrise":"05:46", "zohrOrJumma":"12:31", "asr":"17:18", "maghrib":"19:17", "isha":"20:41" },
			"30": { "sehr":"04:15", "sunrise":"05:45", "zohrOrJumma":"12:31", "asr":"17:18", "maghrib":"19:18", "isha":"20:42" },
		},

		/**/

		"May": {
			"01": { "sehr":"04:13", "sunrise":"05:44", "zohrOrJumma":"12:31", "asr":"17:19", "maghrib":"19:18", "isha":"20:43" },
			"02": { "sehr":"04:12", "sunrise":"05:43", "zohrOrJumma":"12:31", "asr":"17:19", "maghrib":"19:19", "isha":"20:44" },
			"03": { "sehr":"04:11", "sunrise":"05:42", "zohrOrJumma":"12:31", "asr":"17:20", "maghrib":"19:20", "isha":"20:45" },
			"04": { "sehr":"04:09", "sunrise":"05:41", "zohrOrJumma":"12:31", "asr":"17:20", "maghrib":"19:21", "isha":"20:46" },
			"05": { "sehr":"04:08", "sunrise":"05:40", "zohrOrJumma":"12:31", "asr":"17:20", "maghrib":"19:21", "isha":"20:47" },
			"06": { "sehr":"04:07", "sunrise":"05:39", "zohrOrJumma":"12:30", "asr":"17:21", "maghrib":"19:22", "isha":"20:48" },
			"07": { "sehr":"04:06", "sunrise":"05:38", "zohrOrJumma":"12:30", "asr":"17:21", "maghrib":"19:23", "isha":"20:49" },
			"08": { "sehr":"04:05", "sunrise":"05:37", "zohrOrJumma":"12:30", "asr":"17:21", "maghrib":"19:24", "isha":"20:50" },
			"09": { "sehr":"04:03", "sunrise":"05:36", "zohrOrJumma":"12:30", "asr":"17:22", "maghrib":"19:24", "isha":"20:51" },
			"10": { "sehr":"04:02", "sunrise":"05:35", "zohrOrJumma":"12:30", "asr":"17:22", "maghrib":"19:25", "isha":"20:52" },
			"11": { "sehr":"04:01", "sunrise":"05:35", "zohrOrJumma":"12:30", "asr":"17:22", "maghrib":"19:26", "isha":"20:53" },
			"12": { "sehr":"04:00", "sunrise":"05:34", "zohrOrJumma":"12:30", "asr":"17:23", "maghrib":"19:27", "isha":"20:54" },
			"13": { "sehr":"03:59", "sunrise":"05:33", "zohrOrJumma":"12:30", "asr":"17:23", "maghrib":"19:27", "isha":"20:55" },
			"14": { "sehr":"03:58", "sunrise":"05:32", "zohrOrJumma":"12:30", "asr":"17:24", "maghrib":"19:28", "isha":"20:57" },
			"15": { "sehr":"03:57", "sunrise":"05:32", "zohrOrJumma":"12:30", "asr":"17:24", "maghrib":"19:29", "isha":"20:58" },
			"16": { "sehr":"03:56", "sunrise":"05:31", "zohrOrJumma":"12:30", "asr":"17:24", "maghrib":"19:30", "isha":"20:59" },
			"17": { "sehr":"03:55", "sunrise":"05:30", "zohrOrJumma":"12:30", "asr":"17:25", "maghrib":"19:30", "isha":"21:00" },
			"18": { "sehr":"03:54", "sunrise":"05:30", "zohrOrJumma":"12:30", "asr":"17:25", "maghrib":"19:31", "isha":"21:01" },
			"19": { "sehr":"03:53", "sunrise":"05:29", "zohrOrJumma":"12:30", "asr":"17:25", "maghrib":"19:32", "isha":"21:02" },
			"20": { "sehr":"03:52", "sunrise":"05:28", "zohrOrJumma":"12:30", "asr":"17:26", "maghrib":"19:33", "isha":"21:03" },
			"21": { "sehr":"03:51", "sunrise":"05:28", "zohrOrJumma":"12:31", "asr":"17:26", "maghrib":"19:33", "isha":"21:04" },
			"22": { "sehr":"03:50", "sunrise":"05:27", "zohrOrJumma":"12:31", "asr":"17:26", "maghrib":"19:34", "isha":"21:05" },
			"23": { "sehr":"03:50", "sunrise":"05:27", "zohrOrJumma":"12:31", "asr":"17:27", "maghrib":"19:35", "isha":"21:05" },
			"24": { "sehr":"03:49", "sunrise":"05:26", "zohrOrJumma":"12:31", "asr":"17:27", "maghrib":"19:35", "isha":"21:06" },
			"25": { "sehr":"03:48", "sunrise":"05:26", "zohrOrJumma":"12:31", "asr":"17:28", "maghrib":"19:36", "isha":"21:07" },
			"26": { "sehr":"03:47", "sunrise":"05:25", "zohrOrJumma":"12:31", "asr":"17:28", "maghrib":"19:37", "isha":"21:08" },
			"27": { "sehr":"03:47", "sunrise":"05:25", "zohrOrJumma":"12:31", "asr":"17:28", "maghrib":"19:37", "isha":"21:09" },
			"28": { "sehr":"03:46", "sunrise":"05:25", "zohrOrJumma":"12:31", "asr":"17:29", "maghrib":"19:38", "isha":"21:10" },
			"29": { "sehr":"03:45", "sunrise":"05:24", "zohrOrJumma":"12:31", "asr":"17:29", "maghrib":"19:39", "isha":"21:11" },
			"30": { "sehr":"03:45", "sunrise":"05:24", "zohrOrJumma":"12:31", "asr":"17:29", "maghrib":"19:39", "isha":"21:12" },
			"31": { "sehr":"03:44", "sunrise":"05:24", "zohrOrJumma":"12:32", "asr":"17:30", "maghrib":"19:40", "isha":"21:13" },
		},

		"June": {
			"01": { "sehr":"03:44", "sunrise":"05:23", "zohrOrJumma":"12:32", "asr":"17:30", "maghrib":"19:40", "isha":"21:13" },
			"02": { "sehr":"03:43", "sunrise":"05:23", "zohrOrJumma":"12:32", "asr":"17:30", "maghrib":"19:41", "isha":"21:14" },
			"03": { "sehr":"03:43", "sunrise":"05:23", "zohrOrJumma":"12:32", "asr":"17:31", "maghrib":"19:41", "isha":"21:15" },
			"04": { "sehr":"03:42", "sunrise":"05:23", "zohrOrJumma":"12:32", "asr":"17:31", "maghrib":"19:42", "isha":"21:16" },
			"05": { "sehr":"03:42", "sunrise":"05:22", "zohrOrJumma":"12:32", "asr":"17:31", "maghrib":"19:43", "isha":"21:16" },
			"06": { "sehr":"03:42", "sunrise":"05:22", "zohrOrJumma":"12:33", "asr":"17:32", "maghrib":"19:43", "isha":"21:17" },
			"07": { "sehr":"03:41", "sunrise":"05:22", "zohrOrJumma":"12:33", "asr":"17:32", "maghrib":"19:44", "isha":"21:18" },
			"08": { "sehr":"03:41", "sunrise":"05:22", "zohrOrJumma":"12:33", "asr":"17:32", "maghrib":"19:44", "isha":"21:18" },
			"09": { "sehr":"03:41", "sunrise":"05:22", "zohrOrJumma":"12:33", "asr":"17:33", "maghrib":"19:45", "isha":"21:19" },
			"10": { "sehr":"03:41", "sunrise":"05:22", "zohrOrJumma":"12:33", "asr":"17:33", "maghrib":"19:45", "isha":"21:20" },
			"11": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:34", "asr":"17:33", "maghrib":"19:45", "isha":"21:20" },
			"12": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:34", "asr":"17:34", "maghrib":"19:46", "isha":"21:21" },
			"13": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:34", "asr":"17:34", "maghrib":"19:46", "isha":"21:21" },
			"14": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:34", "asr":"17:34", "maghrib":"19:47", "isha":"21:22" },
			"15": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:34", "asr":"17:34", "maghrib":"19:47", "isha":"21:22" },
			"16": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:35", "asr":"17:35", "maghrib":"19:47", "isha":"21:22" },
			"17": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:35", "asr":"17:35", "maghrib":"19:48", "isha":"21:23" },
			"18": { "sehr":"03:40", "sunrise":"05:22", "zohrOrJumma":"12:35", "asr":"17:35", "maghrib":"19:48", "isha":"21:23" },
			"19": { "sehr":"03:41", "sunrise":"05:23", "zohrOrJumma":"12:35", "asr":"17:35", "maghrib":"19:48", "isha":"21:23" },
			"20": { "sehr":"03:41", "sunrise":"05:23", "zohrOrJumma":"12:36", "asr":"17:36", "maghrib":"19:48", "isha":"21:24" },
			"21": { "sehr":"03:41", "sunrise":"05:23", "zohrOrJumma":"12:36", "asr":"17:36", "maghrib":"19:49", "isha":"21:24" },
			"22": { "sehr":"03:41", "sunrise":"05:23", "zohrOrJumma":"12:36", "asr":"17:36", "maghrib":"19:49", "isha":"21:24" },
			"23": { "sehr":"03:42", "sunrise":"05:24", "zohrOrJumma":"12:36", "asr":"17:36", "maghrib":"19:49", "isha":"21:24" },
			"24": { "sehr":"03:42", "sunrise":"05:24", "zohrOrJumma":"12:36", "asr":"17:36", "maghrib":"19:49", "isha":"21:24" },
			"25": { "sehr":"03:42", "sunrise":"05:24", "zohrOrJumma":"12:37", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"26": { "sehr":"03:43", "sunrise":"05:24", "zohrOrJumma":"12:37", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"27": { "sehr":"03:43", "sunrise":"05:25", "zohrOrJumma":"12:37", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"28": { "sehr":"03:44", "sunrise":"05:25", "zohrOrJumma":"12:37", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"29": { "sehr":"03:44", "sunrise":"05:26", "zohrOrJumma":"12:37", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"30": { "sehr":"03:45", "sunrise":"05:26", "zohrOrJumma":"12:38", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
		},

		"July": {
			"01": { "sehr":"03:45", "sunrise":"05:26", "zohrOrJumma":"12:38", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"02": { "sehr":"03:46", "sunrise":"05:27", "zohrOrJumma":"12:38", "asr":"17:37", "maghrib":"19:49", "isha":"21:24" },
			"03": { "sehr":"03:46", "sunrise":"05:27", "zohrOrJumma":"12:38", "asr":"17:38", "maghrib":"19:49", "isha":"21:23" },
			"04": { "sehr":"03:47", "sunrise":"05:28", "zohrOrJumma":"12:38", "asr":"17:38", "maghrib":"19:49", "isha":"21:23" },
			"05": { "sehr":"03:48", "sunrise":"05:28", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:49", "isha":"21:23" },
			"06": { "sehr":"03:48", "sunrise":"05:29", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:49", "isha":"21:23" },
			"07": { "sehr":"03:49", "sunrise":"05:29", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:49", "isha":"21:22" },
			"08": { "sehr":"03:50", "sunrise":"05:30", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:48", "isha":"21:22" },
			"09": { "sehr":"03:51", "sunrise":"05:30", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:48", "isha":"21:21" },
			"10": { "sehr":"03:51", "sunrise":"05:31", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:48", "isha":"21:21" },
			"11": { "sehr":"03:52", "sunrise":"05:31", "zohrOrJumma":"12:39", "asr":"17:38", "maghrib":"19:48", "isha":"21:20" },
			"12": { "sehr":"03:53", "sunrise":"05:32", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:47", "isha":"21:20" },
			"13": { "sehr":"03:54", "sunrise":"05:33", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:47", "isha":"21:19" },
			"14": { "sehr":"03:55", "sunrise":"05:33", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:46", "isha":"21:19" },
			"15": { "sehr":"03:56", "sunrise":"05:34", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:46", "isha":"21:18" },
			"16": { "sehr":"03:56", "sunrise":"05:34", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:46", "isha":"21:17" },
			"17": { "sehr":"03:57", "sunrise":"05:35", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:45", "isha":"21:16" },
			"18": { "sehr":"03:58", "sunrise":"05:36", "zohrOrJumma":"12:40", "asr":"17:37", "maghrib":"19:45", "isha":"21:16" },
			"19": { "sehr":"03:59", "sunrise":"05:36", "zohrOrJumma":"12:40", "asr":"17:36", "maghrib":"19:44", "isha":"21:15" },
			"20": { "sehr":"04:00", "sunrise":"05:37", "zohrOrJumma":"12:40", "asr":"17:36", "maghrib":"19:44", "isha":"21:14" },
			"21": { "sehr":"04:01", "sunrise":"05:38", "zohrOrJumma":"12:40", "asr":"17:36", "maghrib":"19:43", "isha":"21:13" },
			"22": { "sehr":"04:02", "sunrise":"05:38", "zohrOrJumma":"12:40", "asr":"17:36", "maghrib":"19:42", "isha":"21:12" },
			"23": { "sehr":"04:03", "sunrise":"05:39", "zohrOrJumma":"12:40", "asr":"17:35", "maghrib":"19:42", "isha":"21:12" },
			"24": { "sehr":"04:04", "sunrise":"05:40", "zohrOrJumma":"12:40", "asr":"17:35", "maghrib":"19:41", "isha":"21:11" },
			"25": { "sehr":"04:05", "sunrise":"05:40", "zohrOrJumma":"12:40", "asr":"17:35", "maghrib":"19:40", "isha":"21:10" },
			"26": { "sehr":"04:06", "sunrise":"05:41", "zohrOrJumma":"12:40", "asr":"17:34", "maghrib":"19:40", "isha":"21:09" },
			"27": { "sehr":"04:07", "sunrise":"05:42", "zohrOrJumma":"12:40", "asr":"17:34", "maghrib":"19:39", "isha":"21:08" },
			"28": { "sehr":"04:08", "sunrise":"05:42", "zohrOrJumma":"12:40", "asr":"17:34", "maghrib":"19:38", "isha":"21:07" },
			"29": { "sehr":"04:09", "sunrise":"05:43", "zohrOrJumma":"12:40", "asr":"17:33", "maghrib":"19:38", "isha":"21:06" },
			"30": { "sehr":"04:10", "sunrise":"05:44", "zohrOrJumma":"12:40", "asr":"17:33", "maghrib":"19:37", "isha":"21:05" },
			"31": { "sehr":"04:11", "sunrise":"05:45", "zohrOrJumma":"12:40", "asr":"17:32", "maghrib":"19:36", "isha":"21:03" },
		},

		"August": {
			"01": { "sehr":"04:12", "sunrise":"05:45", "zohrOrJumma":"12:40", "asr":"17:32", "maghrib":"19:35", "isha":"21:02" },
			"02": { "sehr":"04:13", "sunrise":"05:46", "zohrOrJumma":"12:40", "asr":"17:32", "maghrib":"19:34", "isha":"21:01" },
			"03": { "sehr":"04:14", "sunrise":"05:47", "zohrOrJumma":"12:40", "asr":"17:31", "maghrib":"19:33", "isha":"21:00" },
			"04": { "sehr":"04:15", "sunrise":"05:47", "zohrOrJumma":"12:40", "asr":"17:31", "maghrib":"19:32", "isha":"20:59" },
			"05": { "sehr":"04:16", "sunrise":"05:48", "zohrOrJumma":"12:40", "asr":"17:30", "maghrib":"19:32", "isha":"20:58" },
			"06": { "sehr":"04:17", "sunrise":"05:49", "zohrOrJumma":"12:40", "asr":"17:29", "maghrib":"19:31", "isha":"20:56" },
			"07": { "sehr":"04:18", "sunrise":"05:50", "zohrOrJumma":"12:40", "asr":"17:29", "maghrib":"19:30", "isha":"20:55" },
			"08": { "sehr":"04:19", "sunrise":"05:50", "zohrOrJumma":"12:39", "asr":"17:28", "maghrib":"19:29", "isha":"20:54" },
			"09": { "sehr":"04:20", "sunrise":"05:51", "zohrOrJumma":"12:39", "asr":"17:28", "maghrib":"19:28", "isha":"20:53" },
			"10": { "sehr":"04:21", "sunrise":"05:52", "zohrOrJumma":"12:39", "asr":"17:27", "maghrib":"19:27", "isha":"20:51" },
			"11": { "sehr":"04:22", "sunrise":"05:52", "zohrOrJumma":"12:39", "asr":"17:26", "maghrib":"19:26", "isha":"20:50" },
			"12": { "sehr":"04:23", "sunrise":"05:53", "zohrOrJumma":"12:39", "asr":"17:26", "maghrib":"19:25", "isha":"20:49" },
			"13": { "sehr":"04:24", "sunrise":"05:54", "zohrOrJumma":"12:39", "asr":"17:25", "maghrib":"19:24", "isha":"20:47" },
			"14": { "sehr":"04:25", "sunrise":"05:55", "zohrOrJumma":"12:38", "asr":"17:24", "maghrib":"19:22", "isha":"20:46" },
			"15": { "sehr":"04:26", "sunrise":"05:55", "zohrOrJumma":"12:38", "asr":"17:24", "maghrib":"19:21", "isha":"20:45" },
			"16": { "sehr":"04:27", "sunrise":"05:56", "zohrOrJumma":"12:38", "asr":"17:23", "maghrib":"19:20", "isha":"20:43" },
			"17": { "sehr":"04:28", "sunrise":"05:57", "zohrOrJumma":"12:38", "asr":"17:22", "maghrib":"19:19", "isha":"20:42" },
			"18": { "sehr":"04:29", "sunrise":"05:57", "zohrOrJumma":"12:38", "asr":"17:22", "maghrib":"19:18", "isha":"20:40" },
			"19": { "sehr":"04:30", "sunrise":"05:58", "zohrOrJumma":"12:37", "asr":"17:21", "maghrib":"19:17", "isha":"20:39" },
			"20": { "sehr":"04:31", "sunrise":"05:59", "zohrOrJumma":"12:37", "asr":"17:20", "maghrib":"19:16", "isha":"20:38" },
			"21": { "sehr":"04:32", "sunrise":"05:59", "zohrOrJumma":"12:37", "asr":"17:19", "maghrib":"19:14", "isha":"20:36" },
			"22": { "sehr":"04:33", "sunrise":"06:00", "zohrOrJumma":"12:37", "asr":"17:18", "maghrib":"19:13", "isha":"20:35" },
			"23": { "sehr":"04:34", "sunrise":"06:01", "zohrOrJumma":"12:36", "asr":"17:17", "maghrib":"19:12", "isha":"20:33" },
			"24": { "sehr":"04:35", "sunrise":"06:01", "zohrOrJumma":"12:36", "asr":"17:17", "maghrib":"19:11", "isha":"20:32" },
			"25": { "sehr":"04:36", "sunrise":"06:02", "zohrOrJumma":"12:36", "asr":"17:16", "maghrib":"19:09", "isha":"20:30" },
			"26": { "sehr":"04:37", "sunrise":"06:03", "zohrOrJumma":"12:36", "asr":"17:15", "maghrib":"19:08", "isha":"20:29" },
			"27": { "sehr":"04:38", "sunrise":"06:04", "zohrOrJumma":"12:35", "asr":"17:14", "maghrib":"19:07", "isha":"20:27" },
			"28": { "sehr":"04:39", "sunrise":"06:04", "zohrOrJumma":"12:35", "asr":"17:13", "maghrib":"19:06", "isha":"20:26" },
			"29": { "sehr":"04:40", "sunrise":"06:05", "zohrOrJumma":"12:35", "asr":"17:12", "maghrib":"19:04", "isha":"20:24" },
			"30": { "sehr":"04:41", "sunrise":"06:06", "zohrOrJumma":"12:34", "asr":"17:11", "maghrib":"19:03", "isha":"20:23" },
			"31": { "sehr":"04:41", "sunrise":"06:06", "zohrOrJumma":"12:34", "asr":"17:10", "maghrib":"19:02", "isha":"20:21" },
		},

		"September": {
			"01": { "sehr":"04:42", "sunrise":"06:07", "zohrOrJumma":"12:34", "asr":"17:09", "maghrib":"19:01", "isha":"20:20" },
			"02": { "sehr":"04:43", "sunrise":"06:08", "zohrOrJumma":"12:33", "asr":"17:08", "maghrib":"18:59", "isha":"20:18" },
			"03": { "sehr":"04:44", "sunrise":"06:08", "zohrOrJumma":"12:33", "asr":"17:07", "maghrib":"18:58", "isha":"20:17" },
			"04": { "sehr":"04:45", "sunrise":"06:09", "zohrOrJumma":"12:33", "asr":"17:06", "maghrib":"18:57", "isha":"20:15" },
			"05": { "sehr":"04:46", "sunrise":"06:10", "zohrOrJumma":"12:32", "asr":"17:05", "maghrib":"18:55", "isha":"20:14" },
			"06": { "sehr":"04:47", "sunrise":"06:10", "zohrOrJumma":"12:32", "asr":"17:04", "maghrib":"18:54", "isha":"20:12" },
			"07": { "sehr":"04:47", "sunrise":"06:11", "zohrOrJumma":"12:32", "asr":"17:03", "maghrib":"18:52", "isha":"20:11" },
			"08": { "sehr":"04:48", "sunrise":"06:12", "zohrOrJumma":"12:31", "asr":"17:02", "maghrib":"18:51", "isha":"20:09" },
			"09": { "sehr":"04:49", "sunrise":"06:12", "zohrOrJumma":"12:31", "asr":"17:01", "maghrib":"18:50", "isha":"20:08" },
			"10": { "sehr":"04:50", "sunrise":"06:13", "zohrOrJumma":"12:31", "asr":"17:00", "maghrib":"18:48", "isha":"20:06" },
			"11": { "sehr":"04:51", "sunrise":"06:14", "zohrOrJumma":"12:30", "asr":"16:59", "maghrib":"18:47", "isha":"20:05" },
			"12": { "sehr":"04:52", "sunrise":"06:14", "zohrOrJumma":"12:30", "asr":"16:58", "maghrib":"18:46", "isha":"20:03" },
			"13": { "sehr":"04:52", "sunrise":"06:15", "zohrOrJumma":"12:30", "asr":"16:57", "maghrib":"18:44", "isha":"20:02" },
			"14": { "sehr":"04:53", "sunrise":"06:16", "zohrOrJumma":"12:29", "asr":"16:56", "maghrib":"18:43", "isha":"20:00" },
			"15": { "sehr":"04:54", "sunrise":"06:16", "zohrOrJumma":"12:29", "asr":"16:55", "maghrib":"18:42", "isha":"19:59" },
			"16": { "sehr":"04:55", "sunrise":"06:17", "zohrOrJumma":"12:29", "asr":"16:53", "maghrib":"18:40", "isha":"19:57" },
			"17": { "sehr":"04:56", "sunrise":"06:18", "zohrOrJumma":"12:28", "asr":"16:52", "maghrib":"18:39", "isha":"19:56" },
			"18": { "sehr":"04:56", "sunrise":"06:18", "zohrOrJumma":"12:28", "asr":"16:51", "maghrib":"18:37", "isha":"19:54" },
			"19": { "sehr":"04:57", "sunrise":"06:19", "zohrOrJumma":"12:27", "asr":"16:50", "maghrib":"18:36", "isha":"19:53" },
			"20": { "sehr":"04:58", "sunrise":"06:20", "zohrOrJumma":"12:27", "asr":"16:49", "maghrib":"18:35", "isha":"19:52" },
			"21": { "sehr":"04:59", "sunrise":"06:20", "zohrOrJumma":"12:27", "asr":"16:48", "maghrib":"18:33", "isha":"19:50" },
			"22": { "sehr":"04:59", "sunrise":"06:21", "zohrOrJumma":"12:26", "asr":"16:47", "maghrib":"18:32", "isha":"19:49" },
			"23": { "sehr":"05:00", "sunrise":"06:22", "zohrOrJumma":"12:26", "asr":"16:46", "maghrib":"18:30", "isha":"19:47" },
			"24": { "sehr":"05:01", "sunrise":"06:22", "zohrOrJumma":"12:26", "asr":"16:44", "maghrib":"18:29", "isha":"19:46" },
			"25": { "sehr":"05:02", "sunrise":"06:23", "zohrOrJumma":"12:25", "asr":"16:43", "maghrib":"18:28", "isha":"19:44" },
			"26": { "sehr":"05:02", "sunrise":"06:24", "zohrOrJumma":"12:25", "asr":"16:42", "maghrib":"18:26", "isha":"19:43" },
			"27": { "sehr":"05:03", "sunrise":"06:24", "zohrOrJumma":"12:25", "asr":"16:41", "maghrib":"18:25", "isha":"19:41" },
			"28": { "sehr":"05:04", "sunrise":"06:25", "zohrOrJumma":"12:24", "asr":"16:40", "maghrib":"18:24", "isha":"19:40" },
			"29": { "sehr":"05:05", "sunrise":"06:26", "zohrOrJumma":"12:24", "asr":"16:39", "maghrib":"18:22", "isha":"19:39" },
			"30": { "sehr":"05:05", "sunrise":"06:27", "zohrOrJumma":"12:24", "asr":"16:37", "maghrib":"18:21", "isha":"19:37" },
		},

		"October": {
			"01": { "sehr":"05:06", "sunrise":"06:27", "zohrOrJumma":"12:23", "asr":"16:36", "maghrib":"18:20", "isha":"19:36" },
			"02": { "sehr":"05:07", "sunrise":"06:28", "zohrOrJumma":"12:23", "asr":"16:35", "maghrib":"18:18", "isha":"19:35" },
			"03": { "sehr":"05:08", "sunrise":"06:29", "zohrOrJumma":"12:23", "asr":"16:34", "maghrib":"18:17", "isha":"19:33" },
			"04": { "sehr":"05:08", "sunrise":"06:29", "zohrOrJumma":"12:22", "asr":"16:33", "maghrib":"18:16", "isha":"19:32" },
			"05": { "sehr":"05:09", "sunrise":"06:30", "zohrOrJumma":"12:22", "asr":"16:32", "maghrib":"18:14", "isha":"19:30" },
			"06": { "sehr":"05:10", "sunrise":"06:31", "zohrOrJumma":"12:22", "asr":"16:31", "maghrib":"18:13", "isha":"19:29" },
			"07": { "sehr":"05:10", "sunrise":"06:32", "zohrOrJumma":"12:22", "asr":"16:29", "maghrib":"18:12", "isha":"19:28" },
			"08": { "sehr":"05:11", "sunrise":"06:32", "zohrOrJumma":"12:21", "asr":"16:28", "maghrib":"18:10", "isha":"19:27" },
			"09": { "sehr":"05:12", "sunrise":"06:33", "zohrOrJumma":"12:21", "asr":"16:27", "maghrib":"18:09", "isha":"19:25" },
			"10": { "sehr":"05:13", "sunrise":"06:34", "zohrOrJumma":"12:21", "asr":"16:26", "maghrib":"18:08", "isha":"19:24" },
			"11": { "sehr":"05:13", "sunrise":"06:35", "zohrOrJumma":"12:20", "asr":"16:25", "maghrib":"18:06", "isha":"19:23" },
			"12": { "sehr":"05:14", "sunrise":"06:35", "zohrOrJumma":"12:20", "asr":"16:24", "maghrib":"18:05", "isha":"19:22" },
			"13": { "sehr":"05:15", "sunrise":"06:36", "zohrOrJumma":"12:20", "asr":"16:23", "maghrib":"18:04", "isha":"19:20" },
			"14": { "sehr":"05:16", "sunrise":"06:37", "zohrOrJumma":"12:20", "asr":"16:22", "maghrib":"18:03", "isha":"19:19" },
			"15": { "sehr":"05:16", "sunrise":"06:38", "zohrOrJumma":"12:20", "asr":"16:20", "maghrib":"18:01", "isha":"19:18" },
			"16": { "sehr":"05:17", "sunrise":"06:38", "zohrOrJumma":"12:19", "asr":"16:19", "maghrib":"18:00", "isha":"19:17" },
			"17": { "sehr":"05:18", "sunrise":"06:39", "zohrOrJumma":"12:19", "asr":"16:18", "maghrib":"17:59", "isha":"19:16" },
			"18": { "sehr":"05:18", "sunrise":"06:40", "zohrOrJumma":"12:19", "asr":"16:17", "maghrib":"17:58", "isha":"19:15" },
			"19": { "sehr":"05:19", "sunrise":"06:41", "zohrOrJumma":"12:19", "asr":"16:16", "maghrib":"17:57", "isha":"19:14" },
			"20": { "sehr":"05:20", "sunrise":"06:42", "zohrOrJumma":"12:19", "asr":"16:15", "maghrib":"17:56", "isha":"19:12" },
			"21": { "sehr":"05:21", "sunrise":"06:42", "zohrOrJumma":"12:18", "asr":"16:14", "maghrib":"17:54", "isha":"19:11" },
			"22": { "sehr":"05:21", "sunrise":"06:43", "zohrOrJumma":"12:18", "asr":"16:13", "maghrib":"17:53", "isha":"19:10" },
			"23": { "sehr":"05:22", "sunrise":"06:44", "zohrOrJumma":"12:18", "asr":"16:12", "maghrib":"17:52", "isha":"19:09" },
			"24": { "sehr":"05:23", "sunrise":"06:45", "zohrOrJumma":"12:18", "asr":"16:11", "maghrib":"17:51", "isha":"19:08" },
			"25": { "sehr":"05:24", "sunrise":"06:46", "zohrOrJumma":"12:18", "asr":"16:10", "maghrib":"17:50", "isha":"19:07" },
			"26": { "sehr":"05:24", "sunrise":"06:47", "zohrOrJumma":"12:18", "asr":"16:09", "maghrib":"17:49", "isha":"19:06" },
			"27": { "sehr":"05:25", "sunrise":"06:47", "zohrOrJumma":"12:18", "asr":"16:08", "maghrib":"17:48", "isha":"19:05" },
			"28": { "sehr":"05:26", "sunrise":"06:48", "zohrOrJumma":"12:18", "asr":"16:07", "maghrib":"17:47", "isha":"19:05" },
			"29": { "sehr":"05:27", "sunrise":"06:49", "zohrOrJumma":"12:18", "asr":"16:06", "maghrib":"17:46", "isha":"19:04" },
			"30": { "sehr":"05:27", "sunrise":"06:50", "zohrOrJumma":"12:18", "asr":"16:05", "maghrib":"17:45", "isha":"19:03" },
			"31": { "sehr":"05:28", "sunrise":"06:51", "zohrOrJumma":"12:17", "asr":"16:04", "maghrib":"17:44", "isha":"19:02" },
		},

		"November": {
			"01": { "sehr":"05:29", "sunrise":"06:52", "zohrOrJumma":"12:17", "asr":"16:03", "maghrib":"17:43", "isha":"19:01" },
			"02": { "sehr":"05:30", "sunrise":"06:53", "zohrOrJumma":"12:17", "asr":"16:03", "maghrib":"17:42", "isha":"19:00" },
			"03": { "sehr":"05:31", "sunrise":"06:54", "zohrOrJumma":"12:17", "asr":"16:02", "maghrib":"17:41", "isha":"19:00" },
			"04": { "sehr":"05:31", "sunrise":"06:54", "zohrOrJumma":"12:17", "asr":"16:01", "maghrib":"17:40", "isha":"18:59" },
			"05": { "sehr":"05:32", "sunrise":"06:55", "zohrOrJumma":"12:17", "asr":"16:00", "maghrib":"17:40", "isha":"18:58" },
			"06": { "sehr":"05:33", "sunrise":"06:56", "zohrOrJumma":"12:18", "asr":"15:59", "maghrib":"17:39", "isha":"18:57" },
			"07": { "sehr":"05:34", "sunrise":"06:57", "zohrOrJumma":"12:18", "asr":"15:59", "maghrib":"17:38", "isha":"18:57" },
			"08": { "sehr":"05:34", "sunrise":"06:58", "zohrOrJumma":"12:18", "asr":"15:58", "maghrib":"17:37", "isha":"18:56" },
			"09": { "sehr":"05:35", "sunrise":"06:59", "zohrOrJumma":"12:18", "asr":"15:57", "maghrib":"17:37", "isha":"18:55" },
			"10": { "sehr":"05:36", "sunrise":"07:00", "zohrOrJumma":"12:18", "asr":"15:56", "maghrib":"17:36", "isha":"18:55" },
			"11": { "sehr":"05:37", "sunrise":"07:01", "zohrOrJumma":"12:18", "asr":"15:56", "maghrib":"17:35", "isha":"18:54" },
			"12": { "sehr":"05:38", "sunrise":"07:02", "zohrOrJumma":"12:18", "asr":"15:55", "maghrib":"17:34", "isha":"18:54" },
			"13": { "sehr":"05:38", "sunrise":"07:03", "zohrOrJumma":"12:18", "asr":"15:55", "maghrib":"17:34", "isha":"18:53" },
			"14": { "sehr":"05:39", "sunrise":"07:04", "zohrOrJumma":"12:18", "asr":"15:54", "maghrib":"17:33", "isha":"18:53" },
			"15": { "sehr":"05:40", "sunrise":"07:04", "zohrOrJumma":"12:19", "asr":"15:53", "maghrib":"17:33", "isha":"18:52" },
			"16": { "sehr":"05:41", "sunrise":"07:05", "zohrOrJumma":"12:19", "asr":"15:53", "maghrib":"17:32", "isha":"18:52" },
			"17": { "sehr":"05:42", "sunrise":"07:06", "zohrOrJumma":"12:19", "asr":"15:52", "maghrib":"17:32", "isha":"18:51" },
			"18": { "sehr":"05:42", "sunrise":"07:07", "zohrOrJumma":"12:19", "asr":"15:52", "maghrib":"17:31", "isha":"18:51" },
			"19": { "sehr":"05:43", "sunrise":"07:08", "zohrOrJumma":"12:19", "asr":"15:51", "maghrib":"17:31", "isha":"18:51" },
			"20": { "sehr":"05:44", "sunrise":"07:09", "zohrOrJumma":"12:20", "asr":"15:51", "maghrib":"17:30", "isha":"18:50" },
			"21": { "sehr":"05:45", "sunrise":"07:10", "zohrOrJumma":"12:20", "asr":"15:50", "maghrib":"17:30", "isha":"18:50" },
			"22": { "sehr":"05:46", "sunrise":"07:11", "zohrOrJumma":"12:20", "asr":"15:50", "maghrib":"17:29", "isha":"18:50" },
			"23": { "sehr":"05:46", "sunrise":"07:12", "zohrOrJumma":"12:20", "asr":"15:50", "maghrib":"17:29", "isha":"18:50" },
			"24": { "sehr":"05:47", "sunrise":"07:13", "zohrOrJumma":"12:21", "asr":"15:49", "maghrib":"17:29", "isha":"18:49" },
			"25": { "sehr":"05:48", "sunrise":"07:14", "zohrOrJumma":"12:21", "asr":"15:49", "maghrib":"17:28", "isha":"18:49" },
			"26": { "sehr":"05:49", "sunrise":"07:15", "zohrOrJumma":"12:21", "asr":"15:49", "maghrib":"17:28", "isha":"18:49" },
			"27": { "sehr":"05:49", "sunrise":"07:15", "zohrOrJumma":"12:22", "asr":"15:49", "maghrib":"17:28", "isha":"18:49" },
			"28": { "sehr":"05:50", "sunrise":"07:16", "zohrOrJumma":"12:22", "asr":"15:48", "maghrib":"17:28", "isha":"18:49" },
			"29": { "sehr":"05:51", "sunrise":"07:17", "zohrOrJumma":"12:22", "asr":"15:48", "maghrib":"17:28", "isha":"18:49" },
			"30": { "sehr":"05:52", "sunrise":"07:18", "zohrOrJumma":"12:23", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
		},

		"December": {
			"01": { "sehr":"05:52", "sunrise":"07:19", "zohrOrJumma":"12:23", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"02": { "sehr":"05:53", "sunrise":"07:20", "zohrOrJumma":"12:23", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"03": { "sehr":"05:54", "sunrise":"07:21", "zohrOrJumma":"12:24", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"04": { "sehr":"05:55", "sunrise":"07:21", "zohrOrJumma":"12:24", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"05": { "sehr":"05:55", "sunrise":"07:22", "zohrOrJumma":"12:25", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"06": { "sehr":"05:56", "sunrise":"07:23", "zohrOrJumma":"12:25", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"07": { "sehr":"05:57", "sunrise":"07:24", "zohrOrJumma":"12:26", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"08": { "sehr":"05:57", "sunrise":"07:25", "zohrOrJumma":"12:26", "asr":"15:48", "maghrib":"17:27", "isha":"18:49" },
			"09": { "sehr":"05:58", "sunrise":"07:25", "zohrOrJumma":"12:26", "asr":"15:48", "maghrib":"17:28", "isha":"18:50" },
			"10": { "sehr":"05:59", "sunrise":"07:26", "zohrOrJumma":"12:27", "asr":"15:48", "maghrib":"17:28", "isha":"18:50" },
			"11": { "sehr":"06:00", "sunrise":"07:27", "zohrOrJumma":"12:27", "asr":"15:49", "maghrib":"17:28", "isha":"18:50" },
			"12": { "sehr":"06:00", "sunrise":"07:27", "zohrOrJumma":"12:28", "asr":"15:49", "maghrib":"17:28", "isha":"18:50" },
			"13": { "sehr":"06:01", "sunrise":"07:28", "zohrOrJumma":"12:28", "asr":"15:49", "maghrib":"17:28", "isha":"18:51" },
			"14": { "sehr":"06:01", "sunrise":"07:29", "zohrOrJumma":"12:29", "asr":"15:49", "maghrib":"17:29", "isha":"18:51" },
			"15": { "sehr":"06:02", "sunrise":"07:29", "zohrOrJumma":"12:29", "asr":"15:50", "maghrib":"17:29", "isha":"18:51" },
			"16": { "sehr":"06:03", "sunrise":"07:30", "zohrOrJumma":"12:30", "asr":"15:50", "maghrib":"17:29", "isha":"18:52" },
			"17": { "sehr":"06:03", "sunrise":"07:31", "zohrOrJumma":"12:30", "asr":"15:50", "maghrib":"17:30", "isha":"18:52" },
			"18": { "sehr":"06:04", "sunrise":"07:31", "zohrOrJumma":"12:31", "asr":"15:51", "maghrib":"17:30", "isha":"18:53" },
			"19": { "sehr":"06:04", "sunrise":"07:32", "zohrOrJumma":"12:31", "asr":"15:51", "maghrib":"17:31", "isha":"18:53" },
			"20": { "sehr":"06:05", "sunrise":"07:32", "zohrOrJumma":"12:32", "asr":"15:52", "maghrib":"17:31", "isha":"18:54" },
			"21": { "sehr":"06:05", "sunrise":"07:33", "zohrOrJumma":"12:32", "asr":"15:52", "maghrib":"17:32", "isha":"18:54" },
			"22": { "sehr":"06:06", "sunrise":"07:33", "zohrOrJumma":"12:33", "asr":"15:53", "maghrib":"17:32", "isha":"18:55" },
			"23": { "sehr":"06:06", "sunrise":"07:34", "zohrOrJumma":"12:33", "asr":"15:53", "maghrib":"17:33", "isha":"18:55" },
			"24": { "sehr":"06:07", "sunrise":"07:34", "zohrOrJumma":"12:34", "asr":"15:54", "maghrib":"17:33", "isha":"18:56" },
			"25": { "sehr":"06:07", "sunrise":"07:35", "zohrOrJumma":"12:34", "asr":"15:54", "maghrib":"17:34", "isha":"18:56" },
			"26": { "sehr":"06:08", "sunrise":"07:35", "zohrOrJumma":"12:35", "asr":"15:55", "maghrib":"17:34", "isha":"18:57" },
			"27": { "sehr":"06:08", "sunrise":"07:35", "zohrOrJumma":"12:35", "asr":"15:56", "maghrib":"17:35", "isha":"18:57" },
			"28": { "sehr":"06:08", "sunrise":"07:36", "zohrOrJumma":"12:36", "asr":"15:56", "maghrib":"17:36", "isha":"18:58" },
			"29": { "sehr":"06:09", "sunrise":"07:36", "zohrOrJumma":"12:36", "asr":"15:57", "maghrib":"17:36", "isha":"18:59" },
			"30": { "sehr":"06:09", "sunrise":"07:36", "zohrOrJumma":"12:37", "asr":"15:58", "maghrib":"17:37", "isha":"18:59" },
			"31": { "sehr":"06:09", "sunrise":"07:36", "zohrOrJumma":"12:37", "asr":"15:58", "maghrib":"17:38", "isha":"19:00" },
		},



		"January-Part-1": {
			"fajr":"06:30 AM", "zohrOrJumma": "01:30 PM", "asr":"04:10 PM", "maghrib":"05:36 PM", "isha":"07:30 PM"
		},
		"January-Part-2": {
			"fajr":"06:30 AM", "zohrOrJumma": "01:30 PM", "asr":"04:20 PM", "maghrib":"05:46 PM", "isha":"07:30 PM"
		},
		"January-Part-3": {
			"fajr":"06:30 AM", "zohrOrJumma": "01:30 PM", "asr":"04:30 PM", "maghrib":"05:57 PM", "isha":"07:40 PM"
		},

		/* February timings (2020) */
		"February-Part-1": {
			"fajr":"06:30 AM", "zohrOrJumma": "01:30 PM", "asr":"04:40 PM", "maghrib":"06:08 PM", "isha":"07:50 PM"
		},
		"February-Part-2": {
			"fajr":"06:20 AM", "zohrOrJumma": "01:30 PM", "asr":"04:50 PM", "maghrib":"06:18 PM", "isha":"08:00 PM"
		},
		"February-Part-3": {
			"fajr":"06:10 AM", "zohrOrJumma": "01:30 PM", "asr":"05:00 PM", "maghrib":"06:27 PM", "isha":"08:10 PM"
		},

		/* March timings (2020) */
		"March-Part-1": {
			"fajr":"06:00 AM", "zohrOrJumma": "01:30 PM", "asr":"05:10 PM", "maghrib":"06:36 PM", "isha":"08:10 PM"
		},
		"March-Part-2": {
			"fajr":"05:40 AM", "zohrOrJumma": "01:30 PM", "asr":"05:10 PM", "maghrib":"06:45 PM", "isha":"08:20 PM"
		},
		"March-Part-3": {
			"fajr":"05:30 AM", "zohrOrJumma": "01:30 PM", "asr":"05:20 PM", "maghrib":"06:54 PM", "isha":"08:30 PM"
		},




		/**********************************************************************************************/
		/*                (UP -> January-March, 2020) - (DOWN -> April-December, 2019)                */
		/**********************************************************************************************/




		/* April timings (2019) */
		"April-Part-1": {
			"fajr":"05:20 AM", "zohrOrJumma": "01:30 PM", "asr":"05:20 PM", "maghrib":"07:02 PM", "isha":"08:40 PM"
		},
		"April-Part-2": {
			"fajr":"05:00 AM", "zohrOrJumma": "01:30 PM", "asr":"05:30 PM", "maghrib":"07:11 PM", "isha":"08:50 PM"
		},
		"April-Part-3": {
			"fajr":"04:40 AM", "zohrOrJumma": "01:30 PM", "asr":"05:30 PM", "maghrib":"07:19 PM", "isha":"09:10 PM"
		},

		/* May timings (2019) */
		"May-Part-1": {
			"fajr":"04:20 AM", "zohrOrJumma": "01:30 PM", "asr":"05:40 PM", "maghrib":"07:28 PM", "isha":"09:20 PM"
		},
		"May-Part-2": {
			"fajr":"04:10 AM", "zohrOrJumma": "01:30 PM", "asr":"05:40 PM", "maghrib":"07:36 PM", "isha":"09:30 PM"
		},
		"May-Part-3": {
			"fajr":"04:00 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:44 PM", "isha":"09:40 PM"
		},

		/* June timings (2019) */
		"June-Part-1": {
			"fajr":"03:50 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:50 PM", "isha":"09:50 PM"
		},
		"June-Part-2": {
			"fajr":"03:40 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:54 PM", "isha":"09:50 PM"
		},
		"June-Part-3": {
			"fajr":"03:45 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:55 PM", "isha":"100:00 PM"
		},

		/* July timings (2019) */
		"July-Part-1": {
			"fajr":"03:50 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:55 PM", "isha":"09:50 PM"
		},
		"July-Part-2": {
			"fajr":"04:00 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:53 PM", "isha":"09:50 PM"
		},
		"July-Part-3": {
			"fajr":"04:10 AM", "zohrOrJumma": "01:30 PM", "asr":"05:50 PM", "maghrib":"07:48 PM", "isha":"09:40 PM"
		},

		/* August timings (2019) */
		"August-Part-1": {
			"fajr":"04:20 AM", "zohrOrJumma": "01:30 PM", "asr":"05:40 PM", "maghrib":"07:39 PM", "isha":"09:30 PM"
		},
		"August-Part-2": {
			"fajr":"04:30 AM", "zohrOrJumma": "01:30 PM", "asr":"05:40 PM", "maghrib":"07:29 PM", "isha":"09:10 PM"
		},
		"August-Part-3": {
			"fajr":"04:40 AM", "zohrOrJumma": "01:30 PM", "asr":"05:30 PM", "maghrib":"07:17 PM", "isha":"09:00 PM"
		},

		/* September timings (2019) */
		"September-Part-1": {
			"fajr":"04:50 AM", "zohrOrJumma": "01:30 PM", "asr":"05:20 PM", "maghrib":"07:02 PM", "isha":"08:40 PM"
		},
		"September-Part-2": {
			"fajr":"05:00 AM", "zohrOrJumma": "01:30 PM", "asr":"05:10 PM", "maghrib":"06:47 PM", "isha":"08:20 PM"
		},
		"September-Part-3": {
			"fajr":"05:10 AM", "zohrOrJumma": "01:30 PM", "asr":"05:00 PM", "maghrib":"06:32 PM", "isha":"08:00 PM"
		},

		/* October timings (2019) */
		"October-Part-1": {
			"fajr":"05:20 AM", "zohrOrJumma": "01:30 PM", "asr":"04:50 PM", "maghrib":"06:17 PM", "isha":"07:50 PM"
		},
		"October-Part-2": {
			"fajr":"05:30 AM", "zohrOrJumma": "01:30 PM", "asr":"04:30 PM", "maghrib":"06:03 PM", "isha":"07:40 PM"
		},
		"October-Part-3": {
			"fajr":"05:40 AM", "zohrOrJumma": "01:30 PM", "asr":"04:20 PM", "maghrib":"05:50 PM", "isha":"07:30 PM"
		},

		/* November timings (2019) */
		"November-Part-1": {
			"fajr":"05:50 AM", "zohrOrJumma": "01:30 PM", "asr":"04:10 PM", "maghrib":"05:37 PM", "isha":"07:20 PM"
		},
		"November-Part-2": {
			"fajr":"06:00 AM", "zohrOrJumma": "01:30 PM", "asr":"04:00 PM", "maghrib":"05:28 PM", "isha":"07:10 PM"
		},
		"November-Part-3": {
			"fajr":"06:10 AM", "zohrOrJumma": "01:30 PM", "asr":"03:50 PM", "maghrib":"05:22 PM", "isha":"07:10 PM"
		},

		/* December timings (2019) */
		"December-Part-1": {
			"fajr":"06:10 AM", "zohrOrJumma": "01:30 PM", "asr":"03:50 PM", "maghrib":"05:18 PM", "isha":"07:10 PM"
		},
		"December-Part-2": {
			"fajr":"06:20 AM", "zohrOrJumma": "01:30 PM", "asr":"03:50 PM", "maghrib":"05:21 PM", "isha":"07:10 PM"
		},
		"December-Part-3": {
			"fajr":"06:30 AM", "zohrOrJumma": "01:30 PM", "asr":"04:00 PM", "maghrib":"05:28 PM", "isha":"07:20 PM"
		},

	};

	var sysDate = new Date();
	var nowDateStr = sysDate.toLocaleString("en-US", {timeZone: "Asia/Seoul"});
	
	var nowDate = new Date(nowDateStr);
	var nowDay = nowDate.getDate();
	nowDay = 29

	var nowDayStr = "" + nowDay;
	
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

	var tSehr		= tConv24(salah_time[nowMonth][nowDayStr]["sehr"]);
	var tSunrise	= tConv24(salah_time[nowMonth][nowDayStr]["sunrise"]);
	var tZohr		= tConv24(salah_time[nowMonth][nowDayStr]["zohrOrJumma"]);
	var tAsr		= tConv24(salah_time[nowMonth][nowDayStr]["asr"]);
	var tMaghrib1	= tConv24(salah_time[nowMonth][nowDayStr]["maghrib"]);
	var tMaghrib2	= addMiniutesToTime(nowDateStr, tMaghrib1, 20); 
	var tIsha		= tConv24(salah_time[nowMonth][nowDayStr]["isha"]);

	// setting Jama'at times
	jQuery("span#fajr-time-j").text(salah_time[key]["fajr"]);
	jQuery("span#zohr-time-j, span#zohrOrJumma-time-j").text(salah_time[key]["zohrOrJumma"]);
	jQuery("span#asr-time-j").text(salah_time[key]["asr"]);
	jQuery("span#maghrib-time-j").text(addMiniutesToTime(nowDateStr,tMaghrib1,1));
	jQuery("span#isha-time-j").text(salah_time[key]["isha"]);

	// setting Namaz times
	jQuery("span#fajr-time").text(tSehr + " - " + tSunrise);
	jQuery("span#zohr-time, span#jumma-time").text(tZohr);
	jQuery("span#asr-time").text(tAsr);
	jQuery("span#maghrib-time").text(tMaghrib1 + " - " + tMaghrib2);
	jQuery("span#isha-time").text(tIsha);

});

function tConv24(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

function addMiniutesToTime(tNowDateStr, tempTimeOld, mins){
	var tempTime = new Date(tNowDateStr);
    tempTime.setHours(parseInt(tempTimeOld[0]+tempTimeOld[1])+12);
    tempTime.setMinutes(parseInt(tempTimeOld[3]+tempTimeOld[4]));
    tempTime.setMinutes(tempTime.getMinutes()+mins);
    var tempTimehour = ("0" + (tempTime.getHours() % 12)).slice(-2);
    var tempTimemins = ("0" + tempTime.getMinutes()).slice(-2);
    var tempTimeampm = (tempTime.getHours() >= 12 ? "PM" : "AM");
    
    tempTimeFinal = tempTimehour + ":" + tempTimemins + " " + tempTimeampm;
    return tempTimeFinal;

}