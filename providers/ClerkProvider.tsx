import { dark } from '@clerk/themes';
import { ClerkProvider as ClerkMainProvider } from '@clerk/nextjs';

export const ClerkProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ClerkMainProvider appearance={{ baseTheme: dark }}>{children}</ClerkMainProvider>;
};
