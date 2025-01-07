import { DashboardCard, DashboardCardContent } from "@/components/dashboard-card";
import UserDataCard, { UserDataProps } from "@/components/user-data-card";
import { db } from "@/lib/db";
import { Calendar, DollarSign, PersonStanding, UserPlus, UserRoundCheck } from "lucide-react";
import { endOfMonth, formatDistanceToNow, startOfMonth } from "date-fns";

export default async function Dashboard() {
  const currentDate = new Date();

  // User Count
  const userCount = await db.user.count()

  // User Count This Month
  const userCountThisMonth = await db.user.count({
    where: {
      createdAt: {
        gte: startOfMonth(currentDate),
        lte: endOfMonth(currentDate)
      }
    }
  })

  // Sales Count
  const salesCount = await db.purchase.count()

  // Sales Total
  const salesTotal = await db.purchase.aggregate({
    _sum: {
      amount: true
    }
  })

  const totalAmount = salesTotal._sum.amount || 0;

  const recentUsers = await db.user.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 7
  });

  const UserData: UserDataProps [] = recentUsers.map((account) => ({
    name: account.name || 'Unknown',
    email: account.email || 'No email provided',
    image: account.image || './mesh.jpg',
    time: formatDistanceToNow(new Date(account.createdAt),
    { addSuffix: true })
  }))

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl font-bold text-center mx-6">Dashboard</h1>
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-5 w-full">
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            <DashboardCard 
              label={"Total Revenue"}
              Icon={DollarSign}
              amount={`$${totalAmount}`}
              description="All Time"
            />
            <DashboardCard 
              label={"Total Paid Subscriptions"}
              Icon={Calendar}
              amount={`+${salesCount}`}
              description="All Time"
            />
            <DashboardCard 
              label={"Total Users"}
              Icon={PersonStanding}
              amount={`+${userCount}`}
              description="All Time"
            />
            <DashboardCard 
              label={"Users This Month"}
              Icon={UserPlus}
              amount={`+${userCountThisMonth}`}
              description="This Month"
            />
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all">
            <DashboardCardContent>
              <section className="flex justify-between gap-2 pb-2">
                <p>Recent Users</p>
                <UserRoundCheck className="h-4 w-4" />
              </section>
              {UserData.map((data, index) => (
                <UserDataCard 
                  key={index}
                  name={data.name}
                  email={data.email}
                  image={data.image}
                  time={data.time}
                />
              ))}
            </DashboardCardContent> 
          </section> 
        </div>
      </div>
    </div>
  );
}
