import type { Metadata } from 'next';
import AdminGate from '@/components/AdminGate';

export const metadata: Metadata = {
  title: 'Staff Portal',
  description: 'Restricted staff area.',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminGate />;
}
