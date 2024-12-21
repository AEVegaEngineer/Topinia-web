import * as React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import TopicIcon from "@mui/icons-material/Topic";
import { Outlet } from "react-router-dom";
import type { User } from "firebase/auth";
import { AppProvider } from "@toolpad/core/react-router-dom";
import type { Navigation, Authentication } from "@toolpad/core/AppProvider";
import {
  firebaseSignOut,
  signInWithGoogle,
  onAuthStateChanged,
} from "./firebase/auth";
import SessionContext, { type Session } from "./SessionContext";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main Menu",
  },
  {
    title: "Feed",
    icon: <DynamicFeedIcon />,
  },
  {
    segment: "topic",
    title: "Topic",
    icon: <TopicIcon />,
  },
];

const BRANDING = {
  title: "Topinia",
};

const AUTHENTICATION: Authentication = {
  signIn: signInWithGoogle,
  signOut: firebaseSignOut,
};

export default function App() {
  const [session, setSession] = React.useState<Session | null>(null);
  const [loading, setLoading] = React.useState(true);

  const sessionContextValue = React.useMemo(
    () => ({
      session,
      setSession,
      loading,
    }),
    [session, loading]
  );

  React.useEffect(() => {
    // Returns an `unsubscribe` function to be called during teardown
    const unsubscribe = onAuthStateChanged((user: User | null) => {
      if (user) {
        setSession({
          user: {
            name: user.displayName || "",
            email: user.email || "",
            image: user.photoURL || "",
          },
        });
      } else {
        setSession(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      session={session}
      authentication={AUTHENTICATION}
    >
      <SessionContext.Provider value={sessionContextValue}>
        <Outlet />
      </SessionContext.Provider>
    </AppProvider>
  );
}
