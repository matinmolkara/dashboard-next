// /lib/auth.js

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    // Client-side: Use relative URL
    return "";
  } else {
    // Server-side: Use absolute URL
    return process.env.BASE_URL || "http://localhost:3000"; // Update the port if necessary
  }
};

export async function signIn(method, formData) {
  if (method === "credentials") {
    const { email, password } = formData;

    try {
      const baseUrl = getBaseUrl();
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log(`Login failed: ${error.error}`);
        throw new Error(error.error);
      }

      const result = await response.json();
      console.log("Login successful");
      console.log(result.user);

      return result.user;
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("Login failed.");
    }
  } else {
    throw new Error("Unsupported authentication method.");
  }
}

// // auth.js (located in the lib directory)

// // Simulating user data (replace with your actual user data)
// const users = [
//   { email: "matin@info.com", password: "123" },
//   { email: "zahra@info.com", password: "123" },
//   // Add more users as needed
// ];

// export async function signIn(method, formData) {
//   if (method === "credentials") {
//     const { email, password } = formData;

//     // Check if user exists and credentials are valid
//     const user = users.find(
//       (u) => u.email === email && u.password === password
//     );
//     if (!user) {
//         console.log(`No matching user found for email: ${email}`);
//       throw new Error("Invalid credentials.");
//     }

//     // Authentication successful
//     console.log("Login successful");
//     console.log(email);
//     console.log(password);

//     return user;
//   } else {
//     throw new Error("Unsupported authentication method.");
//   }
// }
// /lib/auth.js

// export async function signIn(method, formData) {
//   if (method === "credentials") {
//     const { email, password } = formData;

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         console.log(`Login failed: ${error.error}`);
//         throw new Error(error.error);
//       }

//       const result = await response.json();
//       console.log('Login successful');
//       console.log(result.user);

//       return result.user;
//     } catch (error) {
//       console.error('Error during login:', error);
//       throw new Error('Login failed.');
//     }
//   } else {
//     throw new Error("Unsupported authentication method.");
//   }
// }
