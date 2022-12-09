import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';
import ProfileCard from './ProfileCard'
import axios from 'axios';

export default function Switches() {
  const [mentees, setMentees] = useState([]);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const getUsers = async () => {
    try {
      const resp = await axios.get('http://localhost:8000/users/')
      setMentees(resp.data);
    }catch(error){
      console.log(error)
    }
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={{display:'flex',alignItems:'center', position: 'absolute'}}>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        onClick={getUsers}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <div style={{display:'flex', flexWrap: 'wrap', gap: '20px', paddingLeft:'5rem'}}>
        {mentees.map(m => (
            <ProfileCard MentorStatus={m.mentor === true ? 'Mentor': 'Mentee'} Name={m.first_name + ' ' + m.last_name} bio={m.bio} addMentor={m.mentor === true ? 'Add as Mentor': 'Add as Mentee'} TechStack={m.tech_stack} id={m.id}/>
        ))}
      </div>
    </div>
  );
}