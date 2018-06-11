const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for (const rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
                break;

            case 'minLength':
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;

            case 'equalTo':
                isValid = isValid && equalToValidator(val, connectedValue[rule]);
                break;

            default:
                isValid = true;
        }
    }
    return isValid;
}

const emailValidator = val => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(val);
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
}

const equalToValidator = (val, checkValue) => {
    //console.log("Value: "+val+" and CheckValue: "+JSON.stringify(checkValue));
    return val === checkValue;
}

export default validate;