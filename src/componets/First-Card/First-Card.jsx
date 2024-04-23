import '../First-Card/first-card.css'

export default function FirstCard({name, address, age,bgColor, BackgroundColor, wordColor}){
    return (
        <>
        <div className={'main'}>
            <div
                className={'wrap'}
            style={{backgroundColor:BackgroundColor}}
            >

                <div
                    style={{backgroundColor:bgColor}}
                    className={'name'}>
                    {name}
                </div>

                <p
                style={{color: wordColor}}
                className={'p'}
                >Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it
                    is pain..."
                </p>

                <div
                    style={{backgroundColor:bgColor}}
                    className={'name'}>
                    {"Location : " + address}
                </div>
                <div
                    style={{backgroundColor:bgColor}}
                    className={'name'}>
                    {"Age : " + age}
                </div>
            </div>
        </div>
        </>
    )
}