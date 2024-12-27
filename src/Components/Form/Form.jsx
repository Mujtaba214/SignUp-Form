import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SignUp</h2>
      <p className={styles.para}>Already have an account?<span className={styles.login}>Login</span></p>
      <form action="" className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" />
        </div>
        <div className={styles.check}>
          <input type="checkbox" name="password" id="password" placeholder="Enter your password" />
          <label htmlFor="password" className={styles.label}>By signing up, you agree to receive our updates</label>
        </div>
      </form>
      <button className={styles.btn}>Submit</button>

    </div>
  )
}

export default Form