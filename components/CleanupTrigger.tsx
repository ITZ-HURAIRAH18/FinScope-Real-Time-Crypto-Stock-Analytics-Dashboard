'use client';

import { useEffect } from 'react';

/**
 * Component that triggers cleanup of expired unverified users
 * This runs on the client side as a backup to the cron job
 */
export default function CleanupTrigger() {
  useEffect(() => {
    // Run cleanup on mount (when user visits the site)
    const triggerCleanup = async () => {
      try {
        // Use a simple fetch without auth for client-side trigger
        await fetch('/api/cron/cleanup-unverified', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        // Silently fail - this is just a backup mechanism
        console.debug('Cleanup trigger failed (this is normal):', error);
      }
    };

    // Trigger immediately on mount
    triggerCleanup();
  }, []);

  return null; // This component doesn't render anything
}
