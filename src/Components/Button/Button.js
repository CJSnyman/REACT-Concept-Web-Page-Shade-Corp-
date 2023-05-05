import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({ type, className, children, onClick, id, disabled }) {
    return (
        <button type={type} className={className} id={id} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: "button",
    className: "",
    onClick: () => {},
    id: "",
    disabled: false,
};

export default Button;
