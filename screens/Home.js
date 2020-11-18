import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import FormInput from './../components/HomeScreen/Form'

function Menu () {
    const [input, setInput] = React.useState('')


    function HandlePress(vocab) {
        const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${vocab}?key=7d0563da-8aca-4795-bfe4-cf2ce781ae9c`;
        fetch(url).then((res) => res.json()).then(res =>)
    }

    return (
            <View style={style.body}>
                <TextInput
                    placeholder='Masukkan Kosakata'
                    placeholderTextColor='#fff'
                    style={style.input} onChangeText={(val) => setInput(val)}
                    />
                <Button title='Cari' onPress={HandlePress(input)} />
            </View>
    )
}

const style = StyleSheet.create({
    body: {
        backgroundColor: '#FFCc79',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff',
        height: '5%',
        width: '25%',
        textAlign: 'center'
    }
})

export default Menu;