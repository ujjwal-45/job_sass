import Image from "next/image";
import { supabaseServerClient } from "../utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = supabaseServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = supabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <div className="flex justify-center w-full h-screen items-center">
    <div className="left h-screen w-1/3">
      <Image
        src="/ai3.png"
        objectFit="cover"
        className="object-cover h-full"
        alt="img"
        width={500}
        height={500}
      />
    </div>
    <div className="w-2/3 px-8 flex flex-col justify-center items-center sm:max-w-md mx-auto mt-4 shadow-xl p-12">
      <h1 className="text-3xl font-semibold text-foreground mb-4">Welcome Back</h1>
      <br />
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button className="gradient text-white rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </button>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>

      <Link
        href="/forgot-password"
        className="rounded-md no-underline text-indigo-400 text-sm"
      >
        Forgotten Password.
      </Link>

      <br />
      <br />

      <Link
        href="/register"
        className="rounded-md no-underline text-foreground text-sm"
      >
        Don&apos;t have an Account?{" "}
        <span className="text-blue-500">Sign Up</span>
      </Link>
    </div>
  </div>

  );
}
