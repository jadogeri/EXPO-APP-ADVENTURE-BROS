
import { StyleSheet } from "react-native";

{/* styling sheet */}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9df'
        // backgroundColor: "#f5f5f5",
    },
    t_container:{
     
        borderColor: 'white',
        color: '#111',
        borderWidth: 1,
        borderRadius: 10,
        width: 150,
        backgroundColor: '#35c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'italic',
        padding: 5,
        margin: 5
    },
    t1_container:{
     
        borderColor: 'white',
        color: '#111',
        borderWidth: 1,
        borderRadius: 10,
        width: 150,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
    text2:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'italic',
        padding: 5,
        margin: 5
    },
    touchContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

        margin: 10,
        borderWidth: 10,
        borderColor: 'green',
        padding: 1

    },
    background:{

        flex:1,
        backgroundColor :'gray',
        textShadowColor : 'green',
        textShadowRadius:20
    },
    button:{
        width:20,
        height:50,
    },
    textStyle:{
        fontSize: 50,
        fontStyle:"italic",
        fontWeight :"bold",
        textAlign: 'center',
        textShadowColor : 'green',
        textShadowRadius:20   
    },
    textHeader:{
        fontSize: 20,
        fontStyle:"italic",
        fontWeight :"bold",
        textAlign: 'center',
        textShadowColor : 'green',
        textShadowRadius:20
    }
});

export default styles;

