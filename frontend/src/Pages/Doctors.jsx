import React from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { useState , useContext , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
 
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const [showFilter , setShowFilter] = useState(false);

  const navigate = useNavigate();

  const applyFilter = () => {
        if(speciality){
          setFilterDoc(doctors.filter((item) => item.speciality.toLowerCase().replace(/\s+/g, '') === speciality.toLowerCase()));
        }
        else{
          setFilterDoc(doctors)
        }
  }

  useEffect(() => {
    applyFilter();
  },[doctors,speciality])
  return (
    <div>
       <p className='text-gray-600'>Browse through the doctors specialist.</p>
       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ' '}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
        <p onClick={() => speciality === 'generalphysician' ? navigate('/doctors') : navigate('/doctors/generalphysician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "generalphysician" ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatrician" ? "bg-indigo-100 text-black" : ""}`}>Pediatrician</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroentrologist' ? navigate('/doctors') : navigate('/doctors/Gastroentrologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroentrologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroentrologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6 '>
          {filterDoc.map((item,index) =>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)}className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                        <p className={`w-2 h-2 ${item.available ? 'bg-green-500 ' : 'bg-gray-500' } rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))}
        </div>
       </div>
    </div>
  )
}

export default Doctors
