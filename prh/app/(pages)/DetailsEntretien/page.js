'use client'
import React, { useState } from 'react';
import ProfilePic from '../../components/ProfilePic.jsx'; 
import PrenomInfo from './DetailsEntretienComponents/PrenomInfo.jsx';
import NomInfo from './DetailsEntretienComponents/NomInfo';
import EmailInfo from './DetailsEntretienComponents/EmailInfo';
import PhoneNumberInfo from './DetailsEntretienComponents/PhoneNumberInfo';
import PlaceInfo from './DetailsEntretienComponents/PlaceInfo';
import DateTimeInfo from './DetailsEntretienComponents/DateTimeInfo';
import InterviewerInfo from './DetailsEntretienComponents/InterviewerInfo';
import DurationInfo from './DetailsEntretienComponents/DurationInfo';
import CommentsInfo from './DetailsEntretienComponents/CommentsInfo';
import EvaluationNoteInfo from './DetailsEntretienComponents/EvaluationNoteInfo';

function Page({ children }) {
  const [chosenPole, setChosenPole] = useState("");
  const noteEvaluation="7.7"
  const prenom = "Ahmed"; 
  const nom = "Ahmed";
  const email = "Ahmed@example.com";
  const phoneNumber = "55444333";
  const place = "salle 22";
  const dateTime= "19/10/2024 12pm";
  const interviewer= "Salah";
  const duration= "45 minutes";
  const comments= "Commentaires";

  return ( 
    <div className="flex flex-col items-start justify-start min-h-screen rounded-lg border-2 border-gray p-4 m-5 shadow-lg">
      <h1 className="text-3xl font-bold font-montserrat mt-4 ml-8">Détails de l'entretien :</h1>
      
      <div className="flex flex-row items-start justify-start">
        <div className="flex flex-col items-start justify-start mr-10">
          <div className="mt-8 ml-8">
            <ProfilePic imageUrl={"https://via.placeholder.com/150"} />
          </div>
          <div className="border-2 rounded-lg border-gray-300 p-4 mt-10 ml-8">
            <h2 className="text-xl font-bold font-montserrat mb-2">Pôle choisi:</h2>
            <ul>
              <li>Pôle Projets et Prospections</li>
              <li>Pôle Développement Commercial</li>
              <li>Pôle Marketing</li>
            </ul>
            <div className="mt-4 ">
              <EvaluationNoteInfo  noteEvaluation={noteEvaluation} />
            </div>
          </div>
        </div>
        
        <div className="ml-7 ">
          <div className="grid grid-cols-2 gap-10 mt-5 ml-8 ">
            <div>
              <PrenomInfo prenom={prenom} />
            </div>
            <div>
              <NomInfo nom={nom} />
            </div>
            <div>
              <EmailInfo email={email} />
            </div>
            <div>
              <PhoneNumberInfo phoneNumber={phoneNumber} />
            </div>
          </div>
          <div className='ml-8 mt-4'>
          <PlaceInfo place={place} className="mt-4 " />
          </div>
          <div className='ml-8 mt-4'>
          <DateTimeInfo dateTime={dateTime} className="mt-4" />
          </div>
          <div className='ml-8 mt-4'>
          <InterviewerInfo interviewer={interviewer} className="mt-4" />
          </div>
          <div className='ml-8 mt-4'>
          <DurationInfo duration={duration} className="mt-4" />
          </div>
          <div className='ml-8 mt-4'>
          <CommentsInfo comments={comments} className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
