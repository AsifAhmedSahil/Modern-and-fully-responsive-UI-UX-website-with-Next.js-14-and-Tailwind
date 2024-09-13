import Image from "next/image"
import logo from "../../public/assets/Logo.svg"
import user from "../../public/assets/User.svg"
import menu from "../../public/assets/Menu.svg"


function Navbar() {
  const navLinks = [
    {name:"Feature"},
    {name:"Pricing"},
    {name:"Enterprize"},
    {name:"Career"},
  ]
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
        <div className="flex items-center">
            <Image src={logo} alt="Logo"/>

            <div className="hidden lg:flex pl-[74px] gap-x-[56px] cursor-pointer">
              {navLinks.map((item,index)=>(
                <p className="font-medium text-[#36485C]" key={index}>{item.name}</p>
              ))}
            </div>
        </div>
        <div className="flex items-center gap-x-5">
          <p className="text-[#36485C] font-medium hidden lg:block pr-[56px] cursor-pointer">Open an Account</p>
            <div className="flex items-center gap-x-3">
                <Image alt="user" src={user}/>
                <span className="text-[#36485C] font-medium hidden lg:block">Sign In</span>
            </div>
            <Image alt="menu" src={menu} className="lg:hidden md:hidden"/>
        </div>

    </nav>
  )
}

export default Navbar
