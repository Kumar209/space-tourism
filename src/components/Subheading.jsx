// Subheading Component
// eslint-disable-next-line react/prop-types
export default function Subheading({number, heading}){

    return (
        <h2 className="subheading">
            <span>
                0{number}
            </span>
            {heading}
        </h2>
    );
    
}