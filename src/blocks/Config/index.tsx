import { Setting } from "./Setting";
import { Column } from "./Column";
import { Pages } from "./Pages";

export default function Config() {
    return (
        <>
            <Pages />
            <Column />
            <Setting />
        </>
    );
}