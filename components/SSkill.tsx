import classNames from 'classnames';

const SSkill = () => {
    return (
        <section id="skill" className="h-screen">
            
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto",
                    "border"
                )}
            >
                <p>This is a Skill Section</p>
            </div>
            
        </section>
    )
}
export default SSkill;