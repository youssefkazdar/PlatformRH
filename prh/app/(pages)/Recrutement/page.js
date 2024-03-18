import AvailabilityTable from '../../components/AvailabilityTable';

const Home = () => {
  return (
    <div className="flex flex-col h-screen p-4 gap-6">
      <h1 className="text-2xl font-mont font-bold">Disponibilité du recruteur</h1>
       <AvailabilityTable/>
    </div>
  );
};

export default Home;

