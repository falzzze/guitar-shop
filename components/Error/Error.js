class Error {

    render() {
        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>Нет доступа к сети</h3>
                <p>Проверьте состояние сети</p>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}


const errorPage = new Error();