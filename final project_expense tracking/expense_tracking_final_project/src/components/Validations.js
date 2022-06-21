

export function emailValidation(input){
    return /^.+@.{3,10}\..{2,10}$/.test(input);
}

export function passwordValidation(input){
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,15}$/.test(input);
}

export function alphabetValidation(input){
    return /^[A-Za-z]+$/.test(input);
}

export function numberValidataion(input){
    return /^[0-9]+$/.test(input);
}

export function alphanumericFiftyValidation(input){
    return /^[A-Za-z0-9\s]{3,50}$/.test(input);
}

export function alphanumericOnefiftyValidation(input){
    return /^[A-Za-z0-9\s]{3,150}$/.test(input);
}