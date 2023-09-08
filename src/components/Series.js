import './Series.css';

export default function Series( { image, seriesName, text }) {
    return(
        <div className='series'>
            <img src={image} alt={seriesName} className='series--laptop' />

            <div className='series--description'>
                <h4 className='series--description--series'>
                    {seriesName}
                </h4>

                <p className='series--description--text'>
                {text}
                </p>
            </div>
        </div>
    )
}