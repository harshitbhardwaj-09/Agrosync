# AgroSynx Deployment Guide

## Environment Variables Required

### Backend (.env in api folder)
```env
MONGO=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key
PORT=3000
```

### Frontend (Vercel Environment Variables)
- `VITE_API_URL=https://your-backend-url.vercel.app/api/`

## Deployment Steps

### 1. Backend Deployment (Vercel)
1. Connect GitHub repository to Vercel
2. Set Root Directory: `api`
3. Build Command: `npm install`
4. Output Directory: `(leave empty)`
5. Install Command: `npm install`
6. Add Environment Variables in Vercel dashboard

### 2. Frontend Deployment (Vercel)
1. Create new Vercel project
2. Set Root Directory: `client`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`
6. Add Environment Variables

### 3. MongoDB Setup
1. Create MongoDB Atlas cluster
2. Get connection string
3. Add to backend environment variables

## Common Issues & Solutions

### CORS Error
- Ensure backend CORS includes frontend URL
- Check credentials setting

### Environment Variables
- Verify all variables are set in deployment platform
- Check variable names match code

### Build Errors
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

## URLs Configuration

Update these files after deployment:
- `client/src/utils/newRequest.js` - API base URL
- `api/server.js` - CORS origins 