import classNames from 'classnames';

const SProject = () => {
    return (
        <section id="project" className="h-screen">
            
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto",
                    "border"
                )}
            >
                <p>This is a Project section</p>
            </div>
            
        </section>
    )
}
export default SProject;