function upper_bound_( n ,  v ,  a ) {
    // write code here
    let left = 0;
    let right = n - 1;
    while(left < right) {
        let midInd = Math.floor((left + right) / 2);
        let minVal = a[midInd];
        // debugger
        if(v === minVal){
            return midInd + 1;
        } else if(v < minVal) {
            right = midInd
        } else if (v > minVal) {
            left = midInd;
        }
    }
    return n + 1;
}

var res1 = upper_bound_(5,7,[1,2,4,4,5])
