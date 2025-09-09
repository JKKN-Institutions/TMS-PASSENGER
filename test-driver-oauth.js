// Test script to simulate driver OAuth flow
// Run this in browser console to test the authentication flow

console.log('🧪 Testing Driver OAuth Flow');

// Test 1: Check environment variables
console.log('🔍 Environment Check:');
console.log('NEXT_PUBLIC_REDIRECT_URI:', process.env.NEXT_PUBLIC_REDIRECT_URI);
console.log('NEXT_PUBLIC_PARENT_APP_URL:', process.env.NEXT_PUBLIC_PARENT_APP_URL);
console.log('NEXT_PUBLIC_APP_ID:', process.env.NEXT_PUBLIC_APP_ID);

// Test 2: Simulate stored driver authentication
console.log('\n🧪 Test 2: Simulating stored driver authentication');
const testDriverAuth = {
  user: {
    id: '7720530b-25fc-423e-908d-17f2e0682afb',
    email: 'arthanareswaran22@jkkn.ac.in',
    driver_name: 'ARTHANARESWARAN22',
    rating: 0,
    role: 'driver'
  },
  session: {
    access_token: 'test-token',
    refresh_token: 'test-refresh',
    expires_at: Date.now() + (24 * 60 * 60 * 1000)
  }
};

localStorage.setItem('tms_driver_user', JSON.stringify(testDriverAuth.user));
localStorage.setItem('tms_driver_session', JSON.stringify(testDriverAuth.session));
console.log('✅ Test driver auth stored in localStorage');

// Test 3: Check current authentication state
console.log('\n🧪 Test 3: Checking current authentication state');
console.log('Driver User:', localStorage.getItem('tms_driver_user'));
console.log('Driver Session:', localStorage.getItem('tms_driver_session'));

// Test 4: Simulate OAuth callback URL
console.log('\n🧪 Test 4: Testing OAuth callback URL generation');
const testCallbackUrl = new URL('/auth/callback', window.location.origin);
testCallbackUrl.searchParams.append('code', 'test-code-123');
testCallbackUrl.searchParams.append('state', 'test-state-456');
console.log('Generated callback URL:', testCallbackUrl.toString());

// Test 5: Test redirect URI construction
console.log('\n🧪 Test 5: Testing redirect URI construction');
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3003/auth/callback';
console.log('Redirect URI that would be sent:', redirectUri);
console.log('Expected domain:', 'https://tms-passenger-taupe.vercel.app');
console.log('Match?', redirectUri.includes('tms-passenger-taupe.vercel.app'));

// Test 6: Check current URL and domain
console.log('\n🧪 Test 6: Current URL and domain check');
console.log('Current origin:', window.location.origin);
console.log('Current pathname:', window.location.pathname);
console.log('Current full URL:', window.location.href);

console.log('\n🎯 Test completed. Check logs above for any issues.');
