import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./contexts/BlogContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import { Router } from "./Router";

export function App() {
  return (
    <ProfileProvider>
      <BlogProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogProvider>
    </ProfileProvider>
  )
}
