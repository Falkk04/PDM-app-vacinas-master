import React from 'react'
import { Text, View } from "react-native"
import './styles.css';

const ExibeVacina = (props) => {
    return (
       <div className="exibe">
        <View>
            <Text>{props.dadosVacina.lote}</Text>
            <Text>{props.dadosVacina.fabricante}</Text>
            <Text>{props.dadosVacina.descricao}</Text>
        </View>
       </div> 
    )

}

export default ExibeVacina