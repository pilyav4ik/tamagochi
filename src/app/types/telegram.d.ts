export interface TelegramWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  }
  
  export interface TelegramWebApp {
    initDataUnsafe: {
      user?: TelegramWebAppUser;
    };
  }