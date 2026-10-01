import { useForm } from 'react-hook-form'
import smod from './Login.module.css'
import { FormControl } from '../../common/rormControls/FormsControls'
import { maxLenghtCreator, required } from '../../utils/validators/Validator'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import { Navigate } from 'react-router-dom'

const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors }, setError} = useForm({
    mode: "onTouched"
})
    return (
        <form onSubmit={handleSubmit((data) => {props.onSubmit(data, setError)})}>
            <FormControl error={errors.email}>
            <div><input {...register("email", {validate: {
                            required,
                            max: maxLenghtCreator(30)}})} placeholder="Email" /></div>
            </FormControl>
            <FormControl error={errors.password}>
            <div><input {...register("password", {validate: {
                            required,
                            max: maxLenghtCreator(25)}})} placeholder="Password" type="password" /></div>
            </FormControl>
            <div><input {...register("rememberMe")} type={"checkbox"} /> Remember me</div>
            {errors.root?.serverError && (
                <div className={smod.formSummaryError}>
                    {errors.root.serverError.message}
                </div>
            )}
            <button>Login</button>
        </form>
    )
}

const Login = (props) => {
    const onSubmit = (data, setError) => {
        props.login(data.email, data.password, data.rememberMe, setError)
    };

    if(props.isAuth){
        return <Navigate to="/profile" />
    }
    return (
        <div className={smod.loginBlock}>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)