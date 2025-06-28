import DashBoardHeader from '@/components/dashboard/dashboardHeader'

export default function DashBoradLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashBoardHeader />
      {children}
    </>
  )
}
