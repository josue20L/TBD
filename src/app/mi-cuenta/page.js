"use client";

import { useState } from "react";
import AccountAuth from "@/components/account/AccountAuth";
import AccountProfile from "@/components/account/AccountProfile";

export default function MiCuentaPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {isLoggedIn ? (
        <AccountProfile />
      ) : (
        <AccountAuth onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </main>
  );
}
