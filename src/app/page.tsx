"use client";
import React, { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import { useAppContext } from '@/context/AppContext';
import OrganizerWorkspace from '@/components/workspaces/OrganizerWorkspace';

export default function Home() {
  const { currentUser } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <OrganizerWorkspace onOpenLogin={() => setShowLogin(true)} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
