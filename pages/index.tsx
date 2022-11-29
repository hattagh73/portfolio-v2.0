import { NextPage } from 'next';

import { SAbout, SHero, SProject, SSkill, } from '../components/components';

import classNames from 'classnames';

const Home:NextPage = () => {

    return (
        <>
            {/* Header */}
            
            <main>
                <SHero />
                <SAbout />
                <SSkill />
                <SProject />
            </main>

            {/* Footer */}

        </>
    )
}
export default Home;