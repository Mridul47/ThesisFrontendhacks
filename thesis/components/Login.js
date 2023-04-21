import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center space-y-20 pt-48">
            <Image
                src="/images/fhlogo-blur.png"
                width={300}
                height={300}
                objectFit="contain"
            />
            <div>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-red-200 rounded-full shadow-md group"
                        // signin vayechi kata navigate garne tyo callbackUrl le garcha
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            //esma signin garda Access blocked: This app’s request is invalid vanera dekhauncha jun chai google cloud console ma gayera project choose garera
                            //milaune ho
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff7f11] group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sign in with {provider.name}</span>
                            <span className="relative invisible">Sign in with {provider.name}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Login;
