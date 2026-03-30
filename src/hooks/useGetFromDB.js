import Cookies from 'js-cookie';

const getFromDB = () => {
    const token = Cookies.get("mm-token");

    const getData = async (keysObj) => {
        try {
            const URL = `${import.meta.env.VITE_API_URL}/users/get`;
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token })
            })
            const res = await req.json();

            if (req.status !== 200) {
                return alert(res.err);
            }

            const obj = {};

            for (let k of Object.keys(keysObj)) {
                obj[k] = res[k] ?? "";
            }

            return obj;

        } catch (error) {
            return keysObj;
        }

    }

    return getData;
}


export default getFromDB;