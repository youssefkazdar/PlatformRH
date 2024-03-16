import CardMembre from '../../components/CardMembre'; 
import ButtonMembre from '../../components/buttonmembre'; 


export default function ProfilMembre({ children }) {
    const handleButtonClick = () => {
      console.log('Button clicked!');
    };
  
 

  return (
    <>

    <div className='flex flex-col gap-6 p-10 justify-center items-center min-h-screen'>
    <CardMembre
        picture="https://via.placeholder.com/150"
        name="SADOT BENOIT"
        pole="Membre pole projet et prospection"
        phoneNumber="26 228 274"
        specialty="1ere génie informatique"
      />
      <div className="flex justify-center mt-2  space-x-6 ">
        <ButtonMembre >Modifier</ButtonMembre> 
        <ButtonMembre >Supprimer</ButtonMembre> 
      </div>
    </div>
    </>
  );
}

