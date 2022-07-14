import { Close } from 'components/buttons'
import { dateOfWeek, getDayAndMonth } from 'utils/dates/format.helpers'
import styles from './AboutUnit.module.css'

export const AboutUnit = () => {
  return (
    <div className={styles.wrapper}>
      <header>
      <div className={styles.date}>
        <h2>{dateOfWeek(new Date())}, </h2>
        <span>{getDayAndMonth(new Date())}</span>
      </div>
      <Close variant="black" />
      </header>
      <main>
        <div className={styles.category}>
          <span className={styles.title}>Amount</span>  
          <div className={styles.amount}>500$</div>
        </div>
        <div className={styles.category}>
          <span className={styles.title}>Category</span>  
          <div className={styles.cat}>BILLS</div>
        </div>
        <div className={styles.category}>
          <span className={styles.title}>Photos</span>  
          <div className={styles.photos}>IMG</div>
        </div>
        <div className={styles.category}>
          <span className={styles.title}>More Details</span>  
          <div className={styles.details}>Electricity bill</div>
        </div>
      </main>
    </div>
  )
}