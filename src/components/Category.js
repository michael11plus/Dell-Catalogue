import './Category.css';
import Series from './Series';

export default function Category({ heading, series}) {
    return(
        <div className='category'>
            <p className='category--heading'>
                {heading}
            </p>
            <div className='category--line'></div>
            {series.map((seriesData) => <Series key={seriesData.seriesName} {...seriesData} />)}
        </div>
    )
}