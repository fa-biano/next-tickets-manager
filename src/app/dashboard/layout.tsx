import DashBoardHeader from '@/components/dashboardHeader';

export default function DashBoradLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashBoardHeader />
      {children}
    </>
  )
}
