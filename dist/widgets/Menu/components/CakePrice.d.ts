import React from "react";
export declare enum Token {
    SPIRIT = "SPIRIT",
    ETH = "BNB"
}
interface Props {
    token?: Token;
    cakePriceUsd?: number;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
