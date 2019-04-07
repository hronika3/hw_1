function isTimeValid(hour, minute) {
    if(hour > 23 || hour < 0){
        return false;
    }
    if(minute > 59 || minute < 0){
        return false;
    }
    return true;
}

isTimeValid(3,35);
