"use client";
import { NylasScheduling } from '@nylas/react';
import React from 'react';

interface params {
  id: string
}

const Scheduler: React.FC<{ params: params }> = ({ params }) => {
  const { id } = params;
  return <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <NylasScheduling
        configurationId={id}
        nylasBranding={false}
      />
    </div>
  </>
}

export default Scheduler