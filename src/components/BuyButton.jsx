import React from "react";

function BuyButton({ props }) {
    return (
        <div>
            <p>Number of {props.name}: {props.numAsset}</p>
            <button>
                Buy {props.numAsset}
            </button>
        </div>
    );
}

export default BuyButton;