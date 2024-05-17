import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/colors";

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("")
    const [secondNumber, setSecondNumber] = React.useState("")
    const [operation, setOperation] = React.useState("")
    const [result, setResult] = React.useState<Number | null>(null);
    return(

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
    }
   };

   const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
   };

   const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
   };

   return(
   )
}