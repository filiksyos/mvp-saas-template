'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/use-local-storage";
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const [, setSubscription] = useLocalStorage('subscription', 'free');
  const router = useRouter();

  const handleSelectPlan = (plan: string) => {
    setSubscription(plan);
    router.push('/dashboard');
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Free Plan</CardTitle>
          <CardDescription>For personal use</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">- Feature 1</p>
          <p className="mb-4">- Feature 2</p>
          <Button onClick={() => handleSelectPlan('free')}>Select Plan</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Premium Plan</CardTitle>
          <CardDescription>For power users</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">- All features</p>
          <p className="mb-4">- Priority support</p>
          <Button onClick={() => handleSelectPlan('premium')}>Select Plan</Button>
        </CardContent>
      </Card>
    </div>
  );
}