
const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="space-y-4">
            <button className="border border-violet-950 rounded-2xl px-2 py-1 text-violet-950">{subHeading}</button>
            <h1 className="text-3xl font-bold">{heading}</h1>
        </div>
    );
};

export default SectionHeading;