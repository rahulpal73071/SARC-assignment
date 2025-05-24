import React from "react";
import './Contact.css';
import Footer from "./Footer";
const contactinfo = [
    {
      "name": "Amrit Raj",
      "position": "Department General Secretary",
      "contacts": {
        "phone": ["7545855055", "8529756127"],
        "email": "dgsec@che.iitb.ac.in"
      },
      "image": "https://cheaiitb.in/Amrit_raj3.jpeg"
    },
    {
      "name": "Steve Austin Samuel",
      "position": "Joint Secretary Events",
      "contacts": {
        "phone": ["9600082807"],
        "email": "steveaustinsamuel@gmail.com"
      },
      "image": "https://cheaiitb.in/steve_austin1.jpg"
    },
    {
      "name": "Pratiksha Kapoor",
      "position": "Joint Secretary Industrial Outreach",
      "contacts": {
        "phone": ["9152929329", "8605661520"],
        "email": "pratiksha.kapoor@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/pratiksha_kapoor1.jpg"
    },
    {
      "name": "Maitreyee Tengshe",
      "position": "Joint Secretary Academic Affairs",
      "contacts": {
        "phone": ["7030909443"],
        "email": "22b0318@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/maitreyee_tengshe1.jpg"
    },
    {
      "name": "Abhinav Kumar",
      "position": "Associate Secretary",
      "contacts": {
        "phone": ["6201395251"],
        "email": "abhinavkrrr@gmail.com"
      },
      "image": "https://cheaiitb.in/abhinav_kumar.jpg"
    },
    {
      "name": "Shubham Kumar",
      "position": "Associate Secretary",
      "contacts": {
        "phone": ["8541873913"],
        "email": "shubhamherry.iitb@gmail.com"
      },
      "image": "https://cheaiitb.in/bholu.jpeg"
    },
    {
      "name": "Ayush Tayal",
      "position": "Social Secretary",
      "contacts": {
        "phone": ["8171548721"],
        "email": "tayalayush03@gmail.com"
      },
      "image": "https://cheaiitb.in/Ayush_Tayal%20.png"
    },
    {
      "name": "Agrim Jain",
      "position": "Sports Secretary",
      "contacts": {
        "phone": ["9045839776"],
        "email": "agrimj2712@gmail.com"
      },
      "image": "https://cheaiitb.in/agrime_jain.jpg"
    },
    {
      "name": "Damodar Pendse",
      "position": "Alumni Secretary",
      "contacts": {
        "phone": ["7350644940"],
        "email": "23b0429@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/damodar.jpg"
    },
    {
      "name": "Shreya Pingle",
      "position": "Editor",
      "contacts": {
        "phone": ["8999965946"],
        "email": "aabha1006@gmail.com"
      },
      "image": "https://cheaiitb.in/shreya_pingle.jpg"
    },
    {
      "name": "Anvitaa Goel",
      "position": "Design Secretary",
      "contacts": {
        "phone": ["8860751667"],
        "email": "goelanvitaa@gmail.com"
      },
      "image": "https://cheaiitb.in/anvitaa_goel.jpg"
    },
    {
      "name": "Sneha Shandilya",
      "position": "Web Secretary",
      "contacts": {
        "phone": ["7665246878"],
        "email": "23b0345@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/sneha_shandilya.jpg"
    },
    {
      "name": "Harsh Jadhav",
      "position": "S1 Class Representative",
      "contacts": {
        "phone": ["8369526409"],
        "email": "23b0301@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/harsh.jpg"
    },
    {
      "name": "Minal Bhojasia",
      "position": "S2 Class Representative",
      "contacts": {
        "phone": ["9113801656"],
        "email": "23b0404@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/minal.jpg"
    },
    {
      "name": "Mohammed Saud Shaikh",
      "position": "M. Tech Representative",
      "contacts": {
        "phone": ["9930247998"],
        "email": "sauddjhs@gmail.com"
      },
      "image": "https://cheaiitb.in/mdsaud.jpg"
    },
    {
      "name": "Prehas Madke",
      "position": "PhD Representative",
      "contacts": {
        "phone": ["9834706856"],
        "email": "23D0125@iitb.ac.in"
      },
      "image": "https://cheaiitb.in/prehas_madke.jpg"
    }
  ]


const Contact = () =>{
    
      
    
    return (
        <>
        <div className="container">
      <h1 className="head1">CONTACT US</h1>
      
        {contactinfo.map((user) => (
            
            <div className="flex_main">

            <div className="content">
                <img src={user.image} alt={user.name} className="img" />
                <h2 className="name">{user.name}</h2>
                <h3 className="position">{user.position}</h3>
                <p className="phone">📞{user.contacts.phone[0]} , {user.contacts.phone[1]}</p>
                <p className="emails">✉️{user.contacts.email}</p>
            </div>
        </div>
        )
    )}
    <Footer/>
      
    </div>
        </>
        
    );
};
export default Contact;