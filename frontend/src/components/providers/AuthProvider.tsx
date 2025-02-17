'use client';

import { LoginMutation, useLoginMutation, useSignUpMutation } from "@/generated";
import { useRouter } from "next/navigation";
import { createContext, Dispatch, SetStateAction, PropsWithChildren, useState, useEffect, useContext } from "react";
import { toast } from "sonner";
type SignUpParams={
  firstname:string;
  lastname:string;
    email:string;
    password:string;
    repeatPassword:string;
};
type SignInParams={
  email:string;
  password:string;
};
type AuthContextType = {
    handleSignUp: (_params: SignUpParams) => void;
    handleSignIn: (_params: SignInParams) => void;
    signOut: () => void;
    user: LoginMutation['login']['user'] | null;
    setRefresh: Dispatch<SetStateAction<boolean>>;
  };
  export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
  export const AuthProvider =({children}:PropsWithChildren)=>{
    const router=useRouter();
    const [refresh, setRefresh]=useState<boolean>(false);
    const [token, setToken]=useState<string | null>(null);
    const [user, setUser]=useState<LoginMutation['login']['user']| null>(null);

    const [signUpMutation]=useSignUpMutation({
        onCompleted: () => {
            router.push('/user/sign-in');
          },
          onError: (error)=>{
            toast.error(error.message);
          }
    });
    const handleSignUp =async({firstname, lastname, email, password}:SignUpParams)=>{
      await signUpMutation({
        variables: {
          firstname,
          lastname,
          email,
          password,
        },
      });
    }
    const [signInMutation] = useLoginMutation({
      onCompleted: (data) => {
        if (data.login.user.role === 'admin') {
          router.push('/admin/home');
        } else {
          router.push('/user/home');
        }
        localStorage.setItem('token', data.login.token);
        setToken(data.login.token);
        setUser(data.login.user);
        toast.success('Successfully login');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
    const handleSignIn = async ({ email, password }: SignInParams) => {
      await signInMutation({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
    };
    const signOut = () => {
      localStorage.removeItem('token');
      setUser(null);
    };
    useEffect(() => {
      if (token) {
      } else {
        setToken(localStorage.getItem('token'));
      }
    }, [token, refresh]);
    return <AuthContext.Provider value={{setRefresh, user, handleSignIn, handleSignUp, signOut}}>{children}</AuthContext.Provider>
  };
  export const useAuth = () => useContext(AuthContext);