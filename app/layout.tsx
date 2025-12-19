import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Afloja la toti',
  description: 'Austin\'s premier boutique HIIT and cycling studio where high-energy workouts meet a supportive community—transform your fitness journey with expert instructors and your first class free',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
