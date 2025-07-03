import Image from "next/image";
import logo from "@/public/ikhuku-logo.png";
import item5 from "@/public/item5.jpg";

export default function Signup () {
  return (
    <div className="w-full h-screen font-[family-name:var(--font-josefin-sans)]">
      <div className="w-11/12 lg:w-10/12 h-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
         <main className="h-full overflow-y-auto py-7 hideScroll">
            <div className="w-30 mx-auto mt-10">
              <Image src={logo} alt="Ikhuku Logo" className=" mx-auto" />
            </div>
            <form action="">
               <h1 className="mt-8 text-[#021236] text-3xl font-bold">Reset Password</h1>
              <section className="mt-7 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Password *</label>
                  <input type="text" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Password"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[#021236] font-bold text-md">Confirm Password *</label>
                  <input type="text" className="border-[#f6f6f6] border-2 rounded-md py-1.5 px-2 placeholder-[#787878]" placeholder="Enter Password"/>
                </div>
                <button className="rounded-md py-3 text-center text-white bg-[#491CFF] text-md font-bold">reset password</button>
              </section>
            </form>
         </main>
         <div className="w-full h-full hidden md:block overflow-hidden relative py-7">
          <Image src={item5} alt="" className="w-full h-full object-cover object-top rounded-lg"/>
         </div>
      </div>
    </div>
  )
}


