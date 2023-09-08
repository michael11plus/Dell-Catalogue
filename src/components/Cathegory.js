import './Cathegory.css';
import Series from './Series';

export default function Cathegory() {
    return(
        <div className='cathegory'>
            <p className='cathegory--heading'>
                2-1
            </p>
            <div className='cathegory--line'></div>

            <Series />
            <Series />
            <Series />
            <Series />
        </div>
    )
}