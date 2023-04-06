import { html, VLitElement } from "../lit.js"

export class VLogin extends VLitElement {
	render() {
		return html`
			<img src="./img/bg-faded.png" class="coverBg" alt="">
			<div class="blob">
				<div class="bigCaption">Sistemə Giriş</div>
				<form action="">
					<div class="formRow">
						<label for="username">Usame</label>
						<input type="username" id="username" placeholder="Enter Username">
					</div>
					<div class="formRow">
						<label for="password">Password</label>
						<input type="password" id="password" placeholder="Enter Password">
					</div>
					<button class="loginButton" @click = ${e=>window.goTo("tabs")}>Login</button>
				</form>
			</div>
		`
	}
}


VLogin.tag = "v-login"
