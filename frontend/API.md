# API Documentation

This document describes the API endpoints for managing Mandals, Villages, and Customers with proper TypeScript type safety.

## Overview

The API provides three main endpoints for hierarchical data retrieval:

1. **Mandals** - Administrative regions
2. **Villages** - Sub-regions within mandals
3. **Customers** - Individuals or businesses within villages

## Endpoints

### 1. Get All Mandals

**Endpoint:** `GET /api/mandals`

**Description:** Retrieves all available mandals.

**Response:**

```typescript
{
  success: true,
  data: Mandal[],
  message?: string,
  timestamp: string
}
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "mandal-1",
      "name": "Visakhapatnam Rural",
      "code": "VSKR",
      "district": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "message": "Mandals retrieved successfully",
  "timestamp": "2024-01-20T10:00:00Z"
}
```

### 2. Get Villages by Mandal

**Endpoint:** `GET /api/villages?mandalId={mandalId}`

**Description:** Retrieves all villages for a specific mandal.

**Query Parameters:**

- `mandalId` (required): The ID of the mandal

**Response:**

```typescript
{
  success: true,
  data: Village[],
  message?: string,
  timestamp: string
}
```

**Example Request:**

```
GET /api/villages?mandalId=mandal-1
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "village-1",
      "name": "Anandapuram",
      "code": "ANDP",
      "mandalId": "mandal-1",
      "mandalName": "Visakhapatnam Rural",
      "population": 15000,
      "pincode": "531001",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "message": "Found 2 villages for mandal mandal-1",
  "timestamp": "2024-01-20T10:00:00Z"
}
```

### 3. Get Customers by Village and Mandal

**Endpoint:** `GET /api/customers?villageId={villageId}&mandalId={mandalId}&limit={limit}&offset={offset}&search={search}`

**Description:** Retrieves paginated customers for a specific village and mandal.

**Query Parameters:**

- `villageId` (required): The ID of the village
- `mandalId` (required): The ID of the mandal
- `limit` (optional): Number of customers to return (1-100, default: 10)
- `offset` (optional): Number of customers to skip (default: 0)
- `search` (optional): Search term for filtering customers by name, phone, or email

**Response:**

```typescript
{
  success: true,
  data: {
    items: Customer[],
    pagination: {
      total: number,
      limit: number,
      offset: number,
      hasMore: boolean
    }
  },
  message?: string,
  timestamp: string
}
```

**Example Request:**

```
GET /api/customers?villageId=village-1&mandalId=mandal-1&limit=5&offset=0&search=ramesh
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "customer-1",
        "name": "Ramesh Kumar",
        "email": "ramesh.kumar@email.com",
        "phone": "+91-9876543210",
        "address": "123, Main Street, Anandapuram",
        "villageId": "village-1",
        "villageName": "Anandapuram",
        "mandalId": "mandal-1",
        "mandalName": "Visakhapatnam Rural",
        "customerType": "individual",
        "kycStatus": "verified",
        "createdAt": "2024-01-15T00:00:00Z",
        "updatedAt": "2024-01-15T00:00:00Z"
      }
    ],
    "pagination": {
      "total": 1,
      "limit": 5,
      "offset": 0,
      "hasMore": false
    }
  },
  "message": "Found 1 customers (1 total) for village village-1",
  "timestamp": "2024-01-20T10:00:00Z"
}
```

## TypeScript Types

All API requests and responses are fully typed. Import types from:

```typescript
import {
  Mandal,
  Village,
  Customer,
  GetMandalsResponse,
  GetVillagesResponse,
  GetCustomersResponse,
} from "@/types/api";
```

### Key Types:

```typescript
interface Mandal {
  id: string;
  name: string;
  code: string;
  district: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

interface Village {
  id: string;
  name: string;
  code: string;
  mandalId: string;
  mandalName: string;
  population?: number;
  pincode?: string;
  createdAt: string;
  updatedAt: string;
}

interface Customer {
  id: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
  villageId: string;
  villageName: string;
  mandalId: string;
  mandalName: string;
  customerType: "individual" | "business";
  kycStatus: "pending" | "verified" | "rejected";
  createdAt: string;
  updatedAt: string;
}
```

## Client-Side Usage

Use the provided API client functions for type-safe API calls:

```typescript
import { getMandals, getVillages, getCustomers } from "@/lib/api-client";

// Get all mandals
const mandals = await getMandals();

// Get villages for a mandal
const villages = await getVillages({ mandalId: "mandal-1" });

// Get customers with pagination
const { customers, pagination } = await getCustomers({
  villageId: "village-1",
  mandalId: "mandal-1",
  limit: "10",
  offset: "0",
  search: "ramesh",
});
```

## Error Handling

All endpoints return consistent error responses:

```typescript
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: Record<string, unknown>
  },
  timestamp: string
}
```

Common error codes:

- `VALIDATION_ERROR` (400): Missing or invalid parameters
- `INTERNAL_ERROR` (500): Server-side error

## Testing

Use the provided test utilities in `/src/lib/api-examples.ts`:

```typescript
import { testCompleteWorkflow } from "@/lib/api-examples";

// Test the complete API workflow
await testCompleteWorkflow();
```

## Mock Data

The API currently uses mock data located in `/src/lib/mock-data.ts`. In production, replace this with actual database calls.
