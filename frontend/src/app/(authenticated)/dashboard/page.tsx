"use client";

import React from "react";
import { ContentLayout } from "../../../components/admin-panel/content-layout";
import { ComingSoonCard } from "@/components/dashboard/coming-soon-card";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <ComingSoonCard />
    </ContentLayout>
  );
}
