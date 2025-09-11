import { Mandal, Village, Customer } from "@/types/api";

// Mock data for Mandals
export const mockMandals: Mandal[] = [
  {
    id: "mandal-1",
    name: "Visakhapatnam Rural",
    code: "VSKR",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "mandal-2",
    name: "Anakapalli",
    code: "ANKP",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "mandal-3",
    name: "Bheemunipatnam",
    code: "BHMP",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "mandal-4",
    name: "Paderu",
    code: "PADR",
    district: "Alluri Sitarama Raju",
    state: "Andhra Pradesh",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

// Mock data for Villages
export const mockVillages: Village[] = [
  // Villages for Visakhapatnam Rural (mandal-1)
  {
    id: "village-1",
    name: "Anandapuram",
    code: "ANDP",
    mandalId: "mandal-1",
    mandalName: "Visakhapatnam Rural",
    population: 15000,
    pincode: "531001",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "village-2",
    name: "Kothavalasa",
    code: "KTVS",
    mandalId: "mandal-1",
    mandalName: "Visakhapatnam Rural",
    population: 8500,
    pincode: "531002",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  // Villages for Anakapalli (mandal-2)
  {
    id: "village-3",
    name: "Chodavaram",
    code: "CHDV",
    mandalId: "mandal-2",
    mandalName: "Anakapalli",
    population: 12000,
    pincode: "531036",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "village-4",
    name: "Nakkapalli",
    code: "NKPL",
    mandalId: "mandal-2",
    mandalName: "Anakapalli",
    population: 6800,
    pincode: "531084",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  // Villages for Bheemunipatnam (mandal-3)
  {
    id: "village-5",
    name: "Appikonda",
    code: "APKD",
    mandalId: "mandal-3",
    mandalName: "Bheemunipatnam",
    population: 4500,
    pincode: "531162",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

// Mock data for Customers
export const mockCustomers: Customer[] = [
  // Customers for Anandapuram (village-1)
  {
    id: "customer-1",
    name: "Ramesh Kumar",
    email: "ramesh.kumar@email.com",
    phone: "+91-9876543210",
    address: "123, Main Street, Anandapuram",
    villageId: "village-1",
    villageName: "Anandapuram",
    mandalId: "mandal-1",
    mandalName: "Visakhapatnam Rural",
    customerType: "individual",
    kycStatus: "verified",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "customer-2",
    name: "Lakshmi Enterprises",
    email: "lakshmi.enterprises@business.com",
    phone: "+91-9876543211",
    address: "456, Business Complex, Anandapuram",
    villageId: "village-1",
    villageName: "Anandapuram",
    mandalId: "mandal-1",
    mandalName: "Visakhapatnam Rural",
    customerType: "business",
    kycStatus: "verified",
    createdAt: "2024-01-16T00:00:00Z",
    updatedAt: "2024-01-16T00:00:00Z",
  },
  {
    id: "customer-3",
    name: "Suresh Babu",
    phone: "+91-9876543212",
    address: "789, Colony Road, Anandapuram",
    villageId: "village-1",
    villageName: "Anandapuram",
    mandalId: "mandal-1",
    mandalName: "Visakhapatnam Rural",
    customerType: "individual",
    kycStatus: "pending",
    createdAt: "2024-01-17T00:00:00Z",
    updatedAt: "2024-01-17T00:00:00Z",
  },
  // Customers for Kothavalasa (village-2)
  {
    id: "customer-4",
    name: "Priya Devi",
    email: "priya.devi@email.com",
    phone: "+91-9876543213",
    address: "321, Temple Street, Kothavalasa",
    villageId: "village-2",
    villageName: "Kothavalasa",
    mandalId: "mandal-1",
    mandalName: "Visakhapatnam Rural",
    customerType: "individual",
    kycStatus: "verified",
    createdAt: "2024-01-18T00:00:00Z",
    updatedAt: "2024-01-18T00:00:00Z",
  },
  // Customers for Chodavaram (village-3)
  {
    id: "customer-5",
    name: "Venkat Rao",
    phone: "+91-9876543214",
    address: "654, Market Area, Chodavaram",
    villageId: "village-3",
    villageName: "Chodavaram",
    mandalId: "mandal-2",
    mandalName: "Anakapalli",
    customerType: "individual",
    kycStatus: "verified",
    createdAt: "2024-01-19T00:00:00Z",
    updatedAt: "2024-01-19T00:00:00Z",
  },
  {
    id: "customer-6",
    name: "Sri Sai Traders",
    email: "srisai.traders@business.com",
    phone: "+91-9876543215",
    address: "987, Commercial Street, Chodavaram",
    villageId: "village-3",
    villageName: "Chodavaram",
    mandalId: "mandal-2",
    mandalName: "Anakapalli",
    customerType: "business",
    kycStatus: "pending",
    createdAt: "2024-01-20T00:00:00Z",
    updatedAt: "2024-01-20T00:00:00Z",
  },
];

// Helper functions to filter data
export function getVillagesByMandalId(mandalId: string): Village[] {
  return mockVillages.filter((village) => village.mandalId === mandalId);
}

export function getCustomersByVillageAndMandal(
  villageId: string,
  mandalId: string,
  limit: number = 10,
  offset: number = 0,
  search?: string,
): { customers: Customer[]; total: number } {
  let filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.villageId === villageId && customer.mandalId === mandalId,
  );

  // Apply search filter if provided
  if (search && search.trim() !== "") {
    const searchLower = search.toLowerCase();
    filteredCustomers = filteredCustomers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchLower) ||
        customer.phone.includes(search) ||
        customer.email?.toLowerCase().includes(searchLower),
    );
  }

  const total = filteredCustomers.length;
  const customers = filteredCustomers.slice(offset, offset + limit);

  return { customers, total };
}
