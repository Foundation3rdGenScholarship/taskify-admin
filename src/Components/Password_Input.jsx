import { useState } from "react"
import { Field } from "formik"
import { Eye, EyeOff } from "lucide-react"

export default function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
       <div className="w-full space-y-2">
  <Field name="password">
    {({ field, meta: { touched, error } }) => (
      <div className="space-y-1">
        <div className="relative">
          <input
            {...field}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`
              w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary 
              text-txt12 md:text-txt14 lg:text-txt16
              ${touched && error ? "border-accent" : "border-gray-300"}
              dark:text-black dark:bg-white dark:border-gray-600
            `}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </button>
        </div>
        {touched && error && <p className="text-sm text-accent">{error}</p>}
      </div>
    )}
  </Field>
</div>

    )
}

