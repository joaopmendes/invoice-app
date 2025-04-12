import { currentUser } from '@clerk/nextjs/server';

const getUserInfoServer = async () => {
  return await currentUser();
};

export default getUserInfoServer;
