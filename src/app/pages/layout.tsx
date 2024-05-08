import PageLayout from "@/components/pageLayout/pageLayout";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PageLayout>{children}</PageLayout>
  );
}
