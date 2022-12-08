import { Level } from "../../helpers/imc"
import styles from './gridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level;
}

export const GridItem = ({item}:Props) => {
  return (
    <div className={styles.main} style={{backgroundColor: item.color}}>
        <div className={styles.gridIcon}>
            {item.icon === 'up' ? <img src={upImage} alt="bom" /> : <img src={downImage} alt="ruim" /> }
        </div>
        <div className={styles.gridTitle}>
            {item.title}
        </div>
        {item.yourImc && 
            <div className={styles.yourImc}>Seu Imc é {item.yourImc} kg/m² </div>
        }
        <div className={styles.gridInfo}>
            <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
        </div>
    </div>
  )
}
