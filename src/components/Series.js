import './Series.css';

export default function Series() {
    return(
        <div className='series'>
            <img src='./laptop3000.png' alt='laptop-picture' className='series--laptop' />

            <div className='series--description'>
                <h4 className='series--description--series'>
                    3000 Series
                </h4>

                <p className='series--description--text'>
                Modern design with important up-leveled essential productivity features 
                for each and every  business.
                </p>
            </div>
        </div>
    )
}