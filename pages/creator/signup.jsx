import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function CreatorSignup() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        role: "creator",
        username: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // First signup API call
            const signupResponse = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            });

            const signupData = await signupResponse.json();
            
            if (!signupResponse.ok) {
                throw new Error(signupData.error || "Signup failed");
            }

            // If signup successful, update profile
            const profileResponse = await fetch("/api/creator/profileupdate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            });

            const profileData = await profileResponse.json();
            
            if (!profileResponse.ok) {
                throw new Error(profileData.error || "Profile update failed");
            }

            // Show success notification
            toast.success("Account created successfully!");
            
            // Store user data
            localStorage.setItem("user", JSON.stringify({
                ...signupData,
                ...profileData
            }));

            // Redirect after short delay
            setTimeout(() => {
                router.push("/creator");
            }, 1000);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Toaster position="bottom-left" richColors />
            
            <div className="h-max text-center py-20">
                <h1 className="text-3xl font-semibold mt-10">
                    Join as a creator
                </h1>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">
                        <input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            value={userInfo.username}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Username"
                            required
                        />
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            value={userInfo.name}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            value={userInfo.email}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Email address"
                            required
                        />
                        <input
                            onChange={handleChange}
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