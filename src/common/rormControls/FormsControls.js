import clas from './FormsControls.module.css'

export const FormControl = ({error, children}) => {
    const hasError = !!error
    return(
    <div className = {`${clas.formControl} ${hasError ? clas.error : ''}`}>
        <div>
            {children}
        </div>
    {hasError && <span>{error.message}</span>}
    </div>
    )
}