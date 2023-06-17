import React from "react";
import Footers from "../asset/footer.jpg"
import Fot from "../asset/fot.jpg"
import Fot2 from "../asset/fot2.jpg"


const Footer =()=>{
    return(
<>
<div className="bg-[#0A2640]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] mx-auto gap-20 pt-10 md:pb-40 pb-10" >
     <div>
        <img alt="nothing" src={Footers} />
        <p className="mt-5 font-[700] text-[24px] text-white">
        Fahrgemeinschaften
        </p>
        <p className="mt-5 font-[500] text-[20px] text-white">
        Fahrt gemeinsam zur Hochschule und schont die Umwelt.
        </p>
     </div>
     <div>
        <img alt="nothing" src={Fot} />
        <p className="mt-5 font-[700] text-[24px] text-white">
        Fahrgemeinschaften
        </p>
        <p className="mt-5 font-[500] text-[20px] text-white">
        Fahrt gemeinsam zur Hochschule und schont die Umwelt.
        </p>
     </div>

     <div>
        <img alt="nothing" src={Fot2} />
        <p className="mt-5 font-[700] text-[24px] text-white">
        Fahrgemeinschaften
        </p>
        <p className="mt-5 font-[500] text-[20px] text-white">
        Fahrt gemeinsam zur Hochschule und schont die Umwelt.
        </p>
     </div>
</div>
</div>
</>
    );
}
export default Footer;