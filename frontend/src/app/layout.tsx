import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Football AI Coach',
  description: 'AI-powered football analytics and coaching platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
