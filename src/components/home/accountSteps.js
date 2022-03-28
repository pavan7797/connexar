import { useEffect, useState } from 'react';

import './styles.css';

import form from '../../assets/form.svg';
import address from '../../assets/address.svg';
import done from '../../assets/done.svg';

export const AccountSteps = () => {
  const [step, setStep] = useState(1);

  useEffect(()=>{
    setTimeout(() => {
        setStep(step === 3 ? 1 : step + 1)
      }, 3000);
  },[step])

  const steps = (value) => {
    return (
      <>
        {(step === value) ? (
          <div className='triangle tposition'><p style={{ right: `${-6 + (-(value * 2))}px` }}>{value}</p></div>
        ) : (
          <h1 onClick={() => setStep(value)}>{value}</h1>
        )}
      </>
    )
  }

  return (
    <div className='accRoot'>

      {/* Banner */}
      <div className='container  d-none d-md-block'>
        <div className='container accbanner'>
          {(step === 1) ? (
            <>
              <img src={form} width="100px" />
              <p>Fill out the Forms {`&`} <br /> Confirm Your Email</p>
            </>
          ) : (step === 2) ? (
            <>
              <img src={address} width="100px" />
              <p>Upload Your Address <br /> Proof and ID Proof</p>
            </>
          ) : (
            <>
              <img src={done} width="100px" />
              <p>Your Trading Account will be <br /> Created {`&`} Happy Trading</p>
            </>
          )}
        </div>
      </div>

      {/* Bar */}
      <div className='d-block d-md-none px-3 pb-3'>
        <div className='d-flex align-items-center py-2'>
          <h4 className='font-weight-bold mb-0 mr-2'>1</h4>
          <span className='d-inline-block text-nowrap mr-2'>--</span>
          <p className='mb-0 flex-grow-1'>Fill out the Forms {`&`}  Confirm Your Email</p>
          <img src={form} width="40" className='mr-2' />
        </div>
        <div className='d-flex align-items-center py-2'>
          <h4 className='font-weight-bold mb-0 mr-2'>2</h4>
          <span className='d-inline-block text-nowrap  mr-2'>--</span>
          <p className='mb-0 flex-grow-1'>Upload Your Address  Proof and ID Proof</p>
          <img src={address} width="40" className='mr-2' />
        </div>
        <div className='d-flex align-items-center py-2'>
          <h4 className='font-weight-bold mb-0 mr-2'>3</h4>
          <span className='d-inline-block text-nowrap  mr-2'>--</span>
          <p className='mb-0 flex-grow-1'>Your Trading Account will be Created {`&`} Happy Trading</p>
          <img src={done} width="40" className='mr-2' />
        </div>
      </div>
      <div className="barRoot ">

        <div className="container ">

          <div className='container barContainer align-items-center'>
            <div className='barHead'>
              <h1>3</h1>
              <h4>Minutes <br />{`&`}<br /> Steps</h4>
            </div>
            <button className="btn crt_n ml-auto d-flex d-md-none">
              Join now{" "}
            </button>
            <div className='barSteps d-none d-md-flex'>
              {steps(1)}

              <div className='horizontal d-none d-md-flex'></div>

              {steps(2)}
              <div className='horizontal d-none d-md-flex'></div>

              {steps(3)}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}