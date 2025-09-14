'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/use-local-storage";

export default function Dashboard() {
  const [subscription, setSubscription] = useLocalStorage('subscription', 'free');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Subscription</CardTitle>
          <CardDescription>You are currently on the <strong>{subscription}</strong> plan.</CardDescription>
        </CardHeader>
        <CardContent>
          {subscription === 'free' ? (
            <Button onClick={() => setSubscription('premium')}>Upgrade to Premium</Button>
          ) : (
            <Button variant="destructive" onClick={() => setSubscription('free')}>Cancel Subscription</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}