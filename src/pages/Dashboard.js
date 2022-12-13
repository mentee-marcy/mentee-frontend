import React, {useEffect, useState} from 'react';
import Sidebar from '../components/SideBar';
import Switch from '../components/Switch';
import ProfileCard from '../components/ProfileCard'
import MentorMenteeButton from '../components/MentorMenteeButton';
import axios from 'axios';


export default function Dashboard() {
  const [clicked, setClicked] = useState(true);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('Build a Community of Mentors Today')
  const getUsers = async () => {
    try {
        const resp = await axios.get('http://localhost:8000/users/');
        setUsers(resp.data);
    }catch(error){
        console.log(error);
    }
  }
  useEffect(() => {
    getUsers()
  }, []);
  
  const mentors = users.filter(user => user.mentor === true)
  const mentees = users.filter(user => user.mentor === false)

  return (
    <div style={{minHeight: '100vh', maxWidth:'100vh'}}>
      <Sidebar/>
      <div>
      <p style={{fontFamily:'KohinoorBangla-Semibold', fontSize:'2.5rem', position: 'absolute', paddingLeft: '27%', color: 'white'}}>{clicked ? message : 'Find Your Mentee Community Today'}</p>
      </div>
      <div style={{paddingTop: '4rem'}}>
      <div style={{}}>
        <MentorMenteeButton setClicked = {setClicked}/>
      </div>
      {console.log(clicked)}
      <div style={{display:'flex',alignItems:'center', position: 'absolute', paddingTop: '3rem'}}>
        <div style={{display:'flex', flexWrap: 'wrap', gap: '20px', paddingLeft:'7rem'}}>
        {clicked === true ? (
          mentors.map(m => {
            return <ProfileCard MentorStatus={m.mentor === true ? 'Mentor': 'Mentee'} Name={m.first_name + ' ' + m.last_name} bio={m.bio} addMentor={m.mentor === true ? 'Add as Mentor': 'Add as Mentee'} TechStack={m.tech_stack} id={m.id}/>
          })
        ): (
          mentees.map(m => {
            return <ProfileCard MentorStatus={m.mentor === true ? 'Mentor': 'Mentee'} Name={m.first_name + ' ' + m.last_name} bio={m.bio} addMentor={m.mentor === true ? 'Add as Mentor': 'Add as Mentee'} TechStack={m.tech_stack} id={m.id}/>
          })
        )}
       </div>
     </div>
     
      </div>
    </div>
  )
}
