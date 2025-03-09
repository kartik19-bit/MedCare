import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import RelatedDoctors from '../Components/RelatedDoctors'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointments = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')


  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {

      //setting current date with index
      let current = new Date(today);
      current.setDate(today.getDate() + i);

      //setting end time of the data with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === current.getDate()) {
        current.setHours(current.getHours() > 10 ? current.getHours() + 1 : 10);
        current.setMinutes(current.getMinutes() > 30 ? 30 : 0);
      } else {
        current.setHours(10);
        current.setMinutes(0);
      }

      let timeSlots = [];
      while (current < endTime) {
        let formattedTime = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let day = current.getDate()
        let month = current.getMonth()
        let year = current.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true;

        if (isSlotAvailable) {
          //add slot to array
          timeSlots.push({
            datetime: new Date(current),
            time: formattedTime,
          })
        }



        //increment curent time by 30 minutes
        current.setMinutes(current.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment')
    }

    try {

      const date = docSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth()
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
      if (data.success) {
        toast.success('Appointment booked successfully')
        getDoctorsData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message)

    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])

  return docInfo && (
    <div>

      {/* -----------Doc Details--------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

          {/* -----------Doc Info--------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/* -----------Doc About--------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About
              <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4 '>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>


      {/* -----------Doc Slots--------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='text-lg font-bold'>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>

            ))
          }
        </div>
        <div className='flex item-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        {docInfo.available ? <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light my-6 px-14 py-3 rounded-full'>Book appointment</button>
         :<button disabled={true} className='bg-gray-400 text-white text-sm font-light my-6 px-14 py-3 rounded-full'>Not Available</button>  
        }
        
      </div>

      {/* -----------Related Docs--------- */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointments
