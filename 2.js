function addMinutes(hour, minute, increase) {
    var time;
    while ((minute + increase) > 60) {
        hour++;
        minute -= 60;
    }
    minute += increase;
    while (hour > 23) {
        hour -= 24;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    time = String(hour) + ':' + String(minute);
    return time;
}
addMinutes(3,35,10);