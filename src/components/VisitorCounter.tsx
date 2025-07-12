import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeCounter = async () => {
      try {
        // Get current count
        const { data: visitors } = await supabase
          .from('visitors')
          .select('count')
          .single();

        if (visitors) {
          setVisitorCount(visitors.count);
        }

        // Increment count for new visitor
        const { data: updatedVisitor } = await supabase
          .rpc('increment_visitors')
          .single();

        if (updatedVisitor) {
          setVisitorCount(updatedVisitor.count);
        }

        // Subscribe to real-time changes
        const subscription = supabase
          .channel('visitors')
          .on('postgres_changes', { 
            event: 'UPDATE',
            schema: 'public',
            table: 'visitors'
          }, (payload) => {
            setVisitorCount(payload.new.count);
          })
          .subscribe();

        setLoading(false);

        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error initializing visitor counter:', error);
        setLoading(false);
      }
    };

    initializeCounter();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-cosmicPurple/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-starWhite/90 border border-starWhite/10">
      <Users className="w-4 h-4 text-nebulaPink" />
      <span className="text-sm font-medium">
        {visitorCount.toLocaleString()} visitor{visitorCount !== 1 ? 's' : ''}
      </span>
    </div>
  );
};

export default VisitorCounter;