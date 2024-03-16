
import CardMembre from '@/app/components/CardMembre'; 
import ButtonMembre from '@/app/components/ButtonMembre'; 

function ProfilMembre({ children }) {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="layout">
      <CardMembre
        picture="https://via.placeholder.com/150"
        name="SADOT BENOIT"
        pole="Membre pole projet et prospection"
        phoneNumber="26 228 274"
        specialty="1ere génie informatique"
      />
      <div className="flex justify-center mt-2 mr-auto space-x-6 ">
        <ButtonMembre onClick={handleButtonClick}>Modifier</ButtonMembre> 
        <ButtonMembre onClick={handleButtonClick}>Supprimer</ButtonMembre> 
      </div>
    </div>
  );
}

export default ProfilMembre;







