import Image from 'next/image'
import { PrismaClient, User } from '@prisma/client'

export default async function Home() {

  const prisma = new PrismaClient()
  const users = await prisma.user.findMany();

  if (users.length == 0) {
    for (let i = 0; i < 10; i++) {
      await prisma.user.create({
        data: {
          name: `name${i}`,
          email: `email${i}@gmail.come`,
        },
      });
    }
  }

  function UserComponent({ user }: { user: User }) {
    return (
      <div className="rounded-lg border border-2 border-stone-400 flex-col space-y-2 overflow-hidden">
        <div className="border border-b-stone-400 p-2">
          {user.name}
        </div>
        <div className="p-2">
          <div className="text-stone-600">
            {user.email}
          </div>
          {/* <div className="text-stone-600">
            {user.phoneNumber}
          </div> */}
        </div>
      </div>
    )
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl">
        <h1 className="p-1 text-2xl text-center">
          Users
        </h1>
        <hr className="border border-stone-400 w-full m-4" />
        <div className="flex items-center justify-center flex-wrap gap-3 text-xs">
          {users?.map(user => (
            <UserComponent user={user} />
          ))}
        </div>
      </div>
    </main>
  )
}
