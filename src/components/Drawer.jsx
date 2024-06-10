import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Drawer = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex',
        'translate-x-0',
        'transition-transform duration-300'
      )}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-1/3 min-h-screen bg-white shadow-lg translate-x-0">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;