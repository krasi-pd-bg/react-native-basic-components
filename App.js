import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const onPressIncrement = () => { alert("Incrementing!"), setCount(oldCount => oldCount + 1) };
    const onPressDecrement = () => { alert("Decrementing!"), setCount(oldCount => oldCount - 1) };
    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Text>Basic components!</Text>
                <Image source={require('./assets/favicon.png')} />
                {isVisible &&
                    <Image source={require('./assets/icon.png')} style={{ width: 50, height: 50 }} />
                }

                <Button title={isVisible ? "Hide" : "Show"}
                    onPress={() => setIsVisible(state => !state)} />
            </View>
            <Button title="Increment Counter"
                onPress={onPressIncrement}
            />
            <ImageBackground
                source={image}
                style={styles.image}
                imageStyle={{ opacity: 0.5 }}
            >
                <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>
                    {`Counter: ${count}`}
                </Text>
            </ImageBackground>
            <Button title="Decrement Counter"
                onPress={onPressDecrement}
            />
            <Text style={{ color: 'black', fontSize: 14, textAlign: 'center', marginTop: 50 }}>
                Welcome to React Native!
            </Text>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: 200,
    },
});
