import FirstCard from "../First-Card/First-Card.jsx";
import './App.css'

function App() {

  return (
    <>
        <div className={'main'}>

        <FirstCard
            name={'Dilan Tharusha'}
            address={'Hanwella'}
            age={'24'} bgColor={'green'}
            BackgroundColor={'red'}
            wordColor={'white'}
        />

            <FirstCard
            name={'Yashoda Rashmika'}
            address={'Homagama'}
            age={'20'} bgColor={'#00a8ff'}
            BackgroundColor={'#353b48'}
            wordColor={'white'}
            />

            <FirstCard
                name={'Kanishka Dulanjaya'}
                bgColor={'#fbc531'}
                BackgroundColor={'Black'}
                wordColor={'white'}
                age={'30'} address={'Nawagamuwa'}
            />

            <FirstCard
            name={'Nuwan Ranaweera'}
            age={'26'} bgColor={'#ED4C67'}
            address={'Ambalanthota'}
            wordColor={'white'}
            BackgroundColor={'#1B1464'}
            />

            <FirstCard
            name={'Tharindi Vishara'}
            age={'24'} wordColor={'white'}
            address={'Negombo'}
            bgColor={'#009432'}
            BackgroundColor={'#006266'}
            />

            <FirstCard
            name={'Yashini Kavindya'}
            age={'24'} bgColor={'#B53471'}
            address={'Kaduwela'}
            BackgroundColor={'black'}
            wordColor={'white'}
            />

            <FirstCard
            name={'Namal Kumara'}
            BackgroundColor={'black'}
            age={'28'}  address={'Kurunegala'}
            wordColor={'yellow'}
            />

            <FirstCard
            name={'Avishka Vimukthi'}
            age={'24'} bgColor={'#EA2027'}
            wordColor={'yellow'}
            address={'Ranala'}
            BackgroundColor={'#1B1464'}
            />

            <FirstCard
            name={'Tharindu Dilip'}
            age={'25'} address={'Homagama'}
            wordColor={'white'}
            BackgroundColor={'#EA2027'}
            bgColor={'white'}
            />

            <FirstCard
            name={'Chathurya'}
            age={'26'}
            bgColor={'#12CBC4'} wordColor={'yellow'}
            address={'Padukka'}
            BackgroundColor={'#1B1464'}
            />


        </div>
    </>
  )
}

export default App
