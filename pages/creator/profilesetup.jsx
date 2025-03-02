import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { Camera, Upload } from "lucide-react";
import { UploadButton } from "@/utils/uploadthing";


// Mock UploadButton component since we don't have the actual uploadthing library
// const UploadButton = ({ endpoint, className, onClientUploadComplete, onUploadError }) => {
//   // const handleUpload = () => {
//   //   // Simulate a successful upload with a random image URL
//   //   const randomId = Math.floor(Math.random() * 1000);
//   //   const mockImageUrl = `https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`;
    
//   //   onClientUploadComplete([{ fileUrl: mockImageUrl }]);
//   // };

//   return (
//     <button
//       onClick={handleUpload}
//       className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-2 ${className}`}
//     >
//       <Upload size={16} />
//       Upload
//     </button>
//   );
// };


export default function CreatorProfile() {
  const router = useRouter();
  
  const [userinfo, setUserinfo] = useState({
    name: "",
    username: "",
    email: "",
    role: "creator",
    profileImage: "",
    bannerImage: "",
    phone: "",
    city: "",
    state: "",
    category: "",
    description: "",
    platforms: [
      {
        platform: "instagram",
        followers: "",
        profile: "",
      },
      {
        platform: "youtube",
        followers: "",
        profile: ""
      },
      {
        platform: "facebook",
        followers: "",
        profile: ""
      },
    ],
    packages: [
      {
        platform: "",
        followers: "",
        price: "",
        title: "",
        description: "",
      },
    ],
  });

 useEffect(() => {
  //   // Mock fetching user data
  //   const mockUser = {
  //     name: "John Doe",
  //     username: "johndoe",
  //     email: "john@example.com",
  //     role: "creator",
  //     profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  //     bannerImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     phone: "123-456-7890",
  //     city: "New York",
  //     state: "NY",
  //     category: "fashion",
  //     description: "Fashion creator with a passion for sustainable clothing",
  //     platforms: [
  //       {
  //         platform: "instagram",
  //         followers: "1-5k",
  //         profile: "@johndoe_fashion",
  //       },
  //       {
  //         platform: "youtube",
  //         followers: "0-1k",
  //         profile: "John Doe Fashion"
  //       },
  //       {
  //         platform: "facebook",
  //         followers: "5-10k",
  //         profile: "John Doe"
  //       },
  //     ],
  //     packages: [
  //       {
  //         platform: "instagram",
  //         price: "500",
  //         title: "Instagram Post",
  //         description: "One sponsored post on my Instagram feed",
  //       },
  //     ],
  //   };

   
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetch("/api/creator/getcreator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.JWT_SECRET}`,
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUserinfo(data.creator);
        });
    }
  }, []);



  const handleProfileImage = async (email, image) => {
    // // Mock API call
    // toast.promise(
    //   new Promise(resolve => setTimeout(resolve, 1000)),
    //   {
    //     loading: 'Updating profile image...',
    //     success: 'Profile image updated successfully!',
    //     error: 'Failed to update profile image',
    //   }
    // );

   
    await fetch("/api/creator/profileImageupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.JWT_SECRET}`,
      },
      body: JSON.stringify({
        email: email,
        profileImage: image,
      }),
    });
  };

  const handleBannerImage = async (email, image) => {
    // Mock API call
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 1000)),
      {
        loading: 'Updating banner image...',
        success: 'Banner image updated successfully!',
        error: 'Failed to update banner image',
      }
    );

   
    await fetch("/api/creator/bannerimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.JWT_SECRET}`,
      },
      body: JSON.stringify({
        email: email,
        bannerImage: image,
      }),
    });
  };

  const handlePersonalInfo = async (e) => {
    e.preventDefault();
    
    toast.promise(
      new Promise(resolve => setTimeout(() => {
        resolve(true);
        // Navigate after successful update
        setTimeout(() => router.push("/creator"), 1000);
      }, 1500)),
      {
        loading: 'Saving personal information...',
        success: 'Personal information saved successfully!',
        error: 'Failed to save personal information',
      }
    );

    await fetch("/api/creator/profileupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.JWT_SECRET}`,
      },
      body: JSON.stringify({
        email: userinfo.email,
        name: userinfo.name,
        phone: userinfo.phone,
        city: userinfo.city,
        state: userinfo.state
      }),
    });
  };

  const handleContentInfo = async (e) => {
    e.preventDefault();
    
    // toast.promise(
    //   new Promise(resolve => setTimeout(resolve, 1500)),
    //   {
    //     loading: 'Saving content information...',
    //     success: 'Content information saved successfully!',
    //     error: 'Failed to save content information',
    //   }
    // );

   
    await fetch("/api/creator/addcontentinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.JWT_SECRET}`,
      },
      body: JSON.stringify({
        email: userinfo.email,
        category: userinfo.category,
        description: userinfo.description,
        platforms: userinfo.platforms
      }),
    });
  };

  const handlePackagesInfo = async (e) => {
    e.preventDefault();
    
    // toast.promise(
    //   new Promise(resolve => setTimeout(resolve, 1500)),
    //   {
    //     loading: 'Saving package information...',
    //     success: 'Package information saved successfully!',
    //     error: 'Failed to save package information',
    //   }
    // );

   
    await fetch("/api/creator/addpackages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.JWT_SECRET}`,
      },
      body: JSON.stringify({
        email: userinfo.email,
        packages: userinfo.packages
      }),
    });
  };

  const updatePlatform = (index, field, value) => {
    const updatedPlatforms = [...userinfo.platforms];
    updatedPlatforms[index] = {
      ...updatedPlatforms[index],
      [field]: value
    };
    setUserinfo({
      ...userinfo,
      platforms: updatedPlatforms
    });
  };

  const updatePackage = (index, field, value) => {
    const updatedPackages = [...userinfo.packages];
    updatedPackages[index] = {
      ...updatedPackages[index],
      [field]: value
    };
    setUserinfo({
      ...userinfo,
      packages: updatedPackages
    });
  };

  const addPackage = () => {
    setUserinfo({
      ...userinfo,
      packages: [
        ...userinfo.packages,
        {
          platform: "",
          price: "",
          title: "",
          description: ""
        }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Creator Profile</h1>
        
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Your basic profile information that will be visible to brands.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  {/* Banner Image */}
                  {/* <div className="mb-6">
                    <div className="relative w-full h-40 bg-gray-200 rounded-md overflow-hidden">
                      {userinfo?.bannerImage ? (
                        <img 
                          src={userinfo?.bannerImage} 
                          alt="Banner" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-400">No banner image</span>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3">
                        <UploadButton
                          endpoint="imageUploader"
                          className="!px-3 !py-2 text-sm"
                          onClientUploadComplete={(res) => {
                            handleBannerImage(userinfo.email, res[0].fileUrl);
                            setUserinfo({ ...userinfo, bannerImage: res[0].fileUrl });
                          }}
                          onUploadError={(error) => {
                            toast.error(`Upload error: ${error.message}`);
                          }}
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* Profile Image */}
                  {/* <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-md">
                        {userinfo?.profileImage ? (
                          <img 
                            src={userinfo?.profileImage} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Camera className="text-gray-400" size={32} />
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 right-0">
                        <UploadButton
                          endpoint="imageUploader"
                          className="!p-2 !rounded-full"
                          onClientUploadComplete={(res) => {
                            handleProfileImage(userinfo.email, res[0].fileUrl);
                            setUserinfo({ ...userinfo, profileImage: res[0].fileUrl });
                          }}
                          onUploadError={(error) => {
                            toast.error(`Upload error: ${error.message}`);
                          }}
                        />
                      </div>
                    </div>
                  </div> */}

                  <form onSubmit={handlePersonalInfo}>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={userinfo?.username}
                          disabled
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={userinfo?.name}
                          onChange={(e) => setUserinfo({...userinfo, name: e.target.value})}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={userinfo?.email}
                          disabled
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={userinfo?.phone}
                          onChange={(e) => setUserinfo({...userinfo, phone: e.target.value})}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={userinfo?.city}
                          onChange={(e) => setUserinfo({...userinfo, city: e.target.value})}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={userinfo?.state}
                          onChange={(e) => setUserinfo({...userinfo, state: e.target.value})}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Select state</option>
                          <option value="AN">Andaman and Nicobar Islands</option>
                          <option value="AP">Andhra Pradesh</option>
                          <option value="AR">Arunachal Pradesh</option>
                          <option value="AS">Assam</option>
                          <option value="BR">Bihar</option>
                          <option value="CH">Chandigarh</option>
                          <option value="CG">Chhattisgarh</option>
                          <option value="DL">Delhi</option>
                          <option value="GA">Goa</option>
                          <option value="GJ">Gujarat</option>
                          <option value="HR">Haryana</option>
                          <option value="HP">Himachal Pradesh</option>
                          <option value="JK">Jammu and Kashmir</option>
                          <option value="JH">Jharkhand</option>
                          <option value="KA">Karnataka</option>
                          <option value="KL">Kerala</option>
                          <option value="LA">Ladakh</option>
                          <option value="MP">Madhya Pradesh</option>
                          <option value="MH">Maharashtra</option>
                          <option value="MN">Manipur</option>
                          <option value="ML">Meghalaya</option>
                          <option value="MZ">Mizoram</option>
                          <option value="NL">Nagaland</option>
                          <option value="OR">Odisha</option>
                          <option value="PY">Puducherry</option>
                          <option value="PB">Punjab</option>
                          <option value="RJ">Rajasthan</option>
                          <option value="SK">Sikkim</option>
                          <option value="TN">Tamil Nadu</option>
                          <option value="TS">Telangana</option>
                          <option value="TR">Tripura</option>
                          <option value="UP">Uttar Pradesh</option>
                          <option value="UK">Uttarakhand</option>
                          <option value="WB">West Bengal</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save Personal Info
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Content Information */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Content Information</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Details about your content and social media presence.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={handleContentInfo}>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                          Content Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={userinfo?.category}
                          onChange={(e) => setUserinfo({...userinfo, category: e.target.value})}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Select category</option>
                          <option value="fashion">Fashion</option>
                          <option value="fitness">Fitness</option>
                          <option value="comedy">Comedy</option>
                          <option value="lifestyle">Lifestyle</option>
                          <option value="technology">Technology</option>
                          <option value="food">Food</option>
                          <option value="travel">Travel</option>
                          <option value="beauty">Beauty</option>
                          <option value="gaming">Gaming</option>
                          <option value="education">Education</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Bio / Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={3}
                          value={userinfo?.description}
                          onChange={(e) => setUserinfo({...userinfo, description: e.target.value})}
                          className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Tell brands about yourself and your content..."
                        />
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Social Media Platforms
                        </label>
                        
                        {userinfo?.platforms.map((platform, index) => (
                          <div key={index} className="grid grid-cols-12 gap-4 mb-4">
                            <div className="col-span-4">
                              <input
                                type="text"
                                value={platform?.platform}
                                disabled
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-4">
                              <input
                                type="text"
                                placeholder="Profile handle/name"
                                value={platform?.profile}
                                onChange={(e) => updatePlatform(index, 'profile', e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-4">
                              <select
                                value={platform.followers}
                                onChange={(e) => updatePlatform(index, 'followers', e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="">Select follower count</option>
                                <option value="0-1k">0-1k followers</option>
                                <option value="1-5k">1-5k followers</option>
                                <option value="5-10k">5-10k followers</option>
                                <option value="10-50k">10-50k followers</option>
                                <option value="50-100k">50-100k followers</option>
                                <option value="100k+">100k+ followers</option>
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save Content Info
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Packages</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Define the packages you offer to brands.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={handlePackagesInfo}>
                    <div className="space-y-6">
                      {userinfo?.packages.map((pkg, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Package Title
                              </label>
                              <input
                                type="text"
                                value={pkg?.title}
                                onChange={(e) => updatePackage(index, 'title', e.target.value)}
                                placeholder="e.g., Instagram Story Package"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Platform
                              </label>
                              <select
                                value={pkg?.platform}
                                onChange={(e) => updatePackage(index, 'platform', e.target.value)}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="">Select platform</option>
                                <option value="instagram">Instagram</option>
                                <option value="youtube">YouTube</option>
                                <option value="tiktok">TikTok</option>
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter</option>
                                <option value="linkedin">LinkedIn</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Price (USD)
                              </label>
                              <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input
                                  type="text"
                                  value={pkg.price}
                                  onChange={(e) => updatePackage(index, 'price', e.target.value)}
                                  placeholder="0.00"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="col-span-6">
                              <label className="block text-sm font-medium text-gray-700">
                                Package Description
                              </label>
                              <textarea
                                rows={3}
                                value={pkg?.description}
                                onChange={(e) => updatePackage(index, 'description', e.target.value)}
                                placeholder="Describe what's included in this package..."
                                className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addPackage}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        + Add Another Package
                      </button>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save Packages
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'sonner';
// import { Toaster } from '@/components/ui/sonner';

// export default function CreatorProfileSetup() {
//   const router = useRouter();
//   const [userinfo, setUserinfo] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "creator",
//     profileImage: "",
//     bannerImage: "",
//     phone: "",
//     city: "",
//     state: "",
//     category: "",
//     description: "",
//     platforms: [
//       { platform: "instagram", followers: "", profile: "" },
//       { platform: "youtube", followers: "", profile: "" },
//       { platform: "facebook", followers: "", profile: "" },
//     ],
//     packages: [{ platform: "", followers: "", price: "", title: "", description: "" }],
//   });

//   useEffect(() => {
//     const fetchCreatorData = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (!user?.email) return;

//         const response = await fetch("/api/creator/getcreator", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email: user.email }),
//         });

//         if (!response.ok) throw new Error('Failed to fetch creator data');
        
//         const data = await response.json();
//         setUserinfo(data.creator);
        
//       } catch (error) {
//         toast.error(error.message);
//       }
//     };

//     fetchCreatorData();
//   }, []);

//   const handleImageUpload = async (type, image) => {
//     try {
//       toast.loading(`Uploading ${type} image...`);
      
//       const user = JSON.parse(localStorage.getItem("user"));
//       const endpoint = type === 'profile' 
//         ? "/api/creator/profileImageupdate" 
//         : "/api/creator/bannerimage";

//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: user.email,
//           [type === 'profile' ? 'profileImage' : 'bannerImage']: image
//         }),
//       });

//       if (!response.ok) throw new Error(`Failed to update ${type} image`);
      
//       toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} image updated!`);
//       const data = await response.json();
//       setUserinfo(prev => ({ ...prev, [type + 'Image']: data.imageUrl }));
      
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleSubmit = async (type, e) => {
//     e.preventDefault();
    
//     try {
//       toast.loading(`Saving ${type} information...`);
      
//       const endpoints = {
//         personal: "/api/creator/profileupdate",
//         content: "/api/creator/addcontentinfo",
//         packages: "/api/creator/addpackages"
//       };

//       const payload = {
//         personal: {
//           email: userinfo.email,
//           name: userinfo.name,
//           phone: userinfo.phone,
//           city: userinfo.city,
//           state: userinfo.state
//         },
//         content: {
//           email: userinfo.email,
//           category: userinfo.category,
//           description: userinfo.description,
//           platforms: userinfo.platforms
//         },
//         packages: {
//           email: userinfo.email,
//           packages: userinfo.packages
//         }
//       }[type];

//       const response = await fetch(endpoints[type], {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error(`Failed to save ${type} info`);
      
//       toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} information saved!`);
//       if (type === 'personal') setTimeout(() => router.push("/creator"), 1000);
      
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const updateNestedState = (type, index, field, value) => {
//     const key = type === 'platform' ? 'platforms' : 'packages';
//     const updated = userinfo[key].map((item, i) => 
//       i === index ? { ...item, [field]: value } : item
//     );
    
//     setUserinfo(prev => ({ ...prev, [key]: updated }));
//   };

//   const addPackage = () => {
//     setUserinfo(prev => ({
//       ...prev,
//       packages: [...prev.packages, { platform: "", price: "", title: "", description: "" }]
//     }));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <Toaster position="top-center" richColors />
      
//       {/* Profile Image Upload */}
//       <div className="mb-8">
//         <input 
//           type="file" 
//           onChange={(e) => handleImageUpload('profile', e.target.files[0])}
//         />
//       </div>

//       {/* Personal Information Form */}
//       <form onSubmit={(e) => handleSubmit('personal', e)}>
//         {/* Add your form fields here */}
//         <button type="submit" className="btn-primary">
//           Save Personal Info
//         </button>
//       </form>

//       {/* Content Information Form */}
//       <form onSubmit={(e) => handleSubmit('content', e)}>
//         {userinfo.platforms.map((platform, index) => (
//           <div key={index} className="mb-4">
//             <input
//               value={platform.profile}
//               onChange={(e) => updateNestedState('platform', index, 'profile', e.target.value)}
//               className="input-field"
//             />
//           </div>
//         ))}
//         <button type="submit" className="btn-primary">
//           Save Content Info
//         </button>
//       </form>

//       {/* Packages Form */}
//       <form onSubmit={(e) => handleSubmit('packages', e)}>
//         {userinfo.packages.map((pkg, index) => (
//           <div key={index} className="mb-4">
//             <input
//               value={pkg.title}
//               onChange={(e) => updateNestedState('package', index, 'title', e.target.value)}
//               className="input-field"
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addPackage} className="btn-secondary">
//           Add Package
//         </button>
//         <button type="submit" className="btn-primary">
//           Save Packages
//         </button>
//       </form>
//     </div>
//   );
// }