// src/services/authService.ts

import axios from "axios";
export const fakeAuthService = {
    login: async (username: string, password: string) => {
      // Simulate authentication
      
      

        interface User {
          username: string;
          password: string;
        }

        try {
          const user: User = {
            username: username,
            password: password,
          };

          const userData = await axios.post('http://localhost:3000/login', user);
              return userData;
       
        } catch (error:any) {
          console.error('Error during login:', error.message);
        }

    },
    signup: async (username: string, password: string) => {
      // Simulate user registration
      interface Credentials {
        username: string;
        password: string;
      }
      
      interface SignUpResponse {
        message: string;
        token:string;
      }
      try {
        const credentials: Credentials = {
          username: username,
          password: password,
        };
        const response = await axios.post<SignUpResponse>('http://localhost:3000/signup', credentials);
        
        
      } catch (error:any) {
        console.error('Error during signup:', error.message);
      }

     
    },
  };
  