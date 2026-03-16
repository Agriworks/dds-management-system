## Page access by role

This document summarizes which roles have access to which pages.

### Access matrix

| Page / Endpoint           | Role         | Viewer   | Contributor   | Admin   |
|---------------------------|--------------|-----|-----|-----|
| `/accounts`               | `user`       | ✗   | ✗   | ✗   |
|                           | `supervisor` | ✗   | ✗   | ✗   |
|                           | `accountant` | ✓   | ✗   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |
| `/dashboard`              | `user`       | ✓   | ✗   | ✗   |
|                           | `supervisor` | ✓   | ✓   | ✗   |
|                           | `accountant` | ✓   | ✓   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |
| `/transactions/browse`    | `user`       | ✗   | ✗   | ✗   |
|                           | `supervisor` | ✓   | ✓   | ✗   |
|                           | `accountant` | ✓   | ✓   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |
| `/transactions/add`       | `user`       | ✗   | ✗   | ✗   |
|                           | `supervisor` | ✓   | ✓   | ✗   |
|                           | `accountant` | ✓   | ✓   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |
| `/members`                | `user`       | ✗   | ✗   | ✗   |
|                           | `supervisor` | ✓   | ✓   | ✗   |
|                           | `accountant` | ✓   | ✓   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |
| `/customers`              | `user`       | ✗   | ✗   | ✗   |
|                           | `supervisor` | ✓   | ✗   | ✗   |
|                           | `accountant` | ✓   | ✗   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |
| `/transaction_types`      | `user`       | ✗   | ✗   | ✗   |
|                           | `supervisor` | ✓   | ✓   | ✗   |
|                           | `accountant` | ✓   | ✓   | ✗   |
|                           | `admin`      | ✓   | ✓   | ✓   |

