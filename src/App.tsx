import { Routes, Route } from "react-router-dom";

import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/form/signinForm";
import SignupForm from "./_auth/form/SignupForm";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
