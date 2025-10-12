export interface AccessObject {
  viewer: boolean;
  contributor: boolean;
  admin: boolean;
}

export async function checkRole(
  userId: string,
  endpoint: string,
  accessToken?: string,
): Promise<AccessObject | null> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Use absolute URL for middleware context
    const baseUrl = process.env.NEXTAUTH_URL;
    const response = await fetch(
      `${baseUrl}/api/users/${userId}/endpoint-access`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ endpoint }),
      },
    );

    if (!response.ok) {
      console.error("Failed to check endpoint access:", response.statusText);
      return null;
    }

    const accessData = await response.json();

    if (!accessData) {
      // For new users without permissions, try to assign default permissions
      console.log(
        "No permissions found for user, attempting to assign default permissions",
      );
      return await assignDefaultPermissions(userId, endpoint, accessToken);
    }

    return {
      viewer: accessData.viewer || false,
      contributor: accessData.contributor || false,
      admin: accessData.admin || false,
    };
  } catch (error) {
    console.error("Error checking role access:", error);
    return null;
  }
}

async function assignDefaultPermissions(
  userId: string,
  endpoint: string,
  accessToken?: string,
): Promise<AccessObject | null> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Use absolute URL for middleware context
    const baseUrl = process.env.NEXTAUTH_URL;
    const response = await fetch(
      `${baseUrl}/api/users/${userId}/assign-default-permissions`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ endpoint }),
      },
    );

    if (!response.ok) {
      console.error(
        "Failed to assign default permissions:",
        response.statusText,
      );
      return null;
    }

    const defaultPermissions = await response.json();
    return {
      viewer: defaultPermissions.viewer || false,
      contributor: defaultPermissions.contributor || false,
      admin: defaultPermissions.admin || false,
    };
  } catch (error) {
    console.error("Error assigning default permissions:", error);
    return null;
  }
}

export async function getUserRoles(
  userId: string,
  accessToken?: string,
): Promise<string[]> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Use absolute URL for middleware context
    const baseUrl = process.env.NEXTAUTH_URL;
    const response = await fetch(`${baseUrl}/api/users/${userId}/roles`, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      console.error("Failed to fetch user roles:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data.roles || [];
  } catch (error) {
    console.error("Error fetching user roles:", error);
    return [];
  }
}

export async function checkEndpointAccess(
  userRoles: string[],
  endpoint: string,
): Promise<AccessObject | null> {
  try {
    // For now, provide default permissions based on roles
    // This can be replaced with your actual permission logic later
    console.log(
      "Checking endpoint access for roles:",
      userRoles,
      "on endpoint:",
      endpoint,
    );

    // Default permissions - all users get viewer access
    return {
      viewer: true,
      contributor: false,
      admin: false,
    };
  } catch (error) {
    console.error("Error checking endpoint access:", error);
    return null;
  }
}
