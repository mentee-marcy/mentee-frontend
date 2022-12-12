import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import './CSS/friendsList.css';
import './CSS/tabs.css';

export default function FriendsList() {
    const userId = 1;
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/users/${userId}/friends`)
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const filterFriends = friends.filter((frnd) => frnd.id !== userId);
    const combFilteredFriends = filterFriends.map((friend) => {
        const { id } = friend;
        const name = `${friend.first_name} ${friend.last_name}`;
        const { tech_stack } = friend;
        const { mentor } = friend;
        return {
            id, name, tech_stack, mentor,
        };
    });
    console.log(combFilteredFriends)
    //console.log(combFilteredFriends);

    const columns = [{ field: 'id', headerName: 'Id',  hide: false},
    {
        field: 'name', headerName: 'Name', flex: 1,  hide: false,
    },
    {
        field: 'tech_stack', headerName: 'Tech Stack', flex: 1,  hide: false,
    },
    {
        field: 'mentor',
        headerName: 'Mentor',
        renderCell: (params) => (params.row.mentor === true ? 'Mentor' : 'Mentee'),
        hide: false,
        flex:1,
        //width:200
    },
    ];

    const [friendRequests, setFriendRequests] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/users/friends/requests/${userId}`)
            .then((res) => {
                setFriendRequests(res.data);
            })
            .catch((err) => console.log(err));
            console.log(friends)
    }, [friends]);
    //console.log(friendRequests)
    const filterFriendRequests = friendRequests.filter((frnd) => frnd.id !== userId);
    let combFilteredFriendRequests = filterFriendRequests.map((friend) => {
        const { id } = friend;
        const name = `${friend.first_name} ${friend.last_name}`;
        const { tech_stack } = friend;
        const { mentor } = friend;
        return {
            id, name, tech_stack, mentor,
        };
    });
    const columnsTwo = [/*{ field: "id", headerName: 'Id', customHeadRender: () => null },*/
    {
        field: 'name', headerName: 'Name', flex: 1, customHeadRender: () => null,
    },
    {
        field: 'tech_stack', headerName: 'Tech Stack', flex: 1, customHeadRender: () => null,
    }
    ];

    const actionColumn = [
        {
            field: "Action", hearderName: "Action", width: 200, renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='acceptButton' onClick={(e) => {
                            acceptFriendRequest(e)
                            window.location.reload(false)
                            }}>Accept</div>
                        <div className='deleteButton'>Delete</div>
                    </div>
                );
            },
        },
    ];
    
    async function acceptFriendRequest(event){
        let friendId = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        friendId = Number(friendId)
        let friend = await axios.put(`http://localhost:8000/users/friend/${friendId}`, { "userId": userId }).then(res => res);
        combFilteredFriendRequests = combFilteredFriendRequests.filter((frnd) => frnd.id != friendId);
        setFriendRequests(combFilteredFriendRequests)
        changeFriendsArrStatus(friendId)
        //setFriends([friend])
    }

    async function changeFriendsArrStatus(friendId){
        let response = await axios.get(`http://localhost:8000/users/${friendId}`).then(res => res)
        // const {id,first_name,last_name,tech_stack,mentor} = friend.data;
        let friend = response.data
        console.log(friend)
        // const fullName = first_name+" "+last_name
        setFriends([...friends, friend])
        
    }
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="friendsTable">

            <div className="container">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(1)}
                    >
                        <h1>Friends</h1>
                    </button>
                    <button
                        className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(2)}
                    >
                        <h1>Friend Requests</h1>
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? 'content  active-content' : 'content'}
                    >
                        <hr />
                        <Box height="75vh" width="100vw">
                            <DataGrid
                                columns={columns}
                                rows={combFilteredFriends}
                                //getRowId={(row) => row._id}
                                sx={{
                                    border: 'none',
                                    color: 'white',
                                    marginLeft: '5.5rem'
                                }}
                            />
                        </Box>
                    </div>

                    <div
                        className={toggleState === 2 ? 'content  active-content' : 'content'}
                    >
                        <hr />
                        <Box height="100vh" width="100vw">
                            <DataGrid
                                columns={columnsTwo.concat(actionColumn)}
                                rows={combFilteredFriendRequests}
                                sx={{
                                    border: 'none',
                                    color: 'white',
                                    marginLeft: '5.5rem'
                                }}
                            />
                        </Box>
                    </div>
                </div>
            </div>

        </div>
    );
}
