import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function NotFoundPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
      <Card padding="p-12" className="space-y-6">
        <span className="text-6xl font-extrabold text-accent font-heading block">404</span>
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The page or article you are looking for has been moved, removed, or does not exist.
        </p>
        <div className="pt-4 flex justify-center">
          <Button to="/" variant="primary" icon={Home}>
            Return to Homepage
          </Button>
        </div>
      </Card>
    </div>
  );
}
