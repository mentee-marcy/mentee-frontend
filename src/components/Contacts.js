import React, { useState } from 'react'
import "../pages/CSS/messageBox.css"
import './CSS/contacts.css'
const Contacts = ({ contacts, user, changeChat }) => {
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <div className='container'>
            <div className='contactsContainer' >
                <div className="contacts">
                    {contacts.map((contact, index) => {
                        return (
                            <div
                                key={contact.id}
                                className={`contact ${index === currentSelected ? "selected" : ""
                                    }`}
                                onClick={() => changeCurrentChat(index, contact)}
                            >
                                <div className="avatar">
                                    <img
                                        src={`https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg`}
                                        alt=""
                                    />
                                </div>
                                <div className="username">
                                    <h3>{contact.first_name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contacts