import { SetLang } from '@/components/set-lang';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetLang lang="es" />
      {children}
    </>
  );
}
