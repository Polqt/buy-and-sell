import { DashboardCard, DashboardCardContent } from "@/components/dashboard-card";
import UserDataCard from "@/components/user-data-card";
import { Calendar, DollarSign, PersonStanding, UserPlus, UserRoundCheck } from "lucide-react";

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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all">
            <DashboardCardContent>
              <section className="flex justify-between gap-2 pb-2">
                <p>Recent Users</p>
                <UserRoundCheck className="h-4 w-4" />
              </section>
              <UserDataCard 
                name="John Doe"
                image=""
                email="poyhidalgo@gmail.com"
                time="1 hour ago"
              />
            </DashboardCardContent> 
          </section> 
        </div>
      </div>
    </div>
  );
}
