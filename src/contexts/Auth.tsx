import React, { createContext, useState, useEffect } from 'react';
import { auth, firebase } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

export type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((results) => {
      if (results) {
        const { displayName, photoURL, uid } = results;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  };
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
