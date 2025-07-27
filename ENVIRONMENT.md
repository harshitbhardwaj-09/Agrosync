# Environment Variables Setup for Vercel

## Required Environment Variables

### Backend Environment Variables (Add in Vercel Dashboard)

1. **MONGO** - MongoDB Connection String
   ```
   mongodb+srv://harshitbhardwaj99999:harshitbhardwaj99999@cluster0.9avmosu.mongodb.net/agrosynx?retryWrites=true&w=majority
   ```

2. **JWT_KEY** - JWT Secret Key
   ```
   3fa134eaab0adf0a7c13483a7eb47923e903c9c2ff04fc6b1e117f17c988fca70a322759fc87e84a16f3d14968ac986b35a42bc79d854e986e3e898bd96762cf
   ```

3. **PORT** - Server Port (Optional)
   ```
   3000
   ```

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" section
4. Add each variable:
   - **Name**: MONGO
   - **Value**: Your MongoDB connection string
   - **Environment**: Production, Preview, Development
5. Repeat for JWT_KEY and PORT
6. Click "Save"

## File Structure

```
agrosynx/
├── .env                    # Root environment file
├── api/
│   ├── server.js          # Updated to load from root .env
│   └── ...
└── client/
    └── ...
```

## Important Notes

- Environment variables are loaded from root `.env` file
- Server.js is configured to load from `../.env`
- All environment variables must be added to Vercel dashboard
- Never commit `.env` files to git (already in .gitignore) 