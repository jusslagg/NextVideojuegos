"use client"; // Indicamos que es código que debe ejecutarse en el lado del cliente

import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../context/configFirebase"; // Asegúrate de tener correctamente configurado Firebase en este archivo

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({
    email: null,
    uid: null,
  });

  useEffect(() => {
    // Revisa si ya hay un usuario autenticado cuando la app se monta
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          uid: currentUser.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    return () => unsubscribe(); // Limpiar el suscriptor al desmontar el componente
  }, []);

  const registerUser = async (values) => {
    try {
      // Registrar el usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      // Añadir nombre de usuario como propiedad personalizada (opcional, no lo guarda en Firebase por defecto)
      // Si lo deseas agregar al perfil, puedes utilizar el `updateProfile` de Firebase, pero depende de tu caso.
      await user.updateProfile({
        displayName: values.userName,
      });

      setUser({
        email: user.email,
        uid: user.uid,
      });
    } catch (error) {
      console.log("Error al registrar el usuario:", error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      // Intentar iniciar sesión con Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Establecer el usuario en el contexto
      setUser(userCredential.user);

      console.log("Usuario autenticado:", userCredential.user);
      return { success: true };
    } catch (error) {
      // Manejar errores específicos de autenticación
      console.error("Error al iniciar sesión:", error);

      if (error.code === "auth/user-not-found") {
        throw new Error("Usuario no encontrado. Verifica tu correo.");
      } else if (error.code === "auth/wrong-password") {
        throw new Error("Contraseña incorrecta. Intenta nuevamente.");
      } else {
        throw new Error("Ocurrió un error inesperado. Intenta nuevamente.");
      }
    }
  };

  const googleLogin = async () => {
    try {
      // Iniciar sesión con Google
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, registerUser, googleLogin, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
