import { useState } from 'react'
import { FiCheck,FiUser,FiMail,FiPhone } from 'react-icons/fi'
import { IoMdLogIn } from 'react-icons/io'
import Human from '../assets/human.png' 
import Arrow from '../assets/arrow.svg' 

const scroll = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  

const SecondScreen =  () => {
    const [ credentials,setCreds ] = useState({ loading:false })
    const [ Role,setRole ] = useState(1)
    const onChange = (e) => { 
        const { id,value } = e.target;
        setCreds({ ...credentials,[id]:value })
    }
    const { email,phone,names,loading } = credentials;
    const handlersubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="secondscreen">
            <section>
                <div className="content">
                    <h1>What to Expect</h1>
                    <ul>
                        <li>
                            <FiCheck size={20} />
                            <span>Join the Club / Family</span>
                        </li>
                        <li>
                            <FiCheck size={20} />
                            <span>Receive a Confirmation Email</span>
                        </li>
                        <li>
                            <FiCheck size={20} />
                            <span>Get all notification About our events</span>
                        </li>
                    </ul>
                </div>
                <div className="first-circle"/>
                <div className="second-circle"/>
                <img src={Human} alt="" />
                <div className="scroll-down" onClick={scroll}>
                    <img src={Arrow} alt="" />
                </div>
            </section>
            <form onSubmit={handlersubmit}>
                <h1>Join The Club</h1>
                <h2>Today</h2>
                <h3>Family</h3>
                <div onClick={()=>setRole(1)} className={`${ Role === 1 ? 'this' : null } chechbox`}>
                    <FiCheck size={20} color={ Role === 1 ? '#0581FE' : 'black' } />
                    <span>Club Fan</span>
                </div>
                <div className='divider'>
                    <section/>
                    <p>OR</p>
                </div>
                <div onClick={()=>setRole(2)} className={`${ Role === 2 ? 'this' : null } chechbox`}>
                    <FiCheck size={20} color={ Role === 2 ? '#0581FE' : 'black' } />
                    <span>Member & Fan</span>
                </div>
                <div className="page-counter">
                    <h4>02</h4>
                    <span/>
                    <h4>03</h4>
                </div>
                <div style={{margin:"1em 0"}}/>
                <div className='input-field'>
                    <div>
                        <FiMail size={20} />
                    </div>
                    <input placeholder="Your Email" value={email} id="email" onChange={onChange} />
                </div>
                <div className='input-field'>
                    <div>
                        <FiUser size={20} />
                    </div>
                    <input placeholder="Your Names" value={names} id="names" onChange={onChange} />
                </div>
                <div className='input-field'>
                    <div>
                        <FiPhone size={20} />
                    </div>
                    <input placeholder="Phone Number" value={phone} id="phone" onChange={onChange} />
                </div>
                <button>
                    {
                        !loading ?
                            <IoMdLogIn size={25} /> :
                            <div className="loader" />
                    }
                </button>
            </form>
        </div>
    )
}
export default SecondScreen;
