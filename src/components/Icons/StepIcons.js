import React from "react";
import { SVG } from "./SVG";

export const StepIcon = ({ step }, props) => {
    return getIcon(step, props);
};

const getIcon = (step, props) => {
    switch (step) {
        case 1:
            return <One {...props} />;
        case 2:
            return <Two {...props} />;

        case 3:
            return <Three {...props} />;
        case 4:
            return <Four {...props} />;
        case 5:
            return <Five {...props} />;
        case 6:
            return <Six {...props} />;
        case 7:
            return <Seven {...props} />;
        case 8:
            return <Eight {...props} />;
        default:
            return null;
    }
};

const One = ({ fill }, props) => (
    <SVG {...props}>
        <path d="m254.45 90.864a49.435 49.562 0 0 1-45.6-45.004 50.288 50.417 0 0 1 47.304-45.859 47.873 47.996 0 0 1 44.889 45.432 47.304 47.426 0 0 1-46.594 45.432zm200.72 91.434a47.02 47.141 0 1 1 0.99323 94.139 47.02 47.141 0 1 1-0.99323-94.139zm-398.75 0a47.026 47.146 0 1 1-1.4229 94.282 47.026 47.146 0 1 1 1.4229-94.282zm199.16 85.024a49.151 49.277 0 0 1 48.726 48.85 52.276 52.411 0 0 1-49.151 48.993 50.856 50.986 0 0 1-48.299-49.562 48.157 48.28 0 0 1 48.725-48.281zm-73.442 244.68a120.89 121.2 0 0 1-11.791-29.766 436.11 437.23 0 0 1 0-57.965 39.491 39.593 0 0 1 40.486-40.732q44.889-1.1399 89.921 0a38.355 38.453 0 0 1 39.491 41.017c0 19.938 1.2778 40.162 0 59.959a95.887 96.134 0 0 1-11.79 27.487zm329.71-120.63c-17.473 1.8504-34.946 3.9887-52.418 5.412-8.9496 0.7105-17.899 0-29.264 0 4.687 18.657 8.6656 33.611 12.217 48.565a33.951 34.038 0 0 1-16.763 42.726 121.6 121.91 0 0 1-53.697 3.9884c-2.7007 0-4.6871-21.505-4.6871-32.898 0-4.1284 6.6762-9.1153 11.222-12.248a42.617 42.726 0 0 1 14.205-2.9934c-9.8017-42.726-19.177-83.885-28.411-125.19-5.398-22.787-10.654-45.717-17.757-68.076a23.297 23.357 0 0 0-16.052-14.242c-49.294-1.1399-98.444-0.9948-147.6 0a21.166 21.221 0 0 0-16.052 11.821c-16.052 64.231-30.968 128.18-45.174 188.85 8.9496 8.8299 20.314 14.242 22.161 22.93a51.14 51.271 0 0 1-4.6872 32.329 120.89 121.2 0 0 1-51.566-3.8434 31.536 31.617 0 0 1-18.183-37.314c3.2644-17.233 7.6707-34.181 12.217-54.262h-60.374c-15.342 0-21.45-6.2665-21.166-21.933 0-28.484-2.1314-57.68 28.411-74.77a50.43 50.559 0 0 1 55.97 0c13.211 8.6872 19.603 7.121 22.161-9.9694 3.4093-21.933 8.8074-42.726 14.205-64.944 5.966-25.066 20.172-40.732 50.714-37.457v-38.453a42.617 42.726 0 0 1 23.865-42.869 35.23 35.32 0 0 1 44.889 14.242c10.513 14.242 19.604 14.242 30.116 0a35.656 35.747 0 0 1 45.174-14.242 40.77 40.875 0 0 1 24.291 42.726v38.169c39.634-3.1331 48.441 21.932 53.839 51.841 4.118 22.787 10.797 45.004 16.621 68.504a201.58 202.09 0 0 1 35.088-14.242c32.53-6.2668 51.85 12.533 66.624 38.168z" />
    </SVG>
);

const Two = ({ fill }, props) => (
    <SVG {...props}>
        <path d="m93.49 104.22a121.09 120.14 0 0 0-23.264 0c-4.4753 0-11.483 5.0329-11.781 8.1383-1.1949 18.199-6.2637 38.913 0 54.153 10.439 22.933 36.089 8.4335 54.879 10.653 11.781 1.3309 17.449-7.8419 17.299-19.679v-15.98c1.3415-37.582 1.3415-37.582-37.133-37.286zm-8.202 56.225c-3.1338 2.2201-14.913-8.5817-25.501-14.796 5.0727-3.551 7.1582-5.4747 7.7545-5.1783 20.878 11.689 29.826-5.77 41.756-16.275a39.519 39.209 0 0 1 11.184-5.6223l4.0244 4.7366a339.12 336.46 0 0 1-39.221 37.137zm303.48 239.69h0.89618a115.43 114.52 0 0 0 0-24.709c-1.1949-5.1783-6.8595-9.3216-10.588-13.908-3.1338 4.5856-9.0971 9.0252-9.2459 13.612-0.89618 26.928 0 53.857 0 80.637 0 3.4056 6.2631 6.6586 9.6934 9.9138 3.1338-3.551 8.9477-7.102 9.2459-10.801 0.45091-18.051 0-36.398 0-54.745zm-328.98-140.41c-1.4936-39.209-1.4936-39.209 33.405-39.209 39.966 0 39.966 0 39.966 38.913v15.98a14.913 14.796 0 0 1-16.404 16.128h-35.493c-17.001 1.3309-24.606-5.0329-21.922-22.194a59.652 59.184 0 0 0 0.45091-9.6168zm67.108-17.163-5.0727-7.102a139.44 138.34 0 0 0-14.913 9.3216c-9.8422 8.2853-17 23.377-33.703 11.097 0 0-7.0088 6.0664-6.4125 7.9901a18.045 17.903 0 0 0 29.826 7.102zm-66.81 112.15v-15.98c-1.4936-15.684 6.2637-21.454 21.176-20.566h15.957c36.835 0 36.835 0 36.984 37.286v15.98c0 13.76-5.6668 21.01-19.983 20.714h-29.826c-21.475 0-24.159-3.4056-23.115-25.449v-12.28zm1.7924 6.8062c10.588 5.3293 23.413 15.684 27.44 13.02a263.21 261.15 0 0 0 37.58-34.622l-3.2804-4.2892a25.501 25.301 0 0 0-10.439 3.551c-12.676 11.245-22.22 29.591-44.739 17.459-0.16909-0.16776-1.4936 1.3309-6.5619 5.4747zm315.7 150.03h-105.43c-24.01 0-33.256-15.98-21.475-36.398q51.747-88.775 104.39-177.55c15.658-26.633 32.808-26.041 48.318 0.88915q50.257 86.852 101.41 174.59c14.913 24.265 6.2631 38.765-21.922 38.913zm-93.504-31.219h188.65l-94.1-161.72zm-69.941-103.13h46.23c12.079 0 13.571-6.8062 13.272-15.832-0.28182-9.0252-0.744-16.571-12.974-16.423q-46.23 0-92.61 0c-12.079 0-12.974 7.2497-13.123 16.275-0.16909 9.0252 0 16.423 12.974 15.98 15.36-0.44738 30.87 0 46.23 0zm-0.28182-107.86h46.379c11.93 0 13.421-7.6937 13.273-16.423-0.16909-8.7299 0-19.087-12.527-19.087h-92.609c-12.974 0-13.124 9.3216-13.273 18.495-0.16909 9.1739 1.4936 17.607 14.913 17.163 13.422-0.44737 29.08-0.16777 43.844-0.16777zm-1.9389-110.67h46.528c12.676 0 14.913-6.3622 14.913-16.571 0-10.209-1.3414-17.459-14.167-17.311q-45.634 0-91.267 0c-11.632 0-13.72 6.658-13.422 16.275 0.28182 9.6174 0.89619 17.903 14.018 17.459 13.124-0.44738 29.08 0.16776 43.397 0.16776zm-47.572-82.561a561.47 557.07 0 0 0 57.116-0.73816 27.44 27.224 0 0 0 18.791-13.761c12.825-28.704-26.694-30.627-29.826-52.673 0-3.2546-7.7546-6.3622-12.378-8.4335a27.738 27.52 0 0 0-10.588 0c-14.913 0-31.019 0.73817-46.528 0a24.457 24.265 0 0 0-28.185 18.494 21.176 21.01 0 0 1-10.588 10.21c-16.405 6.3622-14.913 19.826-13.571 32.699 1.3414 12.872 10.439 14.796 20.58 14.796zm131.68 268.84 5.6668 2.3655a80.38 79.75 0 0 0 26.843-49.418c1.6402-76.199 1.1949-152.4 0-228.6 0-22.194-13.123-32.255-35.94-32.847h-17.895c-10.29 0-18.492 0.73817-18.791 14.796-0.28182 14.056 7.3076 17.755 18.939 16.127 17.597-2.3655 21.176 6.2146 21.176 21.01v233.92zm-295.42-98.097v166.6c0 31.515 9.9916 41.428 41.607 41.428h180.45c5.2193 0 12.527 0.88915 14.913-1.9237a152.11 150.92 0 0 0 16.703-22.933 74.564 73.98 0 0 0-20.133-6.0664h-182.24c-14.913 0-20.281-4.2892-20.133-20.122 1.0427-101.5 0.89618-203.15 1.3415-304.8 0-8.8775-2.5364-20.418 2.0854-25.745 4.6218-5.3237 17.001-3.4056 25.203-6.6586a18.939 18.791 0 0 0 11.035-12.133c0-5.6224-3.1338-14.796-7.3076-16.719-37.282-14.056-63.976 4.7366-64.125 44.388 0.45091 54.744 0.59746 109.79 0.59746 164.68z" />
    </SVG>
);
const Three = ({ fill }, props) => (
    <SVG {...props} viewBox="0 0 454.82 512">
        <path d="m163.7 125.67h126.67v-30.728h-126.67zm22.543 163.17c5.233 32.204 5.233 32.204 34.62 32.204h135.26v-32.204zm169.88-32.338v-32.204h-191.88v32.204zm-192.55-65.079h192.55v-31.533h-192.55zm-82.523 294.13c8.3192 7.2462 15.431 17.444 24.556 20.128a86.682 86.682 0 0 0 43.341 2.2831c6.575-1.6116 14.358-17.31 13.419-26.032a315.6 315.6 0 0 0-13.419-53.673 122.38 122.38 0 0 1-134.18 1.2087c-3.3523 9.7954-6.4407 17.98-8.9902 26.837a155.38 155.38 0 0 0-4.965 22.14c-2.4147 20.262 8.5881 30.728 28.313 33.143 23.616 3.0883 36.901-11.54 51.929-26.032zm0.94008-229.32a80.51 80.51 0 0 0-81.986 80.51 82.12 82.12 0 0 0 81.986 81.717 83.999 83.999 0 0 0 81.584-80.51 82.389 82.389 0 0 0-81.584-81.717zm305.54 130.16h-189.2c-19.591 0-26.837 8.4538-21.604 26.837a159.01 159.01 0 0 1 6.1726 19.724c2.0145 15.566 11.003 17.981 24.958 17.847h202.48c34.216 0 44.415-10.064 44.415-43.744v-268.37a53.673 53.673 0 0 0-17.041-42.133c-27.911-26.837-54.747-55.821-83.462-82.389a51.258 51.258 0 0 0-30.862-13.419c-73.801-1.0744-147.6-0.6688-221.54-0.6688-29.252 0-37.169 7.5137-37.303 36.632v128.68 56.76l65.482 9.9294v-168.13h193.36v48.843c0 10.734 3.6209 14.626 14.223 14.358h49.648z" />
    </SVG>
);
const Four = ({ fill }, props) => (
    <SVG {...props} viewBox="0 0 446.31 512">
        <path d="m393.6 0.28391h-172.96a49.817 49.817 0 0 0-51.989 51.095v79.452a52.883 52.883 0 0 0 53.394 53.905c4.8539 0 9.8358 0.76762 15.711 1.2794v63.868a42.409 42.409 0 0 0 4.2147-2.4284c18.011-17.883 35.638-36.15 54.288-53.266a35 35 0 0 1 20.821-8.6863c25.547-1.0235 51.861 0 77.792 0a49.051 49.051 0 0 0 51.095-51.095q0-40.621 0-81.241a47.518 47.518 0 0 0-52.372-52.883zm-3.9588 166.06c-23.631 0.76762-47.39 1.2794-70.894 0a40.876 40.876 0 0 0-38.321 16.478c-5.876 7.6642-12.774 14.69-19.288 21.971l-4.7265-2.2981c0-11.241-1.0235-22.482-1.6608-35.894h-31.679a32.828 32.828 0 0 1-35.511-35.894c-0.63729-25.548-0.76765-51.989 0-77.92a32.317 32.317 0 0 1 35.894-35.255q84.051 0 168.1 0a32.828 32.828 0 0 1 36.277 36.661v72.682c0 24.27-12.774 38.577-38.321 39.216zm-334.16 174.11v-8.1755c-7.6642-5.2368-14.69-13.668-22.993-15.073-11.497-1.9166-18.905 7.6642-20.31 19.033a18.522 18.522 0 0 0 20.821 19.416 82.901 82.901 0 0 0 22.482-15.2zm290.6 1.0234v-8.175c-7.4088-5.6206-14.179-14.434-22.226-15.967-11.241-2.1726-19.416 6.2593-21.077 18.139a18.139 18.139 0 0 0 20.055 20.182 80.091 80.091 0 0 0 23.248-14.179zm-224.05-32.19a29.252 29.252 0 0 0-30.274-28.613 28.102 28.102 0 0 0-28.869 29.635 29.89 29.89 0 0 0 30.018 29.252 30.529 30.529 0 0 0 29.124-30.274zm197.61 61.952 4.4706 89.416h30.529c0-22.61 1.1489-44.325 0-65.912a26.569 26.569 0 0 0-35-23.504zm-56.46-90.565a27.463 27.463 0 0 0-30.146 27.719 29.767 29.767 0 1 0 59.525 1.0235 27.974 27.974 0 0 0-29.38-28.741zm-229.16 179.98v-44.836c0-14.306 2.0422-29.507 3.1912-44.452a27.591 27.591 0 0 0-36.533 25.548c-1.5304 20.949 0 42.153 0 63.868zm99.124-197.74a44.58 44.58 0 0 0 43.941 45.602 46.241 46.241 0 0 0 45.475-44.708 47.39 47.39 0 0 0-43.814-44.964 44.963 44.963 0 0 0-45.602 44.07zm-33.212 221.24v-130.55c-24.398-4.3451-50.2 8.5583-52.755 33.339a973.99 973.99 0 0 0-0.76762 98.613h41.131c2.8098 0 5.4926-0.63731 12.391-1.4048zm151.62-128.5c12.774 43.303 2.0422 86.733 7.5368 129.27h52.244c0-30.019 1.4048-58.759 0-87.372a45.73 45.73 0 0 0-59.781-41.898zm-143.07 156.35h137.96v-123.9a68.722 68.722 0 0 0-65.657-67.189c-33.978-2.8098-69.105 22.098-71.532 56.204-2.6843 44.58-0.76764 89.416-0.76764 134.89z" />
    </SVG>
);
const Five = ({ fill }, props) => (
    <SVG {...props} viewBox="0 0 386.18 512">
        <path d="m75.163 334.58-29.124-31.493 16.025-10.312 14.911 10.729 55.739-44.731 14.632 16.165zm1.8108-136.98 54.764-44.173 14.771 16.165-71.765 59.641-28.845-27.87 13.935-15.746zm55.879 167.08 13.935 17-72.461 60.616-25.083-31.214 11.427-13.099 16.582 12.402zm60.477 51.419h137.4c5.4347 16.164 0.83699 22.017-15.747 21.738-35.534-0.83698-71.207-0.83698-106.74 0-16.164 0.26228-19.23-5.7134-14.91-21.738zm138.37-43.198v20.206h-145.06c6.8277-9.1973 10.869-19.37 15.05-19.509 42.92-1.1175 85.838-0.6956 130.01-0.6956zm0-104.37v19.091h-138.23l-2.6492-19.091zm-0.26228-87.232h-137.54c-4.5979-13.935-3.9026-21.181 13.099-20.902h110.5c15.747-1.2543 17.14 6.1314 13.935 20.902zm-0.15964 148.68h-137.68c-4.8769-15.189-2.37-22.853 15.328-22.435 40.272 0.83698 80.543 0 122.35 0zm0.83699-125.83v20.902h-131.68c-3.9026 0-7.5249-10.73-13.935-20.206zm15.328-150.08h-55.739c-6.6888-26.894-25.779-33.722-50.862-33.165a39.018 39.018 0 0 1-23.132-9.4755c-16.304-13.099-32.05-16.303-44.731-2.37a50.026 50.026 0 0 1-35.116 13.099c-12.124 1.9476-29.402 6.2706-33.862 15.05a31.214 31.214 0 0 1-35.394 17h-31.493a33.583 33.583 0 0 0-36.927 36.231q0 192.72 0 385.3a32.747 32.747 0 0 0 37.067 35.952q155.93 0 312 0c24.246 0 36.788-11.427 36.927-35.813q0-192.72 0-385.3c-0.15964-24.804-13.238-36.091-38.739-36.509zm-212.37-10.869c19.369 0 39.575 3.0652 52.813-17 0.83699-1.5326 10.173 2.0913 15.328 4.0396a111.48 111.48 0 0 0 29.124 12.402c37.346 2.6489 37.346 1.8108 32.608 41.804h-146.04v-24.107c-1.1175-12.402 5.0139-17.14 16.165-17.14zm203.87 446.89q-146.45-0.97383-292.63 0c-18.394 0-23.689-5.7134-23.689-23.968q0.97382-183.38 0-366.49c0-17.837 4.3188-25.919 23.271-24.107 15.885 1.3957 31.911 0 48.632 0 1.1175 10.73 1.9476 19.509 2.9283 29.96h192.3c0.83699-9.894 1.674-18.812 2.6492-29.96h58.526c13.935 0 13.238 9.6148 13.238 18.951v111.48 259.74c0.26228 19.37-6.2706 24.526-25.222 24.386z" />
    </SVG>
);
const Six = ({ fill }, props) => (
    <SVG {...props}>
        <path d="m402.17 512a238.78 237.72 0 0 1-40.415-44.378 76.819 76.478 0 0 1 36.552-103.55 24.071 23.964 0 0 0 16.196-28.106v-26.627h38.038c0.89287 1.4816 2.0778 2.3651 1.9318 3.2539-3.5661 27.958 2.3754 48.668 32.392 61.389a48.142 47.928 0 0 1 24.665 48.815c-0.89287 22.485 4.459 46.449-14.859 64.496a357.79 356.21 0 0 1-31.5 24.408zm-127.34-161.09 3.566-5.9168c-7.7268-6.3608-14.859-17.16-23.477-17.455-8.6175-0.27995-13.521 12.13-20.207 18.935l3.1224 4.4392zm-36.106-194.97-4.9026 5.9174 24.368 32.987c4.605-7.8401 7.1321-11.686 9.361-15.828 2.2295-4.1428 5.9432-11.982 8.7663-18.047a163.44 162.72 0 0 0-18.573-4.8808 162.26 161.54 0 0 0-19.019-0.16767zm-6.9838 290.97a104.01 103.55 0 0 0 42.941-81.655l-33.878-2.5159-28.38 56.211zm65.824-393.63a121.69 121.15 0 0 0-57.652 72.78l33.729 8.284 39.375-49.112zm-241.6 298.22a301.93 300.59 0 0 0 9.8069 48.372c14.858 38.461 22.882 39.496 47.547 10.059l-19.019-58.431zm57.354 102.07a102.82 102.36 0 0 0 92.123 6.8047l-12.778-33.875a121.84 121.3 0 0 1-39.97 0c-19.316-7.5444-27.785 0-33.58 15.976a122.14 121.6 0 0 1-5.795 11.095zm281.57-357.54a148.59 147.93 0 0 0 14.858-18.787 14.859 14.793 0 0 0-0.89287-13.314 83.654 83.282 0 0 0-80.533-15.68 254.38 253.25 0 0 0 4.3073 27.218 14.859 14.793 0 0 0 8.7669 8.4316c16.79 4.4392 34.026 7.8401 53.491 12.13zm60.029 108.28h-40.415v68.638a12.035 11.982 0 0 0 8.1722 8.4316c10.104 1.0343 20.356 0 31.797 0v-77.513zm-357.65 118.19v-75.442h-38.038v75.442zm358.83-144.38a310.54 309.17 0 0 0-4.3073-50.147c-11.589-44.378-13.224-38.461-44.576-16.124-0.89287 0-1.0389 1.9233 0 0 2.6732 15.828 6.2409 29.585 7.1321 43.047 1.6343 25.147 1.0389 25.147 26.894 24.408 3.566 0 7.578-1.1853 14.858-1.1853zm-198.21 55.324-42.496-39.496-27.488 24.704 44.576 36.685-40.118 42.603 25.259 21.745 38.93-38.017 41.307 38.757 24.071-21.597-40.564-42.603 39.375-42.307-28.38-24.852zm-257.05-156.8c0 32.248 5.9432 54.88 27.34 63.608 30.46 12.574 32.689 34.023 29.717 60.502a24.368 24.26 0 0 0 0 10.355c1.6342 3.5502 4.605 8.1359 7.8751 9.0232 25.408 6.2132 32.54 0 32.54-24.852v-24.408a17.087 17.011 0 0 1 11.886-19.674 78.602 78.253 0 0 0 46.21-91.862c-8.9151-38.313-36.998-56.064-79.196-59.17-42.198-3.1085-83.654 35.354-76.373 76.478z" />
    </SVG>
);
const Seven = ({ fill }, props) => (
    <SVG {...props}>
        <path d="m321.11 182.22a138.38 139.54 0 0 1-276.62 1.6008 138.38 139.54 0 0 1 276.62-1.6008zm-17.496 1.2014a121.01 122.03 0 1 0-120.62 120.3 121.28 122.3 0 0 0 120.62-120.3zm192.59 245.41c-21.87-22.723-44.535-44.777-67.2-66.832a38.703 39.03 0 0 0-18.821-11.762c-20.544-2.2747-31.943-17.243-45.993-29.272a425.86 429.46 0 0 0-35.787-24.995c56.861-109.6 44.667-200.49-37.245-260.51a184.1 185.66 0 0 0-238.58 19.114 179.99 181.51 0 0 0-15.772 238.19c61.766 82.069 154.94 93.564 263.89 32.48 1.7235 8.0199 1.0613 16.975 5.0365 20.718 25.183 24.059 38.438 55.871 57.922 83.539a487.1 491.21 0 0 0 66.272 67.634 48.246 48.653 0 0 0 68.658 0.80193 47.583 47.985 0 0 0-2.3856-69.104zm-313.73-81.534a163.16 164.54 0 1 1 165.28-163.87 162.23 163.6 0 0 1-165.28 163.87zm302.86 138.47c-14.05 13.366-29.027 12.43-47.053-5.0793a467.48 471.43 0 0 1-59.512-61.218c-18.557-26.733-29.823-58.945-56.331-80.198-2.1196-1.738 3.3112-13.367 6.4944-23.792 11.266 8.6882 17.628 12.565 22.798 17.51 15.11 14.971 26.508 34.084 52.223 34.351 5.4338 0 11.531 6.4157 16.302 10.96 20.412 19.916 40.691 40.099 60.573 60.549 17.363 17.777 18.556 33.149 4.5085 46.916z" />
    </SVG>
);
const Eight = ({ fill }, props) => (
    <SVG {...props} viewBox="0 0 512 322.65">
        <path d="m457.23 160.98a242.95 242.95 0 0 1-35.445 0c-5.7848-0.98615-10.708-7.5078-16-11.569 4.8-3.9399 9.4768-10.954 14.4-11.2 24.615-1.2327 50.092-1.2327 75.076 0 5.1694 0 9.9689 7.1384 14.892 10.83-5.1694 4.1865-9.8461 11.2-15.508 12.307a270.76 270.76 0 0 1-37.415-0.37213zm54.768-103.26c-4.3074 3.8143-7.9999 9.2307-13.046 11.077-24.615 9.5996-49.23 18.83-74.83 26.707-4.8 1.4746-12.307-3.5678-17.6-5.5382 3.4469-5.7843 5.6615-14.892 10.708-16.861 23.876-9.7229 48.368-18.215 73.107-25.599 6.0304-1.8467 13.661 1.8467 20.553 2.9538zm-94.767 152.74c31.015 11.569 59.691 21.907 87.875 33.476 3.0747 1.2327 5.5382 10.338 4.0609 14.03a15.138 15.138 0 0 1-13.046 6.523c-28.184-9.3535-56.245-19.569-83.814-30.645-3.2003-1.2327-5.9076-9.4768-5.0461-13.661 0.86056-4.1865 6.8923-6.8919 9.9689-9.7228zm-144.86 57.353v38.645c0 11.692-5.7848 18.215-18.215 15.63-43.076-8.9842-86.152-17.477-128.86-27.815-6.2769-1.4746-11.2-11.446-15.384-18.461-1.8467-2.9538 0-8.1232 0-12.307 0-38.276-2.7072-41.353-41.846-44.184-16-1.1071-32.122 0-48.122 0-16 0-20.184-6.3997-19.938-20.43q0-44.184 0-87.998c0-12.307 3.5678-19.692 16.246-19.446 90.952 1.9676 174.4-34.461 261.78-50.83 19.2-3.6934 38.153-8.492 56.861-14.03 5.0461-1.6002 8.6153-8.246 12.307-12.308l14.031-14.276c3.4469 6.0304 9.4768 12.307 9.8456 17.969 1.2327 23.015 0 46.153 0 69.168v194.83a49.23 49.23 0 0 1-0.61401 16.615 53.661 53.661 0 0 1-10.831 13.046c-4.3074-3.8143-12.307-7.6306-12.307-11.446 0-13.292-7.6305-16.123-18.092-18.338-17.107-4.3074-35.322-8.9846-56.86-14.031zm73.845-8.492v-208.24c-108.67 17.23-211.2 59.322-319.99 66.337v74.583c109.78 8.6153 212.18 47.876 320.12 67.322zm-92.798 38.153c-4.9233-15.877-5.7848-33.23-11.569-35.077-34.461-11.076-70.029-18.584-112.37-29.045 5.4154 17.477 6.523 36.922 13.046 38.891 33.476 10.338 68.553 15.754 111.01 25.23z" />
    </SVG>
);
