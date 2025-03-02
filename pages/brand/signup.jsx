import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function SignupPage() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        role: "brand"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.JWT_SECRET}`,
                },
                body: JSON.stringify(userInfo),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Signup failed");
            }

            toast.success(data.message);
            
            localStorage.setItem("user", JSON.stringify({
                token: data.token,
                name: data.name,
                email: data.email,
                role: data.role
            }));

            setTimeout(() => {
                router.push("/brand");
            }, 1000);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Toaster position="bottom-left" richColors expand visibleToasts={3} />
            
            <div className="h-max text-center py-20">
                <h1 className="text-3xl font-semibold mt-10">
                    Join as a brand
                </h1>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">
                        <input
                            onChange={handleChange}
                            id="name"
                            name="name"
                            type="text"
                            value={userInfo.name}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            onChange={handleChange}
                            id="email"
                            name="email"
                            type="email"
                            value={userInfo.email}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Email address"
                            required
                        />
                        <input
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            value={userInfo.password}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Password"
                            minLength={8}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Sign up
                        </button>
                    </form>
                    <div>
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link href="/login" className="text-black hover:text-gray-800 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}