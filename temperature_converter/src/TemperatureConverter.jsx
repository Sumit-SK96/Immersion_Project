import React, { useState } from 'react';
import styles from './TemperatureConverter.module.css';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [conversionType, setConversionType] = useState('CtoF');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (temperature === '') return;

    let convertedTemp;

    if (conversionType === 'CtoF') {
      convertedTemp = (parseFloat(temperature) * 9) / 5 + 32;
      setResult(`${convertedTemp.toFixed(2)}° Fahrenheit`);
    } else {
      convertedTemp = ((parseFloat(temperature) - 32) * 5) / 9;
      setResult(`${convertedTemp.toFixed(2)}° Celsius`);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Temperature Converter</h2>
      <div className={styles.inputGroup}>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
        />
        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
        >
          <option value="CtoF">Celsius → Fahrenheit</option>
          <option value="FtoC">Fahrenheit → Celsius</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {result && <p className={styles.result}>Result: {result}</p>}
    </div>
  );
};

export default TemperatureConverter;