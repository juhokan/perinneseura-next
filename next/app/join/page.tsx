import React from 'react'

const JoinPage = () => {
  return (
    <div className='max-w-4xl m-auto'>
      <h1 className='text-5xl px-6 py-6'>Jäseneksi?</h1>
      <h2 className='text-xl px-6 py-3'>
      Haemme jatkuvasti lisää uusia jäseniä toimintaamme. Jäseneksi valitaan vuosittain noin 3-6 henkilöä, jotka ovat aktiivisia tamperelaisessa teekkariyhteisössä. Jäseneksi voidaan hyväksyä henkilö, joka on valintahetkellä vähintään toisen vuoden Tampereen yliopiston opiskelija. 
      </h2>
      <h2 className='text-xl px-6 py-3'>
      Mikäli kiinnostuksesi PerinneSeuran toimintaa kohtaan heräsi, lähetä sähköpostia osoitteeseen  
      <a className='text-red-600 underline hover:no-underline' href="mailto:careers@perinneseura.fi"> careers@perinneseura.fi</a> saadaksesi lisätietoa ja tarkemmat hakuohjeet!
      </h2>
    </div>
  )
}

export default JoinPage