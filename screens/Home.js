import { Kosakata,
        Muhadatsah, 
        Uslub, 
        Kaidah, 
        Bookmark, 
        AboutUs } from '../components/HomeComp'
import { StyleSheet} from 'react-native';


/* 
Components Home.js :
1 - Kosakata
2 - Muhadatsah
3 - Kaidah
4 - Uslub
5 - Bookmark
6 - About
*/

function Beranda () {
    
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