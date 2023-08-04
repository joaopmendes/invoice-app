import { auth } from '@clerk/nextjs';

const getUserInfoServer = () => {
  return auth().user!;
};

export default getUserInfoServer;
