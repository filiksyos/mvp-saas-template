"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import useLocalStorage from '@/hooks/use-local-storage';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to SaaS MVP!</CardTitle>
          <CardDescription>The simplest way to get started.</CardDescription>
        </CardHeader>
        <CardContent>
            {
                !isLoggedIn && (
                    <Button onClick={() => setIsLoggedIn(true)} className="w-full">Get Started</Button>
                )
            }
        </CardContent>
      </Card>
    </main>
  );
}