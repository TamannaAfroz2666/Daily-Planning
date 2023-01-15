import '../Utils/Regex'

export const LoginValidation =(from) =>{
    let err = {};

    console.log('login validation click');
    console.log('form is:', from);

    if (!from.email.trim()){
        err.email = "Email is required";
    }

    if (!from.password.trim()){
        err.password = "Password is required";
    }
    return err;
}