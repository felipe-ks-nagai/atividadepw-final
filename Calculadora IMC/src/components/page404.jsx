import React from 'react';

export default function NotFound() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            padding: 16
        }}>
            <h1 style={{ fontSize: 64, margin: 0 }}>404</h1>
            <p style={{ margin: '8px 0 24px' }}>Essa página não existe</p>
            <a href="/home" style={{
                padding: '10px 16px',
                background: '#007bff',
                color: '#fff',
                borderRadius: 4,
                textDecoration: 'none'
            }}>
                Voltar ao menu
            </a>
        </div>
    );
}