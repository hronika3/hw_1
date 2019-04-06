function isTimeValid(hour, minute) {
    if(hour > 24 || hour < 0){
        return false;
    }
    if(minute > 60 || minute < 0){
        return false;
    }
    return true;
}

isTimeValid(3,35);
