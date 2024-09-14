import Image from "next/image"
import Feature1 from "../../public/assets/feature-1.svg"
import Feature2 from "../../public/assets/feature-2.svg"
import Feature3 from "../../public/assets/feature-3.svg"
import Check from "../../public/assets/check.svg"
import bluebutton from "../../public/assets/blue-button.svg"

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px]">
        <div className="flex flex-col">
            <h3 className="font-medium text-[#0085FF] ">Sales Monitoring</h3>
            <h1 className="text-[#172026] pt-[12px] text-2xl font-medium">Simplify your sales monitoring</h1>

            <Image src={Feature1} alt="feature1" className="pt-[24px]"/>
            <p className="py-[24px] text-[#36485C]">Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.</p>

            <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2 text-[#36485C]">
                    <span><Image src={Check} alt="checkmark"/></span>
                    <h1>Lorem ipsum dolor sit.</h1>

                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                    <span><Image src={Check} alt="checkmark"/></span>
                    <h1>Lorem ipsum dolor sit.</h1>

                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                    <span><Image src={Check} alt="checkmark"/></span>
                    <h1>Lorem ipsum dolor sit.</h1>

                </li>
                

            </ul>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] cursor-pointer">
                Learn More {" "}
                <span><Image src={bluebutton} alt="bluebutton" /></span>
            </p>
        </div>
        
    </div>
  )
}

export default Features