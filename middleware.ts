import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',                    
  '/events(.*)',            
  '/api/webhook/clerk',      
  '/api/webhook/stripe',
  '/api/uploadthing',
  '/sign-in(.*)',            
  '/sign-up(.*)'
]);

export default clerkMiddleware((auth, request) => {
  
  if (!isPublicRoute(request)) {
    auth().protect(); 
  }
});

// Next.js middleware configuration
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',  // Always run for API routes
  ],
};
