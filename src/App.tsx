import { BrowserRouter } from "react-router-dom";
import { ProfileProvider } from "./contexts/ProfileContext";
import { Router } from "./Router";

export function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ProfileProvider>
  )
}
