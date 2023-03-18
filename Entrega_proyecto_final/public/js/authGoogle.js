function handleCredentialResponse(response) {
    const body = { id_token: response.credential };
    fetch("http://localhost:8080/api/auth/google", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp);
            localStorage.setItem("email", resp.usuario.correo);
        })
        .catch(console.warn);
}

const button = document.getElementById("g_id_signout");
button.onclick = async () => {
    console.log(google.accounts.id);
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
        console.log("consent revoked");
        localStorage.clear();
        location.reload();
    });
};
