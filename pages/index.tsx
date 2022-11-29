import classNames from 'classnames';
import { NextPage } from 'next';

const Home:NextPage = () => {

    return (
        <>
            {/* Header */}
            
            <main>
                
                {/* START Section */}
                {   [1,2,3].map(i =>
                    <section 
                        key={i}
                        className={classNames(
                            'h-screen',
                            {'h-[50vh] border':i === 1}
                        )}
                    >
                    {i}
                    </section>
                )}

                
            </main>

            {/* Footer */}

        </>
    )
}
export default Home;