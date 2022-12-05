import React from 'react'
import logoNewsan from '../assets/newsan_logo.png'
function Header() {
  return (
    <header className="w-screen flex justify-center aling-items-center mt-10">
      <nav className="flex justify-between align-items-center gap-80">
        <img src={ logoNewsan } alt="Logo Newsan" className="h-24"/>
        <table className="text-4xl" >
          <tbody>
            <tr>
              <th>-</th>
              <td className="font-bold">Buscando...</td>
            </tr>
            <tr>
              <th>-</th>
              <td className="font-bold">Buscando...</td>
            </tr>
          </tbody>
        </table>
      </nav>
    </header>
  )
}

export default Header