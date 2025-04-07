'use client';

import { signIn } from 'next-auth/react';

export default function RegisterPage() {
    const handleGoogleSignIn = () => {
        signIn('google'); // 'google' is the provider ID configured in your [...nextauth].js
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button
                onClick={handleGoogleSignIn}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4285F4',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Sign in with Google
            </button>
        </div>
    );
}