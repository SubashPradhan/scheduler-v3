'use client';

import { NylasSchedulerEditor } from "@nylas/react";

const SchedulerEditor: React.FC = () => {
  const currentLocation = typeof window !== 'undefined'
    ? window.location.origin
    : '';
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h2 className="text-xl sm:text-3xl text-gray-800 mb-8 text-center font-serif">
        Nylas Support Demo
      </h2>
      <div>
        <NylasSchedulerEditor
          schedulerPreviewLink={`${currentLocation}/scheduler/{config.id}`}
          nylasSessionsConfig={{
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
            redirectUri: `${currentLocation}/scheduler-editor`,
            domain: "https://api.us.nylas.com/v3",
            hosted: true,
            accessType: 'offline',
          }}
        />
      </div>
    </div>
  );
}

export default SchedulerEditor;
