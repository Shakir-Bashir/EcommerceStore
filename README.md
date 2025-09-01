# EcommerceApp

A full featured Ecommerce website built with Next.js, TypeScript, PostgreSQL and Prisma.

![](prostore/public/images/screen.png)

## Demo [https://ecommerce-store-lake-nine.vercel.app/]

## Features

- Next Auth authentication

* Admin area with stats & chart using Recharts

- Order, product and user management

* User area with profile and orders

- Stripe API integration

* PayPal integration

- Cash on delivery option

* Interactive checkout process

- Featured products with banners

* Multiple images using Uploadthing

- Ratings & reviews system

* Search form (customer & admin)

- Sorting, filtering & pagination

* Dark/Light mode

- Much more

## Usage

### Install Dependencies

```
npm install

```

### Environment Variables

### PostgreSQL Database URL

Sign up for a free PostgreSQL database through Vercel. Log into Vercel and click on "Storage" and create a new Postgres database. Then add the URL.

### Example:

```
DATABASE_URL="postgresql://username:password@host:port/dbname"
```

### Next Auth Secret

```
NEXTAUTH_SECRET="##################################"
```

### PayPal Client ID and Secret

Create a PayPal developer account and create a new app to get the client ID and secret.

#### Example:

```
PAYPAL_CLIENT_ID="##################################################"
PAYPAL_APP_SECRET="#################################################"
```

### Stripe Publishable and Secret Key

Create a Stripe account and get the publishable and secret key.

#### Example:

```
STRIPE_SECRET_KEY="###################################################################################################################"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="##################################################################################
#### Example:

```

RESEND_API_KEY="####################"

```

### Run

```

### Run in development mode

npm run dev

### Build for production

npm run build

### Run in production mode

npm start

### Prisma Studio

To open Prisma Studio, run the following command:

```
npx prisma studio

```

### Seed Database

To seed the database with sample data, run the following command:

```

npx tsx ./db/seed

```
