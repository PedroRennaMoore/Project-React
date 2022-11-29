
import styles from './RegisterForm.module.css'
function RegisterErrorTexts(props) {

    return (
        <>
        <p className={styles.test_error}>ERROR: {props.errorName}</p>
        </>
    )

}

export default RegisterErrorTexts