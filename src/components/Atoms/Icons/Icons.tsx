import React from "react";

type IconProps = Omit<React.SVGProps<SVGElement>, "ref">;

const ShoppingBagPlus = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-bag-plus-fill"
            width={26}
            height={26}
            viewBox="0 0 16 16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
            ></path>
        </svg>
    );
};

function EyeSlashHidden(props: IconProps) {
    return (
        <svg
            width={26}
            height={26}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Icons1">
                <g id="Strike"></g>
                <g id="H1"></g>
                <g id="H2"></g>
                <g id="H3"></g>
                <g id="list-ul"></g>
                <g id="hamburger-1"></g>
                <g id="hamburger-2"></g>
                <g id="list-ol"></g>
                <g id="list-task"></g>
                <g id="trash"></g>
                <g id="vertical-menu"></g>
                <g id="horizontal-menu"></g>
                <g id="sidebar-2"></g>
                <g id="Pen"></g>
                <g id="Pen1"></g>
                <g id="clock"></g>
                <g id="external-link"></g>
                <g id="hr"></g>
                <g id="info"></g>
                <g id="warning"></g>
                <g id="plus-circle"></g>
                <g id="minus-circle"></g>
                <g id="vue"></g>
                <g id="cog"></g>
                <g id="logo"></g>
                <g id="eye-slash">
                    <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z" />
                    <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" />
                    <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z" />
                </g>
                <g id="eye"></g>
                <g id="toggle-off"></g>
                <g id="shredder"></g>
                <g id="spinner--loading--dots-"></g>
                <g id="react"></g>
            </g>
        </svg>
    );
}

function EyeSlashShow(props: IconProps) {
    return (
        <svg
            width={26}
            height={26}
            viewBox="0 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Icons1">
                <g id="Strike"></g>
                <g id="H1"></g>
                <g id="H2"></g>
                <g id="H3"></g>
                <g id="list-ul"></g>
                <g id="hamburger-1"></g>
                <g id="hamburger-2"></g>
                <g id="list-ol"></g>
                <g id="list-task"></g>
                <g id="trash"></g>
                <g id="vertical-menu"></g>
                <g id="horizontal-menu"></g>
                <g id="sidebar-2"></g>
                <g id="Pen"></g>
                <g id="Pen1"></g>
                <g id="clock"></g>
                <g id="external-link"></g>
                <g id="hr"></g>
                <g id="info"></g>
                <g id="warning"></g>
                <g id="plus-circle"></g>
                <g id="minus-circle"></g>
                <g id="vue"></g>
                <g id="cog"></g>
                <g id="logo"></g>
                <g id="eye-slash"></g>
                <g id="eye">
                    <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
                    <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                </g>
                <g id="toggle-off"></g>
                <g id="shredder"></g>
                <g id="spinner--loading--dots-"></g>
                <g id="react"></g>
            </g>
        </svg>
    );
}

function CloseIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12.828}
            height={12.828}
            viewBox="0 0 12.828 12.828"
            {...props}
        >
            <g
                id="Group_82283"
                data-name="Group 82283"
                transform="translate(1.414 1.414)"
            >
                <line
                    id="Line_84924"
                    data-name="Line 84924"
                    x2={10}
                    y2={10}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                />
                <line
                    id="Line_84925"
                    data-name="Line 84925"
                    x1={10}
                    y2={10}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                />
            </g>
        </svg>
    );
}

function ArrowRightIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                fill="currentColor"
                data-name="Right"
            />
        </svg>
    );
}

function ArrowLeftIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"
                fill="currentColor"
                data-name="Left"
            />
        </svg>
    );
}

function StickHeadDownIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                d="M12 15a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 15z"
                fill="currentColor"
            />
        </svg>
    );
}

function StickHeadLeftIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
                fill="currentColor"
            />
        </svg>
    );
}

function StickHeadUpIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                d="M16 15a1 1 0 0 1-.707-.293L12 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15z"
                fill="currentColor"
            />
        </svg>
    );
}

function StickHeadRightIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path
                d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
                fill="currentColor"
            />
        </svg>
    );
}

function UserIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={32}
            height={32}
            {...props}
        >
            <path
                d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM23.942 32H8.058A4.062 4.062 0 0 1 4 27.942c0-6.616 5.383-12 12-12s12 5.384 12 12A4.062 4.062 0 0 1 23.942 32zM16 17.942c-5.514 0-10 4.486-10 10A2.06 2.06 0 0 0 8.058 30h15.884A2.06 2.06 0 0 0 26 27.942c0-5.514-4.486-10-10-10z"
                fill="currentColor"
            />
        </svg>
    );
}

function ShoppingCartIcon(props: IconProps) {
    return (
        <svg
            version="1.1"
            id="shopping_x5F_carts_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            width={128}
            height={128}
            {...props}
        >
            <g id="_x36__1_">
                <path
                    className="st2"
                    d="M19.3 14.4c-.3-1.3-1.4-2.2-2.7-2.2H2.7C1.2 12.3 0 13.5 0 15c0 1.5 1.2 2.7 2.7 2.7h11.7l25.8 74.1c.3 1.3 1.4 2.2 2.7 2.2h71.6v-5.4H45.1L19.3 14.4zm92.4 68.7L128 34H32.7L49 83h62.7zm-60-5.5-1.6-5.4h1.6v5.4zm57.2-29.9h11.2V45h-11.2v-5.4h10.9l-3.9 13.6h-7v-5.5zm0 8.1h6.2l-1.6 5.4h-4.7v-5.4zm0 8.2h3.9l-1.6 5.4h-2.3V64zm0 8.2h1.6l-1.6 5.4v-5.4zM98 39.5h8.2v5.4H98v-5.4zm0 8.2h8.2v5.4H98v-5.4zm0 8.1h8.2v5.4H98v-5.4zm0 8.2h8.2v5.4H98V64zm0 8.2h8.2v5.4H98v-5.4zM87.2 39.5h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2v-5.4zm0 8.1h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2V64zm0 8.2h8.2v5.4h-8.2v-5.4zM76.3 39.5h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2v-5.4zm0 8.1h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2V64zm0 8.2h8.2v5.4h-8.2v-5.4zM65.4 39.5h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2v-5.4zm0 8.1h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2V64zm0 8.2h8.2v5.4h-8.2v-5.4zM54.5 39.5h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2v-5.4zm0 8.1h8.2v5.4h-8.2v-5.4zm0 8.2h8.2v5.4h-8.2V64zm0 8.2h8.2v5.4h-8.2v-5.4zM40.9 39.5h10.9v5.4H40.6v2.7h11.2V53h-7l-3.9-13.5zm4.6 16.3h6.2v5.4H47l-1.5-5.4zm6.2 8.2v5.4h-2.3L47.9 64h3.8zm50.4 32.7c-5.3 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5c5.3 0 9.5-4.3 9.5-9.5s-4.2-9.5-9.5-9.5zm-51.7 0c-5.3 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5c5.3 0 9.5-4.3 9.5-9.5s-4.3-9.5-9.5-9.5z"
                    id="icon_9_"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
}

function VILanguageIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 420.165"
            width={512}
            height={420.165}
            {...props}
        >
            <path
                fillRule="nonzero"
                fill="currentColor"
                d="M74.316 0h363.368c20.398 0 38.963 8.366 52.425 21.816h.075C503.634 35.266 512 53.862 512 74.316v271.533c0 20.398-8.366 38.963-21.816 52.426l-.075.074c-13.462 13.45-32.027 21.816-52.425 21.816H74.316c-20.454 0-39.05-8.366-52.5-21.816l-1.065-1.164C7.926 383.822 0 365.702 0 345.849V74.316c0-20.454 8.366-39.05 21.816-52.5C35.266 8.366 53.862 0 74.316 0zm228.329 278.351V141.814h43.694v136.537h-43.694zM245.63 141.814h46.091l-33.86 136.537h-63.789l-33.86-136.537h46.096l18.565 86.731h1.97l18.787-86.731zM437.684 35.929H74.316c-10.54 0-20.138 4.328-27.098 11.289-6.961 6.96-11.289 16.558-11.289 27.098v271.533c0 10.175 4 19.457 10.49 26.349l.799.75c6.96 6.96 16.558 11.288 27.098 11.288h363.368c10.564 0 20.169-4.316 27.135-11.251 6.936-6.967 11.252-16.571 11.252-27.136V74.316c0-10.54-4.329-20.138-11.289-27.098-6.929-6.973-16.534-11.289-27.098-11.289z"
            />
        </svg>
    );
}

function ENLanguageIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 420.16"
            width={512}
            height={420.165}
            {...props}
        >
            <path
                fillRule="nonzero"
                fill="currentColor"
                d="M74.32 0h363.36C478.55 0 512 33.46 512 74.32v271.53c0 40.81-33.5 74.31-74.32 74.31H74.32C33.44 420.16 0 386.69 0 345.85V74.32C0 33.41 33.41 0 74.32 0zm148.91 226.79h-43.69v16.61h53.53v34.95h-97.22V141.81h96.12l-5.46 34.96h-46.97v18.35h43.69v31.67zm111.85 51.56c-3.99-5.79-36.19-58.98-36.48-58.98v58.98h-43.69V141.81h41.06c3.94 5.72 35.42 58.99 36.49 58.99v-58.99h43.69v136.54h-41.07zm102.6-242.42H74.32c-21.08 0-38.39 17.31-38.39 38.39v271.53c0 21.1 17.25 38.39 38.39 38.39h363.36c21.16 0 38.39-17.24 38.39-38.39V74.32c0-21.09-17.29-38.39-38.39-38.39z"
            />
        </svg>
    );
}

const Icons = {
    ShoppingBagPlus,
    EyeSlashHidden,
    EyeSlashShow,
    CloseIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    StickHeadDownIcon,
    StickHeadLeftIcon,
    StickHeadUpIcon,
    StickHeadRightIcon,
    UserIcon,
    ShoppingCartIcon,
    VILanguageIcon,
    ENLanguageIcon,
};

// Update file .stories when adding new icon
export default Icons;
