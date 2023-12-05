let baseUrl;
if (typeof window !== 'undefined') {
  baseUrl = window.location.origin;

} else {
  
  baseUrl = process.env.BASE_URL || 'http://localhost:3000';
}

export default baseUrl;