function getSumm(number) {

    while(number != 1){

        return number + getSumm(--number);
    }
    return number;
}

function getFukt(number) {

    while(number != 1){

        return number * getFukt(--number);
    }
    return number;
}

getFukt(6);
getSumm(6);