"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

export function ComingSoonCard() {
  return (
    <div className="flex items-center justify-center min-h-full w-full">
      <Card className="w-full max-w-xl shadow-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Coming Soon</CardTitle>
          <CardDescription>
            We&apos;re building this dashboard. Check back again shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          Thanks for your patience!
        </CardContent>
      </Card>
    </div>
  );
}

