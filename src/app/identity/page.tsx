"use client";
import { useEffect } from 'react';

export default function IdentityRedirect() {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return (
    <div style={{ background: '#05000F', color: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Redirecting...
    </div>
  );
}
