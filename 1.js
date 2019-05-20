function isTimeValid(hour, minute) {
    if(hour > 23 || hour < 0){
        return false;
    }

    else if(minute > 59 || minute < 0){
        return false;

    }
    return true;
}

isTimeValid(24,5);
