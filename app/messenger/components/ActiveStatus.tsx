'use client';

import useActiveChannel from "@/app/messenger/hooks/useActiveChannel";

const ActiveStatus = () => {
  useActiveChannel();

  return null;
}

export default ActiveStatus;