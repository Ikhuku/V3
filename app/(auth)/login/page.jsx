import Image from "next/image";
import google from "@/public/google.png";
import apple from "@/public/apple.png";
import facebook from "@/public/facebook.png";
import logo from "@/public/ikhuku-logo.png";
import item2 from "@/public/item2.png";
import Link from "next/link";

export default function Signup () {
  return (
    <div className="w-full h-screen font-[family-name:var(--font-josefin-sans)]">
      <div className="w-11/12 lg:w-10/12 h-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
         <main className="h-full overflow-y-auto py-7 hideScroll">
            <div className="w-30 mx-auto mt-10">
              <Image src={logo} alt="Ikhuku Logo" className=" mx-auto" />
            </div>
            <form action="">
               <h1 className="mt-8 text-[#021236] text-3xl font-bold">Welcome Back!</h1>
              <section className="mt-7 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Email *</label>
                  <input type="email" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Email"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Password *</label>
                  <input type="text" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Password"/>
                </div>
               <Link href="/forgotPassword" className="text-right font-bold">Forgot Password?</Link>
                <button className="rounded-md py-3 text-center text-white bg-[#491CFF] text-md font-bold">Login</button>
              </section>
            </form>
            <div className="flex items-center mt-5 justify-center gap-3 text-[#787878] font-bold">
              <hr className="w-1/4 md:w-1/3 h-[2px] bg-gray-400"/> or Login with <hr className="w-1/4 md:w-1/3 h-[2px] bg-gray-400"/>
            </div>
            <div className="mt-5 flex gap-5 justify-center items-center">
               <button className="cursor-pointer rounded-lg bg-[#f5f5f5] text-[#021236] font-semibold py-3 px-5 text-center">
                  <Image src={google} alt="Google" className="size-5" />
               </button>
               <button className="cursor-pointer rounded-lg bg-[#f5f5f5] text-[#021236] font-semibold py-3 px-5 text-center">
                <Image src={apple} alt="Apple" className="size-5" />
               </button>
               <button className="cursor-pointer rounded-lg bg-[#f5f5f5] text-[#021236] font-semibold py-3 px-5 text-center">
                <Image src={facebook} alt="Facebook" className="size-5" />
               </button>
            </div>
            <p className="text-[#021236] text-center mt-4 font-bold">Dont have an account? <Link href="/signup" className="underline">Sign up</Link> </p>
         </main>
         <div className="w-full h-full hidden md:block overflow-hidden relative py-7">
          <Image src={item2} alt="" className="w-full h-full object-cover object-top rounded-lg"/>
         </div>
      </div>
    </div>
  )
}


