import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Waitlist",
  description: "Join the ZUSI waitlist and be among the first to experience Africa's all-in-one utility payment platform. Get early access and exclusive benefits.",
  openGraph: {
    title: "Join the ZUSI Waitlist",
    description: "Be among the first to experience ZUSI. Get early access, exclusive benefits, and help shape the future of bill payments in Africa.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

