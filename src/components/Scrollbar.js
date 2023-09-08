import './Scrollbar.css';

export default function Scrollbar() {
    return(
        <div className='scrollbar'>
           <div className='scrollbar--dots'>
            
           </div>
             
            <div className='scrollbar--sections'>
                <img src="./dell-logo.png" alt='icon' className='scrollbar--sections--icon' />
                
                <div className='scrollbar--sections--caption'>
                    <h1 className='scrollbar--sections--caption--latitude'>
                        Latitude
                    </h1>
                     
                    <img src="./rectangle.png" alt='icon' className='scrollbar--sections--caption--rectangle' />

                    <p className='scrollbar--sections--caption--text'>
                        We make it intelligent.
                        You make it yours.
                    </p>
                </div>
            </div>
            
        </div>
    )
}