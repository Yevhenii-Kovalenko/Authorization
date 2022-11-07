import React from "react";


export default function Registr() {
   const [formData, setFormData] = React.useState(
      {
         email: "",
         password: "",
         confimPassword: "",
         okayToEmail: true,
      }
   )

   function handleChange(event) {
      const { name, type, value, checked } = event.target
      setFormData(prevFormData => {
         return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
         }
      })

   }
   function handleSubmit(event) {
      event.preventDefault()
      if (formData.password === formData.confimPassword) {
         console.log("Successfully signed up")
      } else {
         console.log("Passwords to not match")
      }
      if (formData.okayToEmail) {
         console.log("Thanks for signing up for our newsletter!");
      }
   }
   return (
      <div className="form-container">
         <form className="form" onSubmit={handleSubmit}>
            <input
               type="email"
               placeholder="Email address"
               className="form--input"
               name="email"
               onChange={handleChange}
               value={formData.email}
            />
            <input
               type="password"
               placeholder="Password"
               className="form--input"
               name="password"
               onChange={handleChange}
               value={formData.password}

            />
            <input
               type="password"
               placeholder="Confirm password"
               className="form--input"
               name="confimPassword"
               onChange={handleChange}
               value={formData.confimPassword}

            />

            <div className="form--marketing">
               <input
                  id="okayToEmail"
                  type="checkbox"
                  name="okayToEmail"
                  onChange={handleChange}
                  checked={formData.okayToEmail}
                  value={formData.okayToEmail}
               />
               <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button
               className="form--submit"
            >
               Sign up
            </button>
         </form>
      </div>
   )
}