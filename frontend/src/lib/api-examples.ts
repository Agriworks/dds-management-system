/**
 * API Testing Examples
 *
 * This file demonstrates how to use the API endpoints with proper TypeScript types.
 * You can run these examples in the browser console or create test files.
 */

import { getMandals, getVillages, getCustomers } from "@/lib/api-client";

// Example 1: Fetch all mandals
export async function testGetMandals() {
  try {
    console.log("🔄 Fetching mandals...");
    const mandals = await getMandals();
    console.log("✅ Mandals:", mandals);
    return mandals;
  } catch (error) {
    console.error("❌ Error fetching mandals:", error);
    throw error;
  }
}

// Example 2: Fetch villages for a specific mandal
export async function testGetVillages(mandalId: string) {
  try {
    console.log(`🔄 Fetching villages for mandal: ${mandalId}`);
    const villages = await getVillages({ mandalId });
    console.log("✅ Villages:", villages);
    return villages;
  } catch (error) {
    console.error("❌ Error fetching villages:", error);
    throw error;
  }
}

// Example 3: Fetch customers for a specific village and mandal
export async function testGetCustomers(villageId: string, mandalId: string) {
  try {
    console.log(
      `🔄 Fetching customers for village: ${villageId}, mandal: ${mandalId}`,
    );
    const result = await getCustomers({
      villageId,
      mandalId,
      limit: "5", // Limit to 5 customers for testing
    });
    console.log("✅ Customers:", result.customers);
    console.log("📊 Pagination:", result.pagination);
    return result;
  } catch (error) {
    console.error("❌ Error fetching customers:", error);
    throw error;
  }
}

// Example 4: Complete workflow test
export async function testCompleteWorkflow() {
  try {
    console.log("🚀 Starting complete API workflow test...");

    // Step 1: Get mandals
    const mandals = await testGetMandals();
    if (mandals.length === 0) {
      throw new Error("No mandals found");
    }

    // Step 2: Get villages for the first mandal
    const firstMandal = mandals[0];
    const villages = await testGetVillages(firstMandal.id);
    if (villages.length === 0) {
      console.log(`ℹ️ No villages found for mandal: ${firstMandal.name}`);
      return;
    }

    // Step 3: Get customers for the first village
    const firstVillage = villages[0];
    const result = await testGetCustomers(firstVillage.id, firstMandal.id);

    console.log("🎉 Complete workflow test completed successfully!");
    console.log(`📋 Summary:
      - Mandals: ${mandals.length}
      - Villages in ${firstMandal.name}: ${villages.length}
      - Customers in ${firstVillage.name}: ${result.pagination.total}
    `);

    return {
      mandals,
      villages,
      customers: result.customers,
      pagination: result.pagination,
    };
  } catch (error) {
    console.error("❌ Complete workflow test failed:", error);
    throw error;
  }
}

// Example API URLs for manual testing:
export const API_EXAMPLES = {
  mandals: "/api/mandals",
  villages: "/api/villages?mandalId=mandal-1",
  customers:
    "/api/customers?villageId=village-1&mandalId=mandal-1&limit=10&offset=0",
  customersWithSearch:
    "/api/customers?villageId=village-1&mandalId=mandal-1&search=ramesh&limit=5",
};

// TypeScript interfaces that match our API responses
export interface APITestResult {
  mandals: Array<{
    id: string;
    name: string;
    code: string;
    district: string;
    state: string;
  }>;
  villages: Array<{
    id: string;
    name: string;
    code: string;
    mandalId: string;
    mandalName: string;
  }>;
  customers: Array<{
    id: string;
    name: string;
    phone: string;
    villageId: string;
    villageName: string;
    mandalId: string;
    mandalName: string;
  }>;
}
