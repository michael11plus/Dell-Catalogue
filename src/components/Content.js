import './Content.css';
import Category from './Category';
import { contentData } from '../data/contentData' 

export default function Content() {
    return(
        <div className='content'>
           {contentData.map((categoryData) => <Category key={categoryData.heading} {...categoryData} />)}
           
         
        </div>
    )
}