import { NextPage } from 'next';

import { SAbout, SHero, SProject, SSkill, } from '../components/components';

import classNames from 'classnames';

const Home:NextPage = () => {

    return (
        <>
            {/* Head */}

            {/* Header */}
            
            {/* Main */}
            <main className="relative z-[1]">
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