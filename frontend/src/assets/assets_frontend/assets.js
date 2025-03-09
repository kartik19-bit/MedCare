import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]


export const doctors = [
    {
      "_id": "doc1",
      "name": "Dr. Richard James",
      "image": "doc1",
      "speciality": "General physician",
      "degree": "MD",
      "experience": "4 Years",
      "about": "Dr. Richard James has a commitment to holistic care, focusing on preventive healthcare, routine check-ups, and the management of chronic conditions.",
      "fees": 50,
      "address": {
        "line1": "13th Avenue, West End",
        "line2": "Greenwich, London"
      }
    },
    {
      "_id": "doc2",
      "name": "Dr. Emily Larson",
      "image": "doc2",
      "speciality": "Gynecologist",
      "degree": "DGO",
      "experience": "3 Years",
      "about": "Dr. Emily Larson is dedicated to women's health, offering services ranging from pregnancy care to gynecological surgeries, and prioritizing patient comfort and education.",
      "fees": 60,
      "address": {
        "line1": "22nd Street, Kensington",
        "line2": "West London, UK"
      }
    },
    {
      "_id": "doc3",
      "name": "Dr. Sarah Patel",
      "image": "doc3",
      "speciality": "Dermatologist",
      "degree": "MD (Dermatology)",
      "experience": "1 Year",
      "about": "Dr. Sarah Patel specializes in treating skin conditions such as eczema, acne, and dermatological surgeries, with a focus on restoring skin health and appearance.",
      "fees": 30,
      "address": {
        "line1": "15th Road, Chelsea",
        "line2": "London, SW10"
      }
    },
    {
      "_id": "doc4",
      "name": "Dr. Christopher Lee",
      "image": "doc4",
      "speciality": "Pediatrician",
      "degree": "MD (Pediatrics)",
      "experience": "2 Years",
      "about": "Dr. Christopher Lee is committed to the health and wellness of children, offering vaccinations, growth monitoring, and treatment for childhood illnesses.",
      "fees": 40,
      "address": {
        "line1": "9th Avenue, Camden",
        "line2": "North London, UK"
      }
    },
    {
      "_id": "doc5",
      "name": "Dr. Jennifer Garcia",
      "image": "doc5",
      "speciality": "Neurologist",
      "degree": "MD (Neurology)",
      "experience": "4 Years",
      "about": "Dr. Jennifer Garcia focuses on diagnosing and treating neurological disorders like epilepsy, migraines, and stroke prevention, with a compassionate approach to care.",
      "fees": 50,
      "address": {
        "line1": "30th Street, Westminster",
        "line2": "Central London"
      }
    },
    {
      "_id": "doc6",
      "name": "Dr. Andrew Williams",
      "image": "doc6",
      "speciality": "Neurologist",
      "degree": "MBBS",
      "experience": "4 Years",
      "about": "Dr. Andrew Williams is an expert in treating brain and spinal cord disorders, specializing in conditions like multiple sclerosis and Parkinson's disease.",
      "fees": 50,
      "address": {
        "line1": "8th Lane, Soho",
        "line2": "West End, London"
      }
    },
    {
      "_id": "doc7",
      "name": "Dr. Christopher Davis",
      "image": "doc7",
      "speciality": "General physician",
      "degree": "MBBS",
      "experience": "4 Years",
      "about": "Dr. Christopher Davis emphasizes personalized medicine, providing thorough consultations, preventive health advice, and ongoing management of chronic conditions.",
      "fees": 50,
      "address": {
        "line1": "19th Road, Notting Hill",
        "line2": "London, W11"
      }
    },
    {
      "_id": "doc8",
      "name": "Dr. Timothy White",
      "image": "doc8",
      "speciality": "Gynecologist",
      "degree": "DGO",
      "experience": "3 Years",
      "about": "Dr. Timothy White has a deep passion for women's reproductive health, providing expert care in family planning, prenatal care, and menopause management.",
      "fees": 60,
      "address": {
        "line1": "12th Road, Hampstead",
        "line2": "North West London"
      }
    },
    {
      "_id": "doc9",
      "name": "Dr. Ava Mitchell",
      "image": "doc9",
      "speciality": "Dermatologist",
      "degree": "MD (Dermatology)",
      "experience": "1 Year",
      "about": "Dr. Ava Mitchell specializes in treating skin diseases, from acne to skin cancer detection, offering effective treatments and patient education.",
      "fees": 30,
      "address": {
        "line1": "5th Avenue, Shoreditch",
        "line2": "East London, UK"
      }
    },
    {
      "_id": "doc10",
      "name": "Dr. Jeffrey King",
      "image": "doc10",
      "speciality": "Pediatrician",
      "degree": "MD (Pediatrics)",
      "experience": "2 Years",
      "about": "Dr. Jeffrey King focuses on children's health, providing care for illnesses, vaccinations, and developmental milestones to ensure their healthy growth.",
      "fees": 40,
      "address": {
        "line1": "23rd Street, Brixton",
        "line2": "South London"
      }
    },
    {
      "_id": "doc11",
      "name": "Dr. Zoe Kelly",
      "image": "doc11",
      "speciality": "Neurologist",
      "degree": "MD (Neurology)",
      "experience": "4 Years",
      "about": "Dr. Zoe Kelly offers specialized care for neurological conditions like strokes, epilepsy, and chronic migraines, providing effective treatment and management.",
      "fees": 50,
      "address": {
        "line1": "28th Road, Canary Wharf",
        "line2": "London, E14"
      }
    },
    {
      "_id": "doc12",
      "name": "Dr. Patrick Harris",
      "image": "doc12",
      "speciality": "Neurologist",
      "degree": "MBBS",
      "experience": "4 Years",
      "about": "Dr. Patrick Harris is focused on treating brain and nerve disorders, including dementia and nerve pain, with a patient-centered approach to care.",
      "fees": 50,
      "address": {
        "line1": "40th Street, Mayfair",
        "line2": "West London, W1"
      }
    },
    {
      "_id": "doc13",
      "name": "Dr. Chloe Evans",
      "image": "doc13",
      "speciality": "General physician",
      "degree": "MD",
      "experience": "4 Years",
      "about": "Dr. Chloe Evans is dedicated to providing comprehensive health services, focusing on preventive care, health screenings, and managing common medical conditions.",
      "fees": 50,
      "address": {
        "line1": "9th Avenue, Fitzrovia",
        "line2": "Central London"
      }
    },
    {
      "_id": "doc14",
      "name": "Dr. Ryan Martinez",
      "image": "doc14",
      "speciality": "Gynecologist",
      "degree": "DGO",
      "experience": "3 Years",
      "about": "Dr. Ryan Martinez offers expert gynecological care, including routine check-ups, prenatal care, and treatments for menstrual issues and menopause.",
      "fees": 60,
      "address": {
        "line1": "12th Lane, Victoria",
        "line2": "Central London, SW1"
      }
    },
    {
      "_id": "doc15",
      "name": "Dr. Amelia Hill",
      "image": "doc15",
      "speciality": "Dermatologist",
      "degree": "MD (Dermatology)",
      "experience": "1 Year",
      "about": "Dr. Amelia Hill specializes in skin conditions, focusing on early detection and treatment of diseases like psoriasis and eczema.",
      "fees": 30,
      "address": {
        "line1": "5th Avenue, Wimbledon",
        "line2": "South West London"
      }
    }
  ]
  

