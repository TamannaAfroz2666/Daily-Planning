import './Message.css'

export const ErrorMessage = (msg) =>{
    return(
        <div className="show_message err_message">
            {msg}
        </div>

    )
}

export const SuccessMessage = (msg) =>{
    return(
        <div className="show_message err_message">
            {msg}
        </div>
    )
}