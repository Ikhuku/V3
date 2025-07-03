import Image from "next/image";
import google from "@/public/google.png";
import apple from "@/public/apple.png";
import facebook from "@/public/facebook.png";
import logo from "@/public/ikhuku-logo.png";
import item1 from "@/public/item1.jpg";
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
              <div className="mt-8">
                <h1 className="text-[#021236] text-3xl font-bold">Sign up</h1>
                <p className="text-[#787878] mt-1 font-bold text-md">Fill out your information below or register with your social accounts</p>
              </div>
              <section className="mt-7 flex flex-col gap-6">
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label htmlFor="" className="text-[#021236] font-bold text-md">First Name *</label>
                    <input type="text" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter First Name"/>
                  </div>
                  <div className="flex flex-col gap-1 w-1/2">
                    <label htmlFor="" className="text-[#021236] font-bold text-md">Last Name *</label>
                    <input type="text" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Last Name"/>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Email *</label>
                  <input type="email" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Email"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Password *</label>
                  <input type="text" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Password"/>
                </div>
                <div className="flex gap-1 items-center">
                  <input type="checkbox" name="" id="" className="accent-[#021236] size-4" />
                  <label htmlFor="" className="text-[#021236] font-bold">
                    Agree with 
                    <Link href="#" className="underline">Terms and Conditions</Link> and 
                    <Link href="#" className="underline"> Privacy Policy </Link> 
                  </label>
                </div>
                <button className="rounded-md py-3 text-center text-white bg-[#491CFF] text-md font-bold">Sign Up</button>
              </section>
            </form>
            <div className="flex items-center mt-5 justify-center gap-3 text-[#787878] font-bold">
              <hr className="w-1/4 md:w-1/3 h-[2px] bg-gray-400"/> or Sign Up with <hr className="w-1/4 md:w-1/3 h-[2px] bg-gray-400"/>
            </div>
            <div className="mt-5 flex flex-col gap-4 items-center">
              <button className="w-full cursor-pointer rounded-lg bg-[#f5f5f5] text-[#021236] font-semibold py-3 text-center">
                <Image src={google} alt="Google" className="inline-block mr-2 size-5" />
                 Sign Up with Google</button>
              <button className="w-full cursor-pointer rounded-lg bg-[#f5f5f5] text-[#021236] font-semibold py-3 text-center">
                <Image src={apple} alt="Apple" className="inline-block mr-2 w-5 h-6" />
                Sign Up with apple</button>
              <button className="w-full cursor-pointer rounded-lg bg-[#f5f5f5] text-[#021236] font-semibold py-3 text-center">
                <Image src={facebook} alt="Facebook" className="inline-block mr-2 w-4 h-5" />
                Sign Up with Facebook</button>
            </div>
            <p className="text-[#021236] text-center mt-4 font-bold">Already have an account? <Link href="/login" className="underline">Sign in</Link> </p>
         </main>
         <div className="w-full h-full hidden md:block overflow-hidden relative py-7">
          <Image src={item1} alt="" className="w-full h-full object-cover rounded-lg"/>
         </div>
      </div>
    </div>
  )
}


