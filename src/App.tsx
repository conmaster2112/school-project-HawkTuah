import './App.css'

function App() {
  return (
    <div>
      <h1 className='m-10 mb-10 inline text-10xl'>Hawk Tuah</h1>
      <div className='backdrop-blur-3xl backdrop-brightness-50 rounded-xl p-5 m-10'>
        
        <h2 className='text-4xl mt-0 mb-5'>Login</h2>
        <div className='my-1 content-stretch'>
          <p className='my-1 text-left'>Username</p>
          <input className='bg-opacity-30  float-left my-1 bg-gray-950 rounded-sm p-2 active:border-0 placeholder:opacity-40' placeholder='conmaste@seznam.sk'></input>
        </div>
        <div className='my-1 content-stretch'>
          <p className='my-1 text-left'>Password</p>
          <input type="password" className=' bg-opacity-30 float-left my-1 bg-gray-950 rounded-sm p-2 active:border-0' placeholder='*********'></input>
        </div>
        <div className='mt-5'>
        <button className='bg-opacity-60 px-32 bg-gray-900' onClick={()=>window.open('http://x.com', '_blank')}>
          Submit
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
