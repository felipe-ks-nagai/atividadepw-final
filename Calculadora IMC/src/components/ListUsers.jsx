import usersData from './users.json';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './ListUsers.module.css';

export default function ListUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setUsers(usersData.users);
    }, []);

    const handleDelete = (id) => {
        if(id === JSON.parse(localStorage.getItem("user")).id) {
            setError(true);
            return;
        } else {
            fetch(`http://localhost:3001/users/${id}`, {
                method: 'DELETE',
            })
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
        }
    }
      return (
        <>
            <Header />
            <div>
                <h2>Users List</h2>
                {users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                        <strong>{user.nome}</strong> — {user.email} <button className={styles.buttonStyle} onClick={() => handleDelete(user.id)}> ❌</button>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            {error && 
                <div
                    role="status"
                     style={{ color: "#b00020", marginBottom: 12, fontSize: 13 }}
                >
                   Não é possível deletar o usuário logado.
                </div>
            }
        </>
  );
}