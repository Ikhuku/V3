import Image from "next/image";
import logo from "@/public/ikhuku-logo.png";
import item4 from "@/public/item4.png";
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
               <h1 className="mt-8 text-[#021236] text-3xl font-bold">OTP</h1>
               <p className="text-[#787878] mt-1 font-bold text-md">We sent the code to USER EMAIL</p>
               <section className="mt-7 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Code *</label>
                  <input type="email" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Code"/>
                </div>
                <button className="rounded-md py-3 text-center text-white bg-[#491CFF] text-md font-bold">Send</button>
              </section>
            </form>
            <p className="text-[#021236] text-center mt-4 font-bold">Didnt receive code? <Link href="/signup" className="underline">Click to resend</Link> </p>
         </main>
         <div className="w-full h-full hidden md:block overflow-hidden relative py-7">
          <Image src={item4} alt="" className="w-full h-full object-cover object-top rounded-lg"/>
         </div>
      </div>
    </div>
  )
}


