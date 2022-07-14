import { Close, Button } from 'components/buttons'
import { RangeSlider, Select } from 'components/forms'
import styles from './Filter.module.css'

export const Filter = () => {
  return (
    <div className={styles.wrapper}>
    <header>
      <span>Filter by</span>
      <Close variant="black" />
    </header>
    <Select type="checkbox" />
    <div className={styles.range}>
      <span>Amount</span>
      <RangeSlider />
    </div>
    <div className={styles.buttons}>
      <Button variant="primary_heavenly">Reset</Button>
      <Button variant="primary_blue">Apply</Button>
    </div>
    </div>
  )
}