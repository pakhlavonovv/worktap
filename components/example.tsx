import React from 'react'
import Image from 'next/image'
import Usluga from '../public/usluga.svg'
import Money from '../public/money.svg'
import Document from '../public/document.svg'

const Example = () => {
  return (
    <div className='container'>
        <div className="flex flex-col gap-2">
        <h1 className='text-[25px] font-bold'>Как решать задачи на WorkTap?</h1>
        <p>Идеально подходит для бизнеса и частных лиц</p>
        </div>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:mt-[70px]">
            <div className="flex flex-col gap-2 mt-[30px]">
                <Image src={Usluga} alt='Usluga'/>
                <h3 className='font-bold'>Выберите услугу</h3>
                <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
            </div>
            <div className="flex flex-col gap-2 mt-[30px]">
                <Image src={Money} alt='Dengi'/>
                <h3 className='font-bold'>Оплатите</h3>
                <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
            </div>
            <div className="flex flex-col gap-2 mt-[30px]">
                <Image src={Document} alt='Dokument'/>
                <h3 className='font-bold'>Получите результат</h3>
                <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
            </div>
        </div>
    </div>
  )
}

export default Example