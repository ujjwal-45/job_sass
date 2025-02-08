'use client'
import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseServerClient } from "../utils/supabase/server";

export default function SignUpForm() {

    const supabase = supabaseServerClient();

    const signUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
    ) => {
    try {
        const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
            first_name: firstName,
            last_name: lastName,
            },
        },
        });
        if (password !== confirmPassword) {
        return redirect("/register?message=Passwords do not match");
        }

        if (error) {
        console.error("Error signing up:", error.message);
        return;
        }

        console.log("Sign up successful:", data);
        redirect("/find_jobs");
    } catch (err) {
        console.log("Sign up error", err);
    }
    };


     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const formData = new FormData(e.currentTarget);
       const firstName = formData.get("first_name") as string;
       const lastName = formData.get("last_name") as string;
       const email = formData.get("email") as string;
       const password = formData.get("password") as string;
       const confirmPassword = formData.get("confirm_password") as string;

       await signUp(firstName, lastName, email, password,confirmPassword);
     };
    return (
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first_name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="last_name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="retype_password"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="tos"
            className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="tos" className="ml-2 block text-[12px] text-gray-900">
            I have read and understand JOBNEST&apos;s
            <Link href="/terms">
              <span className="text-emerald-500 font-semibold underline">
                {" "}
                Terms of Service
              </span>
              .
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create account
        </button>
       
      </form>
    );
}