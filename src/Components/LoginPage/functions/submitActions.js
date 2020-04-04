export const submitLogin = async (data) => {
    const url = "https://home-heroes.herokuapp.com/auth/login/";
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {}
    }).then( res => {
        if (res.status === 201) {
            return {
                status: res.status,
                ...res.json()
            }
        } else {
            throw res.status;
        }
    });
    return res;
};