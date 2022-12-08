import { useState } from 'react';
import styles from './App.module.css';
import logo from './assets/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImg from './assets/leftarrow.png';

const App = () => {
  const [heigthField, setHeightField] = useState(0);
  const [weightField, setweightField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heigthField && weightField ){
      setToShow(calculateImc(heigthField, weightField));
    } else {
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0)
    setweightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
          <div className={styles.headerContainer}>
              <img src={logo} alt="logo" />
          </div>
      </header>
      <div className={styles.container}>
         <div className={styles.leftSide}>
            <h1>Calcule o seu IMC.</h1>
            <p>
              IMC é a sigla para indíce de Massa Corpórea, parâmetro adotado pela organização mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>
            
            <input 
              type="number" 
              placeholder="Digite a sua altura (Em metros):" 
              value={heigthField > 0 ? heigthField : ""} 
              onChange={e => setHeightField(parseFloat(e.target.value))} 
              disabled = {toShow ? true : false}
            />
            <input
              type="number" 
              placeholder="Digite o seu peso (Em kg):" 
              value={weightField > 0 ? weightField : ""} 
              onChange={e => setweightField(parseFloat(e.target.value))} 
              disabled = {toShow ? true : false}
            />

            <button onClick={handleCalculateButton} disabled = {toShow ? true : false}>Calcular</button>
         </div>
         <div className={styles.rightSide}>
          {!toShow && 
            <div className={styles.grid}>
                {levels.map((item,key) => (
                  <GridItem key={key} item={item} />
                ))}
            </div> 
          }
          {toShow && 
            <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImg} alt="seta de voltar" />
                </div>
                <GridItem item={toShow} />
            </div>
          }
         </div>
      </div>
    </div>
  )
}

export default App;