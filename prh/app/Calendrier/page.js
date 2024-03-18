import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import CustomInput from "../components/DateInput";
import DateInput from "../components/DateInput";
import TableWithRows from "../components/TabInput";
const Calendrier = () => {
    return(
       < div>
       < div class="flex justify-start items-start mt-10 ml-96  font-bold mb-16 ">
        
          
     
      
        
        
 <span class="border-b-2 font-bold  ">
 <div className="grid grid-cols-2 gap-60  ">

 <div className='flex flex-col gap-4 '>
            


            
                 <input type="date" className='bg-[#003057] px-8 py-4 text-[#FFFFFF] ' />
                 
                
            

        </div>
       <DateInput defaultValue="State: " placeholder="State: DONE" type="text  " />

                
        
       
    
       </div>
       </span>
       
       

      


</div>
<div class="flex justify-between items-center">


<p class=" text-left text-4xl font-bold text-[#2F5B96] ml-60">Assemble Generale</p>

<input type="text" placeholder="Location :" class=" flex border w-96 border-gray-400 px-12 py-6 mr-96 rounded-lg focus:outline-none focus:border-blue-500">
</input>





</div>

<div class="flex justify-center items-center h-screen">
  <div class="w-full max-w-4xl mb-60 mr-40">
    <div class="max-h-[500px] overflow-y-auto">
      <TableWithRows numRows={20} />
    </div>
  </div>
</div>
 
  

</div>














    )

};
export default Calendrier;