import {useEffect, useState, useContext} from "react"
import { Redirect } from "react-router-dom";
import CaseList from "./CaseList";
import { UserContext } from './UserContext';
const Home = () => {

    const [cases, setCases] = useState(null)
    const {user, setUser} = useContext(UserContext);

    var obj = {  
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ user,
          
        }
      }
    
      
    useEffect(() => {
        fetch('http://localhost:3000/case', obj)
        .then(res => {
        return res.json();
        })
        .then(data => {
        console.log(data)
        setCases(data.cases);
        })
    }, [])

    if (user){
        return(
            <div className="home">
                {cases && <CaseList cases={cases}/>}
            </div>
        );
    } else {
        return <Redirect to='/login'  />
    }
    
}

export default Home;