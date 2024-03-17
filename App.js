import React from "react";
import { View, Text } from "react-native";
import{number} from './componentes/teste';

const App = () => {
    const num = number(1, 22);
    <View>
        <Text>
            Número Sorteado {num};
        </Text>
    </View>
}

export default App;