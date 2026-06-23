import CreateTodo from '../Components/CreateTodo';
import ReadTodo from '../Components/ReadTodo';

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-start gap-15 p-6 py-0 pb-2 text-gray-200 bg-gray-900 md:p-8 lg:flex-row  justify-between lg:py-18'>
        <CreateTodo />
        <ReadTodo />
    </div>
  )
}

export default Home
