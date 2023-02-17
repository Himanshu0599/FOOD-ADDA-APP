import React from 'react'
import Accordioan from './Accordioan'
import constantHelper from '../constantHelper'
const Help = () => {
  return (
    <div className='py-16 md:py-15 lg:py-24 px-4 bg-black'>
     <section className="max-w-5xl mx-auto text-center"> 
      {constantHelper.map((item)=>{
        return <Accordioan key={item.id} title={item.title} content={item.content} />
      })} 
     </section>
  </div>
  )
}
export default Help