import './App.css'

function App() {
  return (
    <div>
      <h1 className='m-10 mb-10 inline text-10xl'>Hawk Tuah</h1>
      <div className='backdrop-blur-3xl backdrop-brightness-50 rounded-xl p-5 m-10 flex-col'>
        
        <h2 className='text-4xl m-2'>Login</h2>
        <div className='inline m-1'>
          <p1 className='m-2 content-center'>Username</p1>
          <input className='bg-opacity-30 m-2 bg-gray-950 rounded-sm p-2 active:border-0 placeholder:opacity-40' placeholder='conmaste@seznam.sk'></input>
        </div>
        <br></br>
        <div className='inline m-1'>
          <p1 className='m-2 content-center'>Password</p1>
          <input className='bg-opacity-30 m-2 bg-gray-950 rounded-sm p-2 active:border-0' placeholder='*********'></input>
        </div>
      </div>
    </div>
  )
}

export default App
