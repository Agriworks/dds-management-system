/**
 * Map dynamic routes to a base path used in endpointaccess rows.
 */
export function normalizeEndpointForAccess(endpoint: string): string {
  const uuid =
    /^\/members\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;
  if (uuid.test(endpoint)) {
    return "/members/browse";
  }
  return endpoint;
}
