import ifhLolicon from './assets/IFHLOL.png';
import { useNavigate } from 'react-router-dom';
import { helpers } from './helpers/dbHelpers';
const FrasesComponent = () => {
  const navigate = useNavigate();

  const id = helpers.getRandomId();

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10' style={{ marginTop: '-20%' }}>
      <img onClick={() => navigate(`/pqpeuodeiolol/${id}`)} className='cursor-pointer' width={400} src={ifhLolicon} alt="Icone não permitido League of Legends" />
      <p className='text-lg'>Clique o Ícone para receber uma opinião sincera.</p>
    </div>
  );
};

export default FrasesComponent;
