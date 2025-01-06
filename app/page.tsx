import { DashboardCard } from "@/components/dashboard-card";
import { Calendar, DollarSign, PersonStanding, UserPlus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl font-bold text-center mx-6">Dashboard</h1>
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-5 w-full">
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            <DashboardCard 
              label={"Total Revenue"}
              Icon={DollarSign}
              amount={12000}
              description="All Time"
            />
            <DashboardCard 
              label={"Total Revenue"}
              Icon={Calendar}
              amount={12000}
              description="All Time"
            />
            <DashboardCard 
              label={"Total Revenue"}
              Icon={PersonStanding}
              amount={12000}
              description="All Time"
            />
            <DashboardCard 
              label={"Total Revenue"}
              Icon={UserPlus}
              amount={12000}
              description="This Month"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
