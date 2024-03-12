import Sidebar from './components/SIdebar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='min-h-screen w-full max-w-7xl bg-stone-500'>
      <Sidebar />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex">
          <div className="container mx-auto py-12">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App