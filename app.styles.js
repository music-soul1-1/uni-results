import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#EAF5FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    resultView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    text: {
        flex: 0,
        fontSize: 16,
        color: '#EAF5FF',
        fontFamily: 'JetBrains Mono',
        alignSelf: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 10
    },
    inputView: {
        flex: 0,
        width: 300,
        height: 60,
        marginVertical: 20,
        backgroundColor: '#A1B6D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: '#5E84C3',
        borderWidth: 0.5,
        elevation: 5
    },
    input: {
        color: '#5E84C3',
        width: '100%',
        fontSize: 15,
        padding: 12,
        fontFamily: 'JetBrains Mono',
        alignSelf: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 10
    },
});

export { styles }