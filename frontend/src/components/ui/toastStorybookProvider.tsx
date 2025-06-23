import React from 'react';
import { ToastProvider, ToastViewport } from './toast';
import { Toaster } from '@/components/ui/toaster'; // Import the Toaster component if you have one

export const withToastProvider = (Story: React.ComponentType) => (
  <ToastProvider>
    <Story />
    <ToastViewport /> {/* Make sure the ToastViewport is included */}
    {/* If you're using a Toaster component, include it here as well */}
    {typeof Toaster !== 'undefined' && <Toaster />}
  </ToastProvider>
);