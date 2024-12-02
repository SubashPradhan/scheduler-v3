This repository contains a sample Next.js application designed to test and demonstrate the functionality of the Nylas Scheduler Editor.

## Prequisites
Before you begin, ensure the following requirements are met:

- Node.js is installed on your local machine. You can download it from the official [Node.js website](https://nodejs.org/en/download/package-manager).
- Nylas v3 Developer Account: Create a free developer account by signing up [here](https://dashboard-v3.nylas.com/)
- Configure the callback URI for your Nylas application. If you're running this project locally, set the callback URI to http://localhost:3000/scheduler-editor. Refer to the [Nylas API documentation](https://developer.nylas.com/docs/api/v3/admin/#tag--Applications--application-callback-uris) for more details.
- <img width="300" alt="Screenshot 2024-12-02 at 12 42 39" src="https://github.com/user-attachments/assets/af660489-8273-4d6b-9ea8-b99d63f4f6bc">


## Getting Started
Clone this repository to your local machine:
```bash
git clone git@github.com:SubashPradhan/scheduler-v3.git
```

Navigate to the Project Directory
```bash
cd scheduler-v3
```
Add Environment Variables
- Create a `.env` file on the root directory of the project and and add the Nylas client ID:
```bash
NEXT_PUBLIC_CLIENT_ID=<NYLAS_CLIENT_ID>
```

Install Dependencies 
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

View the application:
Open your browser and navigate to http://localhost:3000 to view the application.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
