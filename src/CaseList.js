import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

const CaseList = ({ cases }) => {
  console.log("In comp", cases);
  
  const {user, setUser} = useContext(UserContext);
  

  const confirmCase = (userCase) => {

    if (window.confirm('Are you sure you want to confirm this case? All other user who have checked into the same places within a four hour period of this patient in the last 5 days will be notified.')) 
    { 
      console.log("UserCase",userCase._id);

      let caseId = 0;

      var obj = {  
        method: 'POST',
        headers: {
          'Authorization': 'Bearer '+ user,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "caseId": userCase._id}),
      }
    
      fetch('http://localhost:3000/case/updatecase', obj)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data)
          
        }).catch((err) => {
          console.log(err);
        })
    }
    
  
};


  return (
    
    <div className="blog-list">
      {cases.map(userCase => (

        <div className="blog-preview" key={userCase._id} >
          <h2>{ userCase.name }</h2>
          <p>{ userCase.startDate }</p>
          <p>Status: { userCase.status }</p>
          <p>Phone: { userCase.phone }</p>
          <p>Email: { userCase.email }</p>
          {userCase.status == "confirmed" ? (
            <button style={{backgroundColor: '#003066'}}  className='round-button'>Case Has been Confirmed</button>
          ) : (
            <button onClick={() => {confirmCase(userCase)}} className='round-button'>Confirm Case</button>
          )}
          
        </div>
      ))}
    </div>
  );
}
 
export default CaseList;