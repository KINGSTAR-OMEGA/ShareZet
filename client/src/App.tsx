import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Documentation from "./components/legal/Documentation";
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import CookiePolicy from './components/legal/CookiePolicy';
import About from '@/pages/About';
import UseCases from '@/pages/UseCases';

// import ContactUs from './components/legal/ContactUs';

import Room from "@/pages/Room";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/use-cases" component={UseCases} />
      <Route path="/room" component={Room} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookies-policy" component={CookiePolicy} />
      {/* <Route path="/contact" component={ContactUs} /> */}

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
