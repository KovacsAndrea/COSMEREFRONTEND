import React, { useState } from 'react';
import './profilePage.css';
import axios from 'axios';
import { useGlobalState } from '../../../globalVarialbles.tsx';
import { Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CosmereButtonRed } from '../../components/genericComponents/buttons/otherButtons/otherButtons.tsx';

export const ProfilePage: React.FC<{}> = ({}) => {
  const { user, userList, cosmerePath} = useGlobalState();
  const token = sessionStorage.getItem('token')
  const [editableUserList, setEditableUserList] = useState(userList);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editUser, setEditUser] = useState<any>(null);

  const handleEdit = (index: number, user: any) => {
    setEditIndex(index);
    setEditUser({ ...user });
  };

  const handleSave = async (index: number) => {
    const newList = [...editableUserList];
    newList[index] = editUser;
    await axios.put(cosmerePath + "/mongoUsers/" + editUser._id, {
        accessLevel: editUser.accessLevel
    }, {headers: {Authorization: `${token}`}});
    setEditableUserList(newList);
    setEditIndex(null);
    setEditUser(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditUser({ ...editUser, accessLevel: e.target.value });
  };
  const[slideIn, setSlideIn]  = useState(true)
  const navigate = useNavigate();
  const handleBackToMain = () =>{
    setSlideIn(false)
    setTimeout(() => {navigate("/main")}, 1000)
  }
  return (
    <>
    <Slide in = {slideIn} timeout={1000} direction='down'>
    <div className = "profile-page">
        <div className="profile-page-wrapper">
        <div className="current-user-box">
            <h2>Current User</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Access Level: {user.accessLevel}</p>
            <div className = "profile-cosmere-button-wrapper"> <CosmereButtonRed onClickAction={handleBackToMain} /> </div>
        </div>
        {user.accessLevel == "Knight Radiant" && 
        <>
            <h2>Other Users</h2>
        <table className="users-table">
            <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Access Level</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {editableUserList.map((user: any, index: number) => (
                <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    {editIndex === index ? (
                    <select className='user-profile-page-select'
                        value={editUser.accessLevel}
                        onChange={handleChange}
                    >
                        <option value="Bridgeman">Bridgeman</option>
                        <option value="Surgebinder">Surgebinder</option>
                        <option value="Knight Radiant">Knight Radiant</option>
                    </select>
                    ) : (
                    user.accessLevel
                    )}
                </td>
                <td>
                    {editIndex === index ? (
                    <button className = "profile-save-button" onClick={() => handleSave(index)}>Save</button>
                    ) : (
                    <button className = "profile-edit-button" onClick={() => handleEdit(index, user)}>Edit</button>
                    )}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
        }
        </div>
        <div className='profile-page-landscape' />
    </div>
    </Slide>
    </>
  );
};