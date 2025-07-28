import React from "react";

export default function MyUl(props){
    const [shownUL, setShownUL] = React.useState(false);
      const toggleUL = () => setShownUL((s) => !s);
    return (
    <>
    <div className="transition-all duration-300 ease-in-out">
    <div key={props.item} className="  flex justify-between border-gray-200 border-b-2">
        <ul className="text-xl">{props.item}</ul>
        <i
        className={shownUL ? "ri-arrow-drop-up-fill scale-200" : "ri-arrow-drop-down-fill scale-200"}
        onClick={toggleUL}
        />
    </div>

    {shownUL && <div className="text-xl  text-neutral-700">
        <p className="mt-10 text-sm">{props.item}</p>
    </div>}
    </div>
    </>
    )
}