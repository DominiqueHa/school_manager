import { DashboardMetrics } from '@/components/dashboard/metrics';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { UserGreeting } from '@/components/dashboard/user-greeting';

export default function Home() {
  return (
    <div className="space-y-8">
      <UserGreeting />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardMetrics />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <RecentActivity />
      </div>
    </div>
  );
}