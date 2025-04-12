import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 gap-4">
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            FE aplikace
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="text-6xl font-bold text-primary">{count}</div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCount((count) => count + 1)}
            className="w-full"
          >
            Přičíst
          </Button>
        </CardContent>
        <CardFooter className="text-center text-muted-foreground">
          <p className="w-full">Aplikace byla úspěšně aktualizována.</p>
        </CardFooter>
      </Card>

      <Alert variant="destructive" className="w-[350px] animate-pulse">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Kritická chyba!</AlertTitle>
        <AlertDescription>Toto je kritická chyba, oprav mne</AlertDescription>
      </Alert>
    </div>
  );
};
