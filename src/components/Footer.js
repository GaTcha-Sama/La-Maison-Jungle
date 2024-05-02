import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if(!inputValue.includes('@')) {
            alert("Attention il n'y a pas d'@ dans votre adresse mail")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                    Pour les passionné.e.s des plantes 🌱​🌵​🌿​
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail</div>
            <input
                    placeholder='Entrez votre mail'
                    onChange={handleInput}
                    onBlur={handleBlur}
                    value={inputValue}
            />
        </footer>
    )
}

export default Footer