"use server";

import { signIn } from "./auth";

export async function authenticate(_currentState, formData) {
  try {
    const user = await signIn("credentials", formData);
    if(user){
      console.log(user)
      return "Login successful";
    }
      
  } catch (error) {
     if (error.message === "Invalid credentials.") {
        
       return "Invalid credentials.";
     } else {
       return "Something went wrong.";
     }
  }
}
