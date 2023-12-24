# LESSONS

- Next.js Tutorial - 76 - Connecting to a Database
- Next.js #9 - Connecting to MySQL using Prisma

## JWT AUTH CONFIG

<pre>
session: {
    jwt: true
},
jwt: {
    secret: "iavosfe-s9semae-adoevams13"
}
</pre>

## PRISMA

### install

    npm i primsa -D
    npm i @primsa/client

### init 

    npx prisma init

### run migration

    npx prisma generate
    npx prisma migrate
    npx prisma migrate dev