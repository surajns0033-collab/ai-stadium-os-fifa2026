"use client";
import React, { useState } from 'react';
import LandingPage from '@/components/workspaces/LandingPage';
import LoginModal from '@/components/LoginModal';
import { useAppContext } from '@/context/AppContext';
import OrganizerWorkspace from '@/components/workspaces/OrganizerWorkspace';

export default function Home() {
  const { currentUser } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);

  // If a user is logged in, show their workspace.
  // For Part 1, we route all personas into the foundational Command Center (OrganizerWorkspace).
  // In future parts, we will map different personas (Fan, Volunteer) to their specific workspaces.
  if (currentUser) {
    return <OrganizerWorkspace />;
  }

  return (
    <>
      <LandingPage onOpenLogin={() => setShowLogin(true)} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
