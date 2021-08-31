import { useState } from "react";

import { Content } from "../components/layout/Content";
import { Header } from "../components/layout/Header";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

import { Display } from "../components/Display";
import { Keypad } from "../components/Keypad";

import { ButtonGroup } from "../components/ButtonGroup";
import { Button } from "../components/Button";

/*
 * permitir digitar os numeros e exibir no display
 * ao pressionar um sinal reserva o numero do display no acumulador
 *
 */

export const Calculator: React.FC = () => {
  const [cleanDisplay, setCleanDisplay] = useState(false);
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState<string | null>(null);
  const [accumulator, setAccumulator] = useState<number | null>(null);

  const clickNumber = (num: number) => {
    let newNumber = 0;
    if (cleanDisplay) {
      newNumber = num;
      setCleanDisplay(false);
    } else {
      newNumber = parseFloat(`${display}${num}`);
    }

    //setCurrentNumber(newNumber);
    setDisplay(`${newNumber}`);
  };

  const handleDecimalSeparator = () => {
    if (cleanDisplay) {
      setDisplay(`0.`);

      setCleanDisplay(false);
    } else {
      if (display.indexOf(".") > -1) return;

      setDisplay(`${display}.`);
    }
  };

  const calculate = (
    value1: number,
    operator: string,
    value2: number
  ): number => {
    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "/":
        return value1 / value2;
      case "*":
        return value1 * value2;

      default:
        return 0;
    }
  };

  const handleClickOperation = (newOperation: string) => {
    if (!accumulator) {
      setOperation(newOperation);
      setAccumulator(parseFloat(display));
      setCleanDisplay(true);

      return;
    }
    if (!accumulator) return;
    if (!operation) return;

    var result = calculate(accumulator, operation, parseFloat(display));

    setCleanDisplay(true);

    setAccumulator(result);
    setDisplay(`${result}`);

    setOperation(newOperation);
  };

  const handleClickEqual = () => {
    if (!accumulator) return;
    if (!operation) return;

    var result = calculate(accumulator, operation, parseFloat(display));

    setAccumulator(null);

    setOperation(null);
    setCleanDisplay(true);
    setDisplay(`${result}`);
  };

  const handleDelete = () => {
    let strCurrentNumber = `${display.substring(0, display.length - 1)}`;

    let newNumber = parseFloat(strCurrentNumber);
    if (isNaN(newNumber)) {
      newNumber = 0;
    }
    setDisplay(`${newNumber}`);
  };

  const handleReset = () => {
    setDisplay("0");
    setAccumulator(0);
    setOperation(null);
  };

  return (
    <Content>
      <Header>
        <div className="title">calc</div>
        <ThemeSwitcher />
      </Header>

      <Display>{display}</Display>

      <Keypad>
        <ButtonGroup>
          <Button onClick={() => clickNumber(7)}>7</Button>
          <Button onClick={() => clickNumber(8)}>8</Button>
          <Button onClick={() => clickNumber(9)}>9</Button>
          <Button intent="secondary" onClick={handleDelete}>
            DEL
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => clickNumber(4)}>4</Button>
          <Button onClick={() => clickNumber(5)}>5</Button>
          <Button onClick={() => clickNumber(6)}>6</Button>
          <Button onClick={() => handleClickOperation("+")}>+</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => clickNumber(1)}>1</Button>
          <Button onClick={() => clickNumber(2)}>2</Button>
          <Button onClick={() => clickNumber(3)}>3</Button>
          <Button onClick={() => handleClickOperation("-")}>-</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={handleDecimalSeparator}>.</Button>
          <Button onClick={() => clickNumber(0)}>0</Button>
          <Button onClick={() => handleClickOperation("/")}>/</Button>
          <Button onClick={() => handleClickOperation("*")}>x</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button intent="secondary" onClick={handleReset}>
            RESET
          </Button>
          <Button intent="primary" onClick={handleClickEqual}>
            =
          </Button>
        </ButtonGroup>
      </Keypad>
    </Content>
  );
};
