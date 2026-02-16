import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Cursor from "@/components/ui/cursor";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, scale: 0.98 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 1.02 }}
transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* Custom Cursor */}
        <Cursor />

        <Router />
        <Toaster />

      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;