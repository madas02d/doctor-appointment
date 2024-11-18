import { assets } from "../assets/assets"

function Footer() {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* -- Left Section -- */}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis, ut nulla repellendus aliquid ipsum quidem quas aliquam saepe placeat dicta culpa dolorum iusto nobis!
                </p>
            </div>
            {/* -- Center Section -- */}
            <div>
                <p className="text-xl font-medium mb-5">COMPANNY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* -- Right Section -- */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>+4917680820274</li>
                    <li>mb.damascene24@gmail.com</li>
                </ul>
            </div>
        </div>
        <div >
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2024@ Medical-Appointment - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer