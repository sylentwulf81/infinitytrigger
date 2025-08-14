"use client";

import MagicDock from "@/components/ui/magicdock";
import { Users, Shield, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export function MagicDockWrapper() {
  const router = useRouter();

  const dockItems = [
    {
      id: 1,
      icon: <Users size={24} />,
      label: "Team",
      description: "Meet our team",
      onClick: () => router.push("/team"),
    },
    {
      id: 2,
      icon: <Shield size={24} />,
      label: "Privacy Policy",
      description: "Read our privacy policy",
      onClick: () => router.push("/privacy-policy"),
    },
    {
      id: 3,
      icon: <FileText size={24} />,
      label: "Terms of Service",
      description: "Read our terms of service",
      onClick: () => router.push("/terms-of-service"),
    },
  ];

  return <MagicDock items={dockItems} variant="tooltip" />;
}
