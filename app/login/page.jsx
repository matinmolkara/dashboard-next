
// import { authenticate } from '@/app/lib/actions'

//  import {useFormStatus,useFormState} from 'react-dom'
// export default function Page() {
//     const [errorMessage, dispatch] = useFormState(authenticate,undefined)
//   return (
//     <form action={dispatch}>
//       <input type="email" name="email" placeholder="Email" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <div>{errorMessage && <p>{errorMessage}</p>}</div>
//       <LoginButton />
//     </form>
//   )
// }

// function LoginButton(){
//     const {pending} = useFormStatus()
//     const handleClick = (event) => {
//         if(pending){
//             event.preventDefault()
//         }
//     }
//     return(
//         <button aria-disabled={pending} type="submit" onClick={handleClick}>Login</button>
//     )
// }
'use client';

import { authenticate } from '@/app/lib/actions';
import { useState } from 'react';

export default function Page() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const result = await authenticate(undefined, data);
    setPending(false);

    if (result === "Login successful") {
      setSuccessMessage(result);
    } else {
      setErrorMessage(result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <div>{successMessage && <p>{successMessage}</p>}</div>
      <LoginButton pending={pending} />
    </form>
  );
}

function LoginButton({ pending }) {
  return (
    <button aria-disabled={pending} type="submit" disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </button>
  );
}
