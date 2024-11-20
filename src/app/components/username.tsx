'use client'

import { useEffect, useState } from "react";
import type { TelegramWebAppUser, TelegramWebApp } from "../types/telegram";

export default function Username() {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Ensure Telegram WebApp API is available
    const telegram = typeof window !== "undefined" && (window.Telegram as TelegramWebApp);

    if (telegram) {
      const user: TelegramWebAppUser | undefined = telegram.initDataUnsafe?.user;

      if (user) {
        const { first_name, last_name, username } = user;

        // Set full name or fallback to username
        setUserName(
          first_name && last_name
            ? `${first_name} ${last_name}`
            : username || "Anonymous"
        );
      }
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {userName}!</h1>
    </div>
  );
};
