import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import './CSS/friendsList.css';
import './CSS/tabs.css';

export default function FriendsList() {
    const [userId, setUserId] = useState(null);
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            "x-access-token": token
        }
    };
    async function getUserId() {
        const user = await axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/profile`, config).then(data => data.data)
        setUserId(user.id)
    }
    getUserId()
    useEffect(() => {
        if (userId) {
            console.log(userId)
            axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/${userId}/friends`)
                .then((res) => {
                    setFriends(res.data);
                })
                .catch((err) => console.log(err));

            axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/friends/requests/${userId}`)
                .then((res) => {
                    setFriendRequests(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [userId])

    const filterFriends = friends.filter((frnd) => frnd.id !== userId);
    const combFilteredFriends = filterFriends.map((friend) => {
        const { id } = friend;
        const name = `${friend.first_name} ${friend.last_name}`;
        const { tech_stack } = friend;
        const { avatar } = friend
        const { mentor } = friend;
        return {
            id, name, tech_stack, avatar, mentor,
        };
    });
    //console.log(combFilteredFriends);
    const renderIcon = (word) => {
        switch (word) {
            case 'Javascript':
                return require('./languages/javascript.png')
                break;
            case 'Python':
                return require('./languages/python.png')
                break;
            case 'Java':
                return require('./languages/java.png')
                break;
            case 'C++':
                return require('./languages/c++.png')
                break;
            case 'C#':
                return require('./languages/csharp.png')
                break;
            case 'C':
                return require('./languages/c.png')
                break;
            case 'Go':
                return require('./languages/go.png')
                break;
            case 'Ruby':
                return require('./languages/ruby.png')
                break;
            case 'Swift':
                return require('./languages/swift.png')
                break;
            case 'PHP':
                return require('./languages/php.png')
                break;
        }
    }

    const columns = [{
        field: 'avatar', headerName: 'Profile', hide: false,
        renderCell: (params) => {
            return <img src={params.row.avatar} width="50vw" />
        }
    },
    {
        field: 'name', headerName: 'Name', flex: 1, hide: false,
    },
    {
        field: 'tech_stack', headerName: 'Tech Stack', flex: 1, hide: false,
        renderCell: (params) => {
            return params.row.tech_stack.map(x => {
                return <img src={renderIcon(x)} width='30vw' />
            })
        }
    },
    {
        field: 'mentor',
        headerName: 'Role',
        renderCell: (params) => (params.row.mentor === true ? 'Mentor' : 'Mentee'),
        hide: false,
        flex: 1,
    },
    ];

    //console.log(friendRequests)
    const filterFriendRequests = friendRequests.filter((frnd) => frnd.id !== userId);
    let combFilteredFriendRequests = filterFriendRequests.map((friend) => {
        const { id } = friend;
        const name = `${friend.first_name} ${friend.last_name}`;
        const { tech_stack } = friend;
        const {avatar} = friend
        const { mentor } = friend;
        return {
            id, name, tech_stack, avatar, mentor,
        };
    });
    const columnsTwo = [
        {
            field: 'avatar', headerName: 'Profile', hide: false,
            renderCell: (params) => {
                //console.log(params.row)
                return <img src={params.row.avatar} width="50vw" />
            }
        },
        {
            field: 'name', headerName: 'Name', flex: 1, customHeadRender: () => null,
        },
        {
            field: 'tech_stack', headerName: 'Tech Stack', flex: 1,
            renderCell: (params) => {
                return params.row.tech_stack.map(x => {
                    return <img src={renderIcon(x)} width='30vw' />
                })
            }
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

    async function acceptFriendRequest(event) {
        let friendId = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        friendId = Number(friendId)
        let friend = await axios.put(`https://mentee-backend-production-e50e.up.railway.app/users/friend/${friendId}`, { "userId": userId }).then(res => res);
        combFilteredFriendRequests = combFilteredFriendRequests.filter((frnd) => frnd.id != friendId);
        setFriendRequests(combFilteredFriendRequests)
        changeFriendsArrStatus(friendId)
    }

    async function changeFriendsArrStatus(friendId) {
        let response = await axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/${friendId}`).then(res => res)
        let friend = response.data
        console.log(friend)
        setFriends([...friends, friend])

    }
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="friendsTable">

            <div className="containerTabs">
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
                                getRowSpacing={params => ({
                                    top: 5,
                                    bottom: 5
                                })}
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
