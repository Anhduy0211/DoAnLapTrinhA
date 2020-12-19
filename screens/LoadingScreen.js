import Header from '../components/Header';

import { globalStyles } from '../globalStyle/style';
import {easyImg, playStateImg, hardImg, normalImg} from '../shared/imageURL'
import Loading from '../components/Loading'

const LoadingSrceen = ({navigation}) =>{
    const [quiz, setQuiz] = useState([]) 
    const [loading, setLoading]= useState(true) 

    // useEffect(() => {
    //     fetch('https://reactnative-server.herokuapp.com/questions')
    //     .then(res => res.json() )
    //     .then(data =>{ 
    //         setQuiz(data.Quiz)
    //     })
    //     .catch(e => console.log(e))
    //     .finally(()=> setLoading(false))
    // }, []);
