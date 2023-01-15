import '../Utils/Regex'

export const LoginValidation =(from) =>{
    let error = {};
    
    if (! from.email.trim()){
        error.email = "Email is required";
    }

    if (from.password.trim()){
        error.password = "Password is required";
    }
}