const validUrl = require('valid-url');

function isValiInput(input) {
    if (validUrl.isUri(input)) {
        console.log('is valid URI');
        return true;
    } else {
        console.log('Not a URI');
        return false;
    }

}
export {isValiInput};