import React, {Component} from "react";

export default class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
			profileImageUrl: ""
		};
	}
	
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	
	handleSubmit = e => {
		this.setState({});
	};
	
	render() {
		const {email, username, password, profileImageUrl} = this.state;
		const {heading, buttonText, signUp} = this.props;
		return (
			<div>
				<div className="row justify-contnet-md-center text-center">
					<div className="col-md-6">
						<form action="" onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								className="form-control"
								id="email"
								name="email"
								onChange={this.handleChange}
								value={email}
							/>
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								onChange={this.handleChange}
								value={password}
							/>
							{signUp && (
								<div>
									<label htmlFor="email">Username:</label>
									<input
										type="text"
										className="form-control"
										id="username"
										name="username"
										onChange={this.handleChange}
										value={username}
									/>
									<label htmlFor="password">Image URL:</label>
									<input
										type="text"
										className="form-control"
										id="profileImageUrl"
										name="profileImageUrl"
										onChange={this.handleChange}
										value={profileImageUrl}
									/>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		);
	}
}
