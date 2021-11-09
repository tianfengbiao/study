
function fn( input ) {
    var stackList = []
    var s = input
    for(var i = 0; i < s.length; i++) {
        var keyVal = s[i];
        switch(keyVal) {
            case '(':
                stackList.push(')')
                break;
            case '[':
                stackList.push(']')
                break;
            case '{':
                stackList.push('}')
                break;
            default:
                if(!stackList.length) {
                    return false;
                }
                if(stackList[stackList.length - 1] === keyVal) {
                    stackList.pop();
                } else {
                    return false
                }
                break;
        }
    }

    return !stackList.length
}